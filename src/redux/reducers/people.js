import {
  CHANGE_PEOPLE_AGE_FILTER,
} from '../actions/actionTypes';

import people from '../../mockData/people';
import {getMaxVal, getMinVal} from '../../utils/functions';

const initialState = {
  list: people,
  minAge: getMinVal(people, 'age'),
  maxAge: getMaxVal(people, 'age'),
  minAgeFilter: getMinVal(people, 'age'),
  maxAgeFilter: getMaxVal(people, 'age')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PEOPLE_AGE_FILTER:
      return {
        ...state,
        minAgeFilter: action.payload.filter[0],
        maxAgeFilter: action.payload.filter[1],
      };
    default:
      return state;
  }
};