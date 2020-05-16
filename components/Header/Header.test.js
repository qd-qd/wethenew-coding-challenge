import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header', () => {
  test('displays greeting', () => {
    render(<Header />);
    expect(screen.getByRole('img')).toHaveAttribute('alt');
    expect(screen.getByRole('img')).toHaveAttribute('src');
  });

  test("doesn't break snapshot", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
