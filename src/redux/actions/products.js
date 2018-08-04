import { CHANGE_PRODUCT_PRICE_FILTER } from './actionTypes';

export const changeProductPriceFilter = (filter) => ({
  type: CHANGE_PRODUCT_PRICE_FILTER,
  payload: {filter},
  pushToUrl: {
    minPrice: filter[0],
    maxPrice: filter[1]
  }
});