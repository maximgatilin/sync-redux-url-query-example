import {replace} from 'react-router-redux';

export default store => next => action => {
  if (action.pushToUrl) {
    const state = store.getState();

    store.dispatch(replace({
      pathname: state.routing.locationBeforeTransitions.pathname,
      query: {
        ...state.routing.locationBeforeTransitions.query,
        ...action.pushToUrl
      }
    }));
  }

  return next(action);
}
