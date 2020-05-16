import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Separator from './Separator';

describe('Separator', () => {
  test('displays greeting', () => {
    const { container } = render(<Separator />);
    expect(container.firstChild.classList.contains('separator')).toBe(true);
  });

  test('displays custom className', () => {
    const className = 'fake_class';
    const { container } = render(<Separator className={className} />);
    expect(container.firstChild.classList.contains('separator')).toBe(true);
    expect(container.firstChild.classList.contains(className)).toBe(true);
  });

  test("doesn't break snapshot", () => {
    const { container } = render(<Separator />);

    expect(container).toMatchSnapshot();
  });
});
