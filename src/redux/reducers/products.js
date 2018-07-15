import {
  PRODUCT_ACTION,
} from '../actions/actionTypes';

const initialState = {
  list: [1,2,3]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};