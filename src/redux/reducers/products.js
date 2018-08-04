import {
  CHANGE_PRODUCT_PRICE_FILTER,
} from '../actions/actionTypes';

import products from '../../mockData/products'
import {getMaxVal, getMinVal} from '../../utils/functions';

const initialState = {
  list: products,
  minPrice: getMinVal(products, 'price'),
  maxPrice: getMaxVal(products, 'price'),
  minPriceFilter: getMinVal(products, 'price'),
  maxPriceFilter: getMaxVal(products, 'price')
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