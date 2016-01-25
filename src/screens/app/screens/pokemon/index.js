import React, { Component } from 'react';

export default class Pokemon extends Component {
  render() {
    console.log(this.props.params.id);
    return (
      <div>Pokemon rendering :D</div>
    );
  }
}
