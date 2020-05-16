import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button', () => {
  test('displays greeting', () => {
    const handler = () => {};
    const label = 'button-test';

    render(<Button onClick={handler} label={label} />);
    expect(screen.getByText(label)).toBeDefined();
    expect(screen.getByText(label)).toHaveAttribute('class');
    expect(screen.getByText(label)).toHaveAttribute('type');
  });

  test('is clickable', () => {
    const handler = jest.fn(e => e.preventDefault());
    const label = 'button-test';

    render(<Button onClick={handler} label={label} />);
    fireEvent.click(screen.getByText(label), 'leftClick');
    expect(handler).toHaveBeenCalledTimes(1);
  });

  test("doesn't break snapshot", () => {
    const handler = () => {};
    const label = 'button-test';
    const { container } = render(<Button onClick={handler} label={label} />);
    expect(container).toMatchSnapshot();
  });
});
