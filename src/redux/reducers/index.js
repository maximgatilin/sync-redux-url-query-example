import {combineReducers} from 'redux';
import products from './products';
import people from './people';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  products,
  people,
});