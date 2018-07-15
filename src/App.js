import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import store from './redux';
import {syncHistoryWithStore} from 'react-router-redux';
import './App.css';
import Products from './pages/Products';
import People from './pages/People';
import Main from './pages/Main';

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Main}>
            <Route path="/products" component={Products}/>
            <Route path="/people" component={People}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
