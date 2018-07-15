import {combineReducers} from 'redux';
import products from './products';
import people from './people';

export default combineReducers({
  products,
  people
});