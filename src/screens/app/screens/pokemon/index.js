import React, { Component } from 'react';

import { POKEMON_IMG_PATH } from 'shared/utils/constants';

export default class Pokemon extends Component {
  render() {
    const { id } = this.props.params;
    return (
      <div>
        <img src={POKEMON_IMG_PATH + id + '.png'} />
      </div>
    );
  }
}
