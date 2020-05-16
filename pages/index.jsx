import PropTypes from 'prop-types';

import getSneakerList from '@api/getSneakerList';
import CardList from '@components/CardList';
import styles from './index.module.css';

const Home = ({ sneakers }) => (
  <main className={styles.main}>
    <h1 className={styles.title}>
      <span className={styles.title__count}>{`${sneakers.length} `}</span>
      sneakers
    </h1>
    <hr className={styles.separator} />
    <CardList sneakers={sneakers} />
  </main>
);

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
