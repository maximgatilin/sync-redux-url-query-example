import {combineReducers} from 'redux';
import products from './products';
import users from './users';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  products,
  users,
});