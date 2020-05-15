import { sneakers } from '@db';

const mockedSneaker = slug =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(sneakers.find(sneaker => sneaker.slug === slug));
    }, 5),
  );

export default mockedSneaker;
