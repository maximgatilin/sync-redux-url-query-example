import { CHANGE_PEOPLE_AGE_FILTER } from './actionTypes';

export const changePeopleAgeFilter = (filter) => ({
  type: CHANGE_PEOPLE_AGE_FILTER,
  payload: {filter}
});