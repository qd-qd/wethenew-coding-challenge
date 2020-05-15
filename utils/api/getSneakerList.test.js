import { sneakers } from '@db';
import getSneakerList from './getSneakerList';

jest.mock('./getSneakerList');

describe('sneaker list', () => {
  test('response length is correct', async () => {
    const sneakerList = await getSneakerList();
    expect(sneakerList.length).toBe(sneakers.length);
  });
});
