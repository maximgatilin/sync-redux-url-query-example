import { createSelector } from 'reselect'

export default createSelector(
  state => state.products.list,
  state => state.products.minPriceFilter,
  state => state.products.maxPriceFilter,
  (products, min, max) => {
    return products.filter(product => {
      return product.price >= min && product.price <=max;
    });
  }
);