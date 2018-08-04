import {
  CHANGE_PRODUCT_PRICE_FILTER,
} from '../actions/actionTypes';

import products from '../../mockData/products'
import {getMaxVal, getMinVal, getValueFromUrl} from '../../utils/functions';

const minPrice = getMinVal(products, 'price');
const maxPrice = getMaxVal(products, 'price');
const minPriceFilter = getValueFromUrl('products.minPrice');
const maxPriceFilter = getValueFromUrl('products.maxPrice');

const initialState = {
  list: products,
  minPrice,
  maxPrice,
  minPriceFilter: minPriceFilter === null ? minPrice : minPriceFilter,
  maxPriceFilter: maxPriceFilter === null ? maxPrice : maxPriceFilter,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT_PRICE_FILTER:
      return {
        ...state,
        minPriceFilter: action.payload.filter[0],
        maxPriceFilter: action.payload.filter[1],
      };
    default:
      return state;
  }
};
