// import store from '../index';
//
// store.dispatch(push({
//   pathname: "/people",
//   query: {
//     foo: "bar",
//     baz: "3"
//   }
// }));

import {
  PRODUCT_ACTION
} from '../actions/actionTypes';

export default store => next => action => {
    if (action.type === PRODUCT_ACTION) {
      console.log('product action');
    }

  return next(action);
}
