import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Content />
      </Fragment>
    );
  }
}

export default hot(module)(App);
