import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Main extends Component {
  render() {
    return (
      <div>
        <nav style={{margin: 40, display: 'flex'}}>
          <div style={{marginRight: 20}}>
            <Link to={"/products"}>Products</Link>
          </div>
          <div style={{marginRight: 20}}>
            <Link to={"/people"}>People</Link>
          </div>
        </nav>
        <div style={{margin: 40}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
