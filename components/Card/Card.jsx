import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

const Card = ({ slug, image, price, name, brand }) => (
  <Link href="/[slug]" as={`/${slug}`}>
    <a data-testid="card-link">
      <div className={styles.container}>
        <img
          src={image}
          alt={`The ${name} sneaker by ${brand}`}
          className={styles.image}
        />
        <div className={styles['section-infos']}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>
            {price}
            <span>€</span>
          </p>
        </div>
        <p className={styles.brand}>{brand}</p>
      </div>
    </a>
  </Link>
);

Card.defaultProps = {
  image: '/sneakers-placeholder.png',
};

Card.propTypes = {
  slug: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Card;
