import React, { Component } from 'react';
import { Link } from 'react-router';

import { POKEMON_IMG_PATH } from 'shared/utils/constants';

export default class Item extends Component {
  render() {
    const { id, name } = this.props.pokemon;
    // <img src={POKEMON_IMG_PATH + id + '.png'} />
    return (
      <li>
        <Link to={`/pokemon/${id}`}>{name}</Link>
      </li>
    );
  }
}
