import { useContext } from 'react';
import SneakerListContext from '@utils/context/SneakerList';
import Card from '@components/Card';
import styles from './CardList.module.css';

const CardList = () => {
  const {
    store: { sneakers },
  } = useContext(SneakerListContext);

  return (
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
};

export default CardList;
