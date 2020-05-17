import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { SneakerListProvider } from '@utils/context/SneakerList';
import sneaker from '@test/fixtures/sneaker.json';
import HomeView from './HomeView';

const sneakerList = new Array(3)
  .fill(sneaker)
  .map((value, index) => ({ ...value, id: `${index}` }));

describe('Home', () => {
  test('displays greeting', () => {
    render(
      <SneakerListProvider initialData={sneakerList}>
        <HomeView />
      </SneakerListProvider>,
    );

    expect(screen.getByText(`${sneakerList.length}`)).toBeDefined();
    expect(screen.getByText('sneakers')).toBeDefined();
    expect(screen.getByTestId('card-list')).toBeDefined();
  });

  test("doesn't break snapshot", () => {
    render(
      <SneakerListProvider initialData={sneakerList}>
        <HomeView />
      </SneakerListProvider>,
    );

    expect(screen.getByTestId('homeview')).toMatchSnapshot();
  });
});
