const getConfig = require('next.config.js');

const {
  publicRuntimeConfig: { apiEndpoint },
} = getConfig;

const getSneakerList = async () => {
  try {
    const res = await fetch(`${apiEndpoint}api/sneakers`);
    return res.json();
  } catch (error) {
    return error;
  }
};

export default getSneakerList;
