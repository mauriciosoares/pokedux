import React, { Component } from 'react';

import Item from './item';

export default class List extends Component {
  render() {
    const { pokemons } = this.props;
    const pokemonsLength = Object.keys(pokemons).length;

    return ((!pokemonsLength) ? this.renderEmpty() : this.renderPokemons());
  }

  renderEmpty() {
    return (
      <div>Fetching pokemons...</div>
    );
  }

  renderPokemons() {
    const { pokemons } = this.props;

    return (
      <ul>{Object.keys(pokemons).map(this.renderPokemon.bind(this))}</ul>
    );
  }

  renderPokemon(pokemon) {
    const { pokemons } = this.props;

    return (
      <Item key={pokemon} pokemon={pokemons[pokemon]} />
    )
  }
}
