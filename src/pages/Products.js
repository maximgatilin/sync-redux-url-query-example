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
        <h1 style={{marginBottom: 20}}>Products</h1>
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
          }}>Filter by price</h4>
          <div style={{display: 'flex', flex: '1 1 auto', alignItems: 'center'}}>
            <div style={{flex: '0 0 auto', padding: '0 15px'}}>{minPriceFilter}$</div>
            <Range
              min={minPrice}
              max={maxPrice}
              defaultValue={[minPriceFilter, maxPriceFilter]}
              onChange={changeProductPriceFilter}
            />
            <div style={{flex: '0 0 auto', padding: '0 15px'}}>{maxPriceFilter}$</div>
          </div>
        </div>

        <table className="table table-striped table-sm">
          <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price($)</th>
          </tr>
          </thead>
          <tbody>
          {this.props.products.map(product => <tr key={product.id}>
            <th scope="row">{product.name}</th>
            <td>{product.price}</td>
          </tr>)}
          </tbody>
        </table>
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
