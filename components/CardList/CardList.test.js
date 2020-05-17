import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import sneaker from '@test/fixtures/sneaker.json';
import { SneakerListProvider } from '@utils/context/SneakerList';
import CardList from './CardList';

const sneakerList = new Array(3)
  .fill(sneaker)
  .map((value, index) => ({ ...value, id: `${index}` }));

describe('CardList', () => {
  test('displays greeting', () => {
    render(
      <SneakerListProvider initialData={sneakerList}>
        <CardList />
      </SneakerListProvider>,
    );

    expect(screen.getByTestId('card-list')).toBeDefined();
    expect(screen.getByTestId('card-list').childElementCount).toBe(
      sneakerList.length,
    );
  });

  test("doesn't break snapshot", () => {
    render(
      <SneakerListProvider initialData={sneakerList}>
        <CardList />
      </SneakerListProvider>,
    );

    expect(screen.getByTestId('card-list')).toMatchSnapshot();
  });
});
