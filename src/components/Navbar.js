import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, Redirect } from 'react-router-dom';

@inject('routing')
@observer
export default class Navbar extends Component {
  render() {
    const { routing } = this.props;
    return(
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Redirect from='/' to='/home' />
      </div>
    )
  }
}