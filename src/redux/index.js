import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware());

window.getStore = () => {return store.getState()};

export default store;