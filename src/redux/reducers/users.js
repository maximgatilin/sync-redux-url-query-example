import {
  CHANGE_USERS_AGE_FILTER,
} from '../actions/actionTypes';

import users from '../../mockData/users';
import {getMaxVal, getMinVal, getValueFromUrl} from '../../utils/functions';
import {LOCATION_CHANGE} from 'react-router-redux';

const minAge = getMinVal(users, 'age');
const maxAge = getMaxVal(users, 'age');
const minAgeFilter = getValueFromUrl('users.minAge');
const maxAgeFilter = getValueFromUrl('users.maxAge');

const initialState = {
  list: users,
  minAge,
  maxAge,
  minAgeFilter: minAgeFilter === null ? minAge : Number(minAgeFilter),
  maxAgeFilter: maxAgeFilter === null ? maxAge : Number(maxAgeFilter),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERS_AGE_FILTER:
      return {
        ...state,
        minAgeFilter: action.payload.filter[0],
        maxAgeFilter: action.payload.filter[1],
      };
    case LOCATION_CHANGE:
      return action.payload.pathname === '/users' ? state : {
        ...state,
        minAgeFilter: minAge,
        maxAgeFilter: maxAge
      };
    default:
      return state;
  }
};