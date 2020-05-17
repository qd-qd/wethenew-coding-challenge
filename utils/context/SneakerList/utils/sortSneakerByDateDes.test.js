import sortSneakerByDateDes from './sortSneakerByDateDes';

const input = [
  { release_date: '1589552163' },
  { release_date: '1489552163' },
  { release_date: '1689552163' },
  { release_date: '1789552163' },
  { release_date: '1189552163' },
];
const output = [
  { release_date: '1789552163' },
  { release_date: '1689552163' },
  { release_date: '1589552163' },
  { release_date: '1489552163' },
  { release_date: '1189552163' },
];

describe('sortSneakerByDateDes', () => {
  test('sort correctly', () => {
    expect(input.sort(sortSneakerByDateDes)).toEqual(output);
  });
});
