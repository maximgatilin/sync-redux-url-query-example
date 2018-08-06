import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import store from './redux';
import {syncHistoryWithStore} from 'react-router-redux';
import './App.css';
import Products from './pages/Products';
import Users from './pages/Users';
import Main from './pages/Main';
import Home from './pages/Home';

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/products" component={Products}/>
            <Route path="/users" component={Users}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
