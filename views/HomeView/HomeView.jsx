import PropTypes from 'prop-types';

import CardList from '@components/CardList';
import Separator from '@components/Separator';
import styles from './HomeView.module.css';

const HomeView = ({ sneakers }) => (
  <main className={styles.main}>
    <h1 className={styles.title}>
      <span className={styles.title__count}>{`${sneakers.length} `}</span>
      sneakers
    </h1>
    <Separator />
    <CardList sneakers={sneakers} />
  </main>
);

HomeView.propTypes = {
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

export default HomeView;
