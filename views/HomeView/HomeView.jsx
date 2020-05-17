import { useContext } from 'react';

import CardList from '@components/CardList';
import Separator from '@components/Separator';
import SneakerListContext from '@utils/context/SneakerList';
import sorts from '@utils/context/SneakerList/sorts';
import styles from './HomeView.module.css';
import Select from '../../components/Select/Select';

const HomeView = () => {
  const { store, updateSortingRules } = useContext(SneakerListContext);

  return (
    <main className={styles.main} data-testid="homeview">
      <h1 className={styles.title}>
        <span className={styles.title__count}>
          {`${store.sneakers.length} `}
        </span>
        sneakers
      </h1>
      <Separator />
      <div className={styles.select__container}>
        <Select
          label="Sort by"
          values={[
            {
              value: '',
              label: '',
            },
            {
              value: sorts.PRICE_ASCENDING,
              label: 'price ascending',
            },
            {
              value: sorts.PRICE_DESCENDING,
              label: 'price descending',
            },
            {
              value: sorts.DATE_DESCENDING,
              label: 'date descending',
            },
          ]}
          valueSelected={store.sort}
          onChange={updateSortingRules}
        />
      </div>
      <CardList />
    </main>
  );
};

export default HomeView;
