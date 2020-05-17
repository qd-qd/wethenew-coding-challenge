import { useState } from 'react';
import PropTypes from 'prop-types';

import Slider from '@components/Slider';
import Separator from '@components/Separator';
import Select from '@components/Select';
import Button from '@components/Button';
import styles from './SneakerView.module.css';

const SneakerView = ({ sneaker }) => {
  const [size, setSize] = useState(sneaker?.size[0]);

  const formattedSelectOptions = sneaker.size.map(value => ({
    label: `Size: ${value} - ${sneaker.price}€`,
    value,
  }));

  const handleClick = () => {
    // @dev: in a real case, logic would be here
  };

  return (
    <main className={styles.main}>
      <section className={styles.sneaker}>
        <div className={styles.sneaker__slider}>
          <Slider images={sneaker.shoes_pictures} />
        </div>
        <div className={styles.sneaker__details}>
          <h1 className={styles.sneaker__name}>
            {sneaker.name}
            <span className={styles.sneaker__brand}>
              {` by ${sneaker.brand}`}
            </span>
          </h1>
          <Separator className={styles.separator} />
          <p className={styles.sneaker__price}>{`from ${sneaker.price}€`}</p>
          <Select
            values={formattedSelectOptions}
            valueSelected={size}
            label="sizes"
            onChange={setSize}
          />
          <Button onClick={handleClick} label="give me one!" />
        </div>
      </section>
      <section className={styles.description}>
        <h2 className={styles.description__title}>description</h2>
        <p className={styles.description__content}>{sneaker.description}</p>
      </section>
    </main>
  );
};

SneakerView.propTypes = {
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
};

export default SneakerView;
