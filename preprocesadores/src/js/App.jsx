import React, { useState, useEffect, Component } from 'react';
import { Loading } from './components/Loading.jsx';
import { Pokemon } from './components/Pokemon.jsx';

class App extends Component {
  state = {
    urlData: 'https://pokeapi.co/api/v2/pokemon',
    pokemon: [],
    loading: true,
    next: '',
    previous: '',
  };

  fetchData = async () => {
    this.setState({ loading: true });
    const pokemons = await fetch(this.state.urlData).then((data) =>
      data.json()
    );
    const pokes = { ...pokemons };

    this.setState({
      next: await pokes.next,
      previous: await pokes.previous,
    });

    const { results } = await pokes;

    let finalPokes = [];

    await results.forEach(async (pokeApi) => {
      await fetch(pokeApi.url)
        .then((data) => data.json())
        .then((result) => finalPokes.push(result));
    });

    this.setState({ pokemon: finalPokes, loading: false });
  };

  async componentDidMount() {
    await this.fetchData();
  }

  render() {
    console.log(this.state);

    if (this.state.loading) {
      return <Loading />;
    }

    console.log('poke', this.pokemon);

    return (
      <div>
        {this.state.pokemon.map((poke, index) => (
          <Pokemon {...poke} key={index} />
        ))}
      </div>
    );
  }
}

export default App;
