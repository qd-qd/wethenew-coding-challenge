import { sneakers } from '@db';
import getSneaker from './getSneaker';

jest.mock('./getSneaker');

describe('sneaker details structure', () => {
  test('values are correct', async () => {
    const targetedSneaker = sneakers[0];
    const sneaker = await getSneaker(targetedSneaker.slug);
    expect(sneaker.id).toBe(targetedSneaker.id);
    expect(sneaker.name).toBe(targetedSneaker.name);
    expect(sneaker.slug).toBe(targetedSneaker.slug);
    expect(sneaker.release_date).toBe(targetedSneaker.release_date);
    expect(sneaker.price).toBe(targetedSneaker.price);
    expect(sneaker.size).toEqual(targetedSneaker.size);
    expect(sneaker.shoes_pictures).toEqual(targetedSneaker.shoes_pictures);
    expect(sneaker.description).toBe(targetedSneaker.description);
  });

  test('values have the correct type', async () => {
    const targetedSneaker = sneakers[0];
    const sneaker = await getSneaker(targetedSneaker.slug);
    expect(typeof sneaker.id).toBe('string');
    expect(typeof sneaker.name).toBe('string');
    expect(typeof sneaker.slug).toBe('string');
    expect(typeof sneaker.release_date).toBe('string');
    expect(typeof sneaker.price).toBe('string');
    expect(Array.isArray(sneaker.size)).toBe(true);
    expect(Array.isArray(sneaker.shoes_pictures)).toBe(true);
    expect(typeof sneaker.description).toBe('string');
  });
});
