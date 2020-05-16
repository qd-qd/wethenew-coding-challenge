import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select from './Select';

let props = {};

beforeEach(() => {
  props = {
    label: 'fake label',
    values: [
      {
        label: 'label-1',
        value: '1',
      },
      {
        label: 'label-2',
        value: '2',
      },
      {
        label: 'label-3',
        value: '3',
      },
      {
        label: 'label-4',
        value: '4',
      },
    ],
    valueSelected: '3',
    onChange: jest.fn(() => {}),
  };
});

describe('Select', () => {
  test('displays greeting', () => {
    render(
      <Select
        label={props.label}
        values={props.values}
        valueSelected={props.valueSelected}
        onChange={props.onChange}
      />,
    );

    expect(screen.getByTestId('label')).toBeDefined();
    expect(screen.getByTestId('label')).toHaveAttribute('for');
    expect(screen.getByTestId('label').htmlFor).toBe(`${props.label}-select`);

    expect(screen.getByText(props.label)).toBeDefined();

    expect(screen.getByTestId('select')).toBeDefined();
    expect(screen.getByTestId('select')).toHaveAttribute('class');
    expect(screen.getByTestId('select')).toHaveAttribute('id');
    expect(screen.getByTestId('select').id).toBe(`${props.label}-select`);

    props.values.forEach(({ value, label }) => {
      expect(screen.getByTestId(`option-${value}`)).toBeDefined();
      expect(screen.getByTestId(`option-${value}`).value).toBe(value);
      expect(screen.getByText(label)).toBeDefined();
    });

    // @dev: select element displays the correct value
    expect(screen.getByDisplayValue(props.values[2].label)).toBeDefined();
  });

  test('is interactive', async () => {
    render(
      <Select
        label={props.label}
        values={props.values}
        valueSelected={props.valueSelected}
        onChange={props.onChange}
      />,
    );

    expect(screen.getByDisplayValue(props.values[2].label)).toBeDefined();
    fireEvent.change(
      screen.getByTestId('select', {
        target: { value: '4' },
      }),
    );
    expect(props.onChange).toHaveBeenCalledTimes(1);
    fireEvent.change(
      screen.getByTestId('select', {
        target: { value: '1' },
      }),
    );
    expect(props.onChange).toHaveBeenCalledTimes(2);
  });

  test("doesn't break snapshot", () => {
    const { container } = render(
      <Select
        label={props.label}
        values={props.values}
        valueSelected={props.valueSelected}
        onChange={props.onChange}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
