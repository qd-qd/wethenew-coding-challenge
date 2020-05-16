import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import sneaker from '@test/fixtures/sneaker.json';
import MyApp from '@pages/_app';
import Home from '@pages';

const sneakerList = new Array(3)
  .fill(sneaker)
  .map((value, index) => ({ ...value, id: `${index}` }));

describe('App', () => {
  test('displays greeting', () => {
    render(<MyApp Component={Home} pageProps={{ sneakers: sneakerList }} />);

    expect(screen.getByTestId('header')).toBeDefined();
    expect(screen.getByTestId('card-list')).toBeDefined();
  });

  test("doesn't break snapshot", () => {
    const { container } = render(
      <MyApp Component={Home} pageProps={{ sneakers: sneakerList }} />,
    );

    expect(container).toMatchSnapshot();
  });
});
