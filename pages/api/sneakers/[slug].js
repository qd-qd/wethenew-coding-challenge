import { sneakers } from '@db';

const findSneakerBySlug = (data, slug) =>
  data.find(sneaker => sneaker.slug === slug);

export default ({ method, query: { slug } }, res) => {
  if (method !== 'GET') {
    res.statusCode = 406;
    return res.end();
  }

  const sneaker = findSneakerBySlug(sneakers, slug);

  if (!sneaker)
    return res.status(404).json({ message: `Incorrect sneaker slug: ${slug}` });

  const data = {
    timestamp: new Date().getTime(),
    data: sneaker,
  };
  return res.status(200).json(data);
};
