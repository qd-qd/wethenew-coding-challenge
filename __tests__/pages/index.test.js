import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import sneaker from '@test/fixtures/sneaker.json';
import Home from '@pages';

const sneakerList = new Array(3)
  .fill(sneaker)
  .map((value, index) => ({ ...value, id: `${index}` }));

describe('Home', () => {
  test('displays greeting', () => {
    render(<Home sneakers={sneakerList} />);

    expect(screen.getByText(`${sneakerList.length}`)).toBeDefined();
    expect(screen.getByText('sneakers')).toBeDefined();
    expect(screen.getByTestId('card-list')).toBeDefined();
  });

  test("doesn't break snapshot", () => {
    const { container } = render(<Home sneakers={sneakerList} />);

    expect(container).toMatchSnapshot();
  });
});

/*
 ** @dev: nextjs pages generation is based on file system structure.
 ** Every files with .js/.jsx extension will be page, so if you create
 ** *.test.js files inside pages directory, this file will be exposed
 ** as a page by nextjs. That's why I created this global directory.
 ** All page's tests should be localized here.
 ** I know a solution to counter default nextjs behaviour but that required
 ** some configuration and I decided that's out of the scope of this technical
 ** test
 */
