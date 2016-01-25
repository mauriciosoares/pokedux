import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Item extends Component {
  render() {
    const { id, name } = this.props.pokemon;

    return (
      <li>
        <Link to={`/pokemon/${id}`}>{name}</Link>
      </li>
    );
  }
}
