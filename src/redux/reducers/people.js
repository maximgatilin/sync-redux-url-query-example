import {
  CHANGE_PEOPLE_AGE_FILTER,
} from '../actions/actionTypes';

import people from '../../mockData/people';
import {getMaxVal, getMinVal, getValueFromUrl} from '../../utils/functions';

const minAge = getMinVal(people, 'age');
const maxAge = getMaxVal(people, 'age');
const minAgeFilter = getValueFromUrl('people.minAge');
const maxAgeFilter = getValueFromUrl('people.maxAge');

const initialState = {
  list: people,
  minAge,
  maxAge,
  minAgeFilter: minAgeFilter === null ? minAge : Number(minAgeFilter),
  maxAgeFilter: maxAgeFilter === null ? maxAge : Number(maxAgeFilter),
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