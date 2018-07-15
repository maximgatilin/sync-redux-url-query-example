import React, {Component} from 'react';
import { connect } from 'react-redux';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import {productAction} from '../redux/actions';

class Products extends Component {
  render() {
    return (
      <div>
        <Range
          min={20}
          max={100}
          defaultValue={[20, 100]}
          onChange={console.log}
        />
      </div>
    );
  }
}

export default connect(state => ({
  products: state.products.list
}), {
  productAction
})(Products);
