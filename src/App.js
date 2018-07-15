import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import store from './redux';
import {syncHistoryWithStore} from 'react-router-redux';
import './App.css';
import Products from './pages/Products';

// const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Products />
        </div>
      </Provider>
    );
  }
}

export default App;
