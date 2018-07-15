import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Range } from 'rc-slider';

import {changePeopleAgeFilter} from '../redux/actions'
import filteredPeople from '../redux/selectors/filteredPeople';

class People extends Component {
  render() {
    const {minAge, maxAge, changePeopleAgeFilter, minAgeFilter, maxAgeFilter} = this.props;

    return (
      <div>
        <h2>People</h2>
        <h4>Filter by age: </h4>
        <div style={{display: 'flex'}}>
          <div style={{flex: '0 0 auto', padding: '0 10px'}}>{minAgeFilter}</div>
          <Range
            min={minAge}
            max={maxAge}
            defaultValue={[minAgeFilter, maxAgeFilter]}
            onChange={changePeopleAgeFilter}
          />
          <div style={{flex: '0 0 auto', padding: '0 10px'}}>{maxAgeFilter}</div>
        </div>

        <ul>
          {this.props.people.map(person => <li key={person.id}>
            <span>{person.first_name} {person.last_name} ({person.age} years old)</span>
          </li>)}
        </ul>
      </div>
    );
  }
}


export default connect(state => ({
  people: filteredPeople(state),
  minAge: state.people.minAge,
  maxAge: state.people.maxAge,
  minAgeFilter: state.people.minAgeFilter,
  maxAgeFilter: state.people.maxAgeFilter,
}), {
  changePeopleAgeFilter
})(People);
