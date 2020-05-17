import sortSneakerByPriceDes from './sortSneakerByPriceDes';

const input = [
  { price: '9' },
  { price: '000999' },
  { price: '758' },
  { price: '647,23' },
  { price: '1' },
];
const output = [
  { price: '000999' },
  { price: '758' },
  { price: '647,23' },
  { price: '9' },
  { price: '1' },
];

describe('sortSneakerByPriceDes', () => {
  test('sort correctly', () => {
    expect(input.sort(sortSneakerByPriceDes)).toEqual(output);
  });
});
