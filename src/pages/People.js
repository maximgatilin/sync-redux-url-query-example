import React, {Component} from 'react';
import { connect } from 'react-redux'

class People extends Component {
  render() {
    return (
      <div>
        People
      </div>
    );
  }
}

export default connect(state => ({
  people: state.people.list
}))(People);
