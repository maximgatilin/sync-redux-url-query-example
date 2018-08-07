import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div style={{fontSize: 20, lineHeight: 1.8}}>
        Hi, stranger!
        <br/>
        This tiny app was created to show you how a Redux store can be connected with URL queries.
        <br/>
        You can go to the  <Link to={"/products"}>products</Link> or <Link to={"/products"}>users</Link> page and change some filters.
        <br/>
        The filters will be saved in the URL and when this URL is loaded filters will be persisted.
        <br/>
        <br/>
        The source code is available on <a href="https://github.com/maximgatilin/sync-redux-url-query-example" target="_blank">Github</a>
      </div>
    );
  }
}
