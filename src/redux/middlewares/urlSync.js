// import store from '../index';
//
// store.dispatch(push({
//   pathname: "/people",
//   query: {
//     foo: "bar",
//     baz: "3"
//   }
// }));

export default store => next => action => {
  return next(action);
}
