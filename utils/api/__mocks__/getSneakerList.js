import { sneakers } from '@db';

const mockedSneakerList = () =>
  new Promise(resolve => setTimeout(() => resolve(sneakers), 5));

export default mockedSneakerList;
