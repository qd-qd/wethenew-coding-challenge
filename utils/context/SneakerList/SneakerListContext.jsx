import { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

import {
  sortSneakerByPriceAsc,
  sortSneakerByPriceDes,
  sortSneakerByDateDes,
} from './utils';
import sorts from './sorts';

const SneakerListContext = createContext();

const SneakerListReducer = (store, action) => {
  switch (action) {
    case sorts.PRICE_ASCENDING:
      return {
        sneakers: store.sneakers.sort(sortSneakerByPriceAsc),
        sort: action,
      };

    case sorts.PRICE_DESCENDING:
      return {
        sneakers: store.sneakers.sort(sortSneakerByPriceDes),
        sort: action,
      };

    case sorts.DATE_DESCENDING:
      return {
        sneakers: store.sneakers.sort(sortSneakerByDateDes),
        sort: action,
      };

    default:
      throw new Error(`Incorrect sorting rules`);
  }
};

const SneakerListProvider = ({ children, initialData }) => {
  const [store, dispatch] = useReducer(SneakerListReducer, {
    sneakers: initialData,
    sort: undefined,
  });

  const updateSortingRules = rule => {
    if (typeof rule !== 'string')
      throw new TypeError('Incorrect sorting rules');

    if (Object.values(sorts).includes(rule)) dispatch(rule);
    else throw new Error('Incorrect sorting rules');
  };

  return (
    <SneakerListContext.Provider
      value={{
        store,
        updateSortingRules,
      }}
    >
      {children}
    </SneakerListContext.Provider>
  );
};

SneakerListProvider.propTypes = {
  initialData: PropTypes.arrayOf(
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
  children: PropTypes.node.isRequired,
};

export default SneakerListContext;
export { SneakerListProvider };

/*
 ** @todo: Test Provider/Context/reducer
 ** - Default values
 ** - Update function
 ** - Values passing
 */
