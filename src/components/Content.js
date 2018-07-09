import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('routing')
@observer
export default class Content extends Component {
  render() {
    return(
      <div style={{ textAlign: 'center' }}>
        <h2>Current nav: { this.props.routing.location.pathname } </h2> 
      </div>
    )
  }
}
