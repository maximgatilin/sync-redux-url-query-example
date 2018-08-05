import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Range } from 'rc-slider';

import {changeUsersAgeFilter} from '../redux/actions'
import filteredUsers from '../redux/selectors/filteredUsers';

class users extends Component {
  render() {
    const {minAge, maxAge, changeUsersAgeFilter, minAgeFilter, maxAgeFilter} = this.props;

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
              onChange={changeUsersAgeFilter}
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
          {this.props.users.map(user => <tr key={user.id}>
            <th scope="row">{user.first_name} {user.last_name}</th>
            <td>{user.age}</td>
          </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}


export default connect(state => ({
  users: filteredUsers(state),
  minAge: state.users.minAge,
  maxAge: state.users.maxAge,
  minAgeFilter: state.users.minAgeFilter,
  maxAgeFilter: state.users.maxAgeFilter,
}), {
  changeUsersAgeFilter: changeUsersAgeFilter
})(users);
