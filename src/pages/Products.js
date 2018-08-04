import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Range } from 'rc-slider';
import filteredProducts from '../redux/selectors/filteredProducts';

import {changeProductPriceFilter} from '../redux/actions';

class Products extends Component {
  render() {
    const {minPrice, maxPrice, changeProductPriceFilter, minPriceFilter, maxPriceFilter} = this.props;
    
    return (
      <div>
        <h2>Products</h2>
        <h4>Filter by price: </h4>
        <div style={{display: 'flex'}}>
          <div style={{flex: '0 0 auto', padding: '0 10px'}}>{minPriceFilter}$</div>
          <Range
            min={minPrice}
            max={maxPrice}
            defaultValue={[minPriceFilter, maxPriceFilter]}
            onChange={changeProductPriceFilter}
          />
          <div style={{flex: '0 0 auto', padding: '0 10px'}}>{maxPriceFilter}$</div>
        </div>

        <ul>
          {this.props.products.map(product => <li key={product.id}>
            <span>{product.name} ({product.price} $)</span>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  products: filteredProducts(state),
  minPrice: state.products.minPrice,
  maxPrice: state.products.maxPrice,
  minPriceFilter: state.products.minPriceFilter,
  maxPriceFilter: state.products.maxPriceFilter,
}), {
  changeProductPriceFilter
})(Products);
