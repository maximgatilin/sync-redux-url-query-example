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
        <h1 style={{marginBottom: 20}}>Users</h1>
        <div style={{
          display: 'flex',
          border: '1px solid #ccc',
          alignItems: 'center',
          padding: '0 15px',
          margin: '0 0 20px',
          borderRadius: 4
        }}>
          <h4 style={{
            fontSize: 20,
            margin: 0,
            borderRight: '1px solid #ccc',
            padding: '10px 10px 10px 0'
          }}>Filter by age</h4>
          <div style={{display: 'flex', flex: '1 1 auto', alignItems: 'center'}}>
            <div style={{flex: '0 0 auto', padding: '0 15px'}}>{minAgeFilter}</div>
            <Range
              min={minAge}
              max={maxAge}
              defaultValue={[minAgeFilter, maxAgeFilter]}
              onChange={changePeopleAgeFilter}
            />
            <div style={{flex: '0 0 auto', padding: '0 15px'}}>{maxAgeFilter}</div>
          </div>
        </div>

        <table className="table table-striped table-sm">
          <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
          </thead>
          <tbody>
          {this.props.people.map(person => <tr key={person.id}>
            <th scope="row">{person.first_name} {person.last_name}</th>
            <td>{person.age}</td>
          </tr>)}
          </tbody>
        </table>
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
