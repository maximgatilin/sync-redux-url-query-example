import { CHANGE_USERS_AGE_FILTER } from './actionTypes';

export const changeUsersAgeFilter = (filter) => ({
  type: CHANGE_USERS_AGE_FILTER,
  payload: {filter},
  pushToUrl: {
    minAge: filter[0],
    maxAge: filter[1]
  }
});