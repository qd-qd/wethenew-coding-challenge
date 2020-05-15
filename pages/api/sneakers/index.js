import { sneakers } from '@db';

export default (req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 406;
    return res.end();
  }

  const data = {
    timestamp: new Date().getTime(),
    data: sneakers,
  };

  return res.status(200).json(data);
};
