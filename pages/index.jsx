import PropTypes from 'prop-types';

import getSneakerList from '@api/getSneakerList';
import HomeView from '@views/HomeView';

const Home = ({ sneakers }) => <HomeView sneakers={sneakers} />;

export async function getServerSideProps() {
  const { data: sneakers } = await getSneakerList();

  // @dev: That pass requested data to the page via props
  return { props: { sneakers } };
}

Home.propTypes = {
  sneakers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      slug: PropTypes.string,
      release_date: PropTypes.string,
      price: PropTypes.string,
      size: PropTypes.arrayOf(PropTypes.string),
      shoes_pictures: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default Home;
