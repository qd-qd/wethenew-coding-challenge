import PropTypes from 'prop-types';

import Card from '@components/Card';
import styles from './CardList.module.css';

const CardList = ({ sneakers }) => (
  <section className={styles.container} data-testid="card-list">
    {sneakers.map(sneaker => (
      <Card
        key={sneaker.id}
        slug={sneaker.slug}
        price={sneaker.price}
        name={sneaker.name}
        brand={sneaker.brand}
        image={sneaker.shoes_pictures?.[0]}
      />
    ))}
  </section>
);

CardList.propTypes = {
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

export default CardList;
