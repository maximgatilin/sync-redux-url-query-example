import { createSelector } from 'reselect'

export default createSelector(
  state => state.users.list,
  state => state.users.minAgeFilter,
  state => state.users.maxAgeFilter,
  (users, min, max) => {
    return users.filter(user => {
      return user.age >= min && user.age <=max;
    }).sort((a, b) => {
      return a.age - b.age;
    });
  }
);