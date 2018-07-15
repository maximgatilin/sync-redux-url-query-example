import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import urlSyncMiddleware from './middlewares/urlSync';
import {createLogger} from 'redux-logger';

const devLogger = createLogger({
  collapsed: true
});

const middleware = routerMiddleware(browserHistory);

const store = createStore(rootReducer, applyMiddleware(middleware, urlSyncMiddleware, devLogger));

window.getStore = () => {return store.getState()};

export default store;