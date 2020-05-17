import PropTypes from 'prop-types';
import ErrorPage from 'next/error';

import getSneaker from '@api/getSneaker';
import SneakerView from '@views/SneakerView';

const SneakerPage = ({ sneaker, statusCode }) => {
  if (statusCode !== 200) {
    return <ErrorPage statusCode={statusCode} />;
  }

  return <SneakerView sneaker={sneaker} />;
};

export async function getServerSideProps({ query }) {
  const { data } = await getSneaker(query.slug);
  const statusCode = data ? 200 : 404;
  return { props: { statusCode, sneaker: data ?? {} } };
}

SneakerPage.propTypes = {
  sneaker: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    slug: PropTypes.string,
    release_date: PropTypes.string,
    price: PropTypes.string,
    size: PropTypes.arrayOf(PropTypes.string),
    shoes_pictures: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }).isRequired,
  statusCode: PropTypes.number.isRequired,
};

export default SneakerPage;
