import { createSelector } from 'reselect'

export default createSelector(
  state => state.people.list,
  state => state.people.minAgeFilter,
  state => state.people.maxAgeFilter,
  (people, min, max) => {
    return people.filter(person => {
      return person.age >= min && person.age <=max;
    }).sort((a, b) => {
      return a.age - b.age;
    });
  }
);