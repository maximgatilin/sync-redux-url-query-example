import React, {Component} from 'react';
import { connect } from 'react-redux'

class Products extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => <div key={product}>{product}</div>)}
      </div>
    );
  }
}

export default connect(state => ({
  products: state.products.list
}))(Products);
