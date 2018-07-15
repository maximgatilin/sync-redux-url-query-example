import React, {Component} from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <nav style={{margin: 40, display: 'flex'}}>
          <div style={{marginRight: 20}}>
            <a href="/products">Products</a>
          </div>
          <div style={{marginRight: 20}}>
            <a href="/people">People</a>
          </div>
        </nav>
        <div style={{margin: 40}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
