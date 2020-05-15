import getConfig from 'next/config';

const {
  publicRuntimeConfig: { apiEndpoint },
} = getConfig();

const getSneaker = async slug => {
  try {
    const res = await fetch(`${apiEndpoint}api/sneakers/${slug}`);
    return res.json();
  } catch (error) {
    return error;
  }
};

export default getSneaker;
