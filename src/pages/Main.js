import React, {Component} from 'react';
import {Link} from 'react-router';
import 'rc-slider/assets/index.css';

export default class Main extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">Redux URL Sync Example</a>
          <ul className="nav">
            <li className="nav-item">
              <Link className={'nav-link'} activeClassName={'active'} to={"/products"}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className={'nav-link'} activeClassName={'active'} to={"/people"}>People</Link>
            </li>
          </ul>
        </nav>

        <div style={{margin: 15}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
