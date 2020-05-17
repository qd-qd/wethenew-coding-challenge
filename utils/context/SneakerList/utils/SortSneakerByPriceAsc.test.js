import sortSneakerByPriceAsc from './sortSneakerByPriceAsc';

const input = [
  { price: '9' },
  { price: '000999' },
  { price: '758' },
  { price: '647,23' },
  { price: '1' },
];
const output = [
  { price: '1' },
  { price: '9' },
  { price: '647,23' },
  { price: '758' },
  { price: '000999' },
];

describe('sortSneakerByPriceAsc', () => {
  test('sort correctly', () => {
    expect(input.sort(sortSneakerByPriceAsc)).toEqual(output);
  });
});
