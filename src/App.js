import './App.css';
import React, { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [query, setQuery] = useState('');

  const search = (evt) => {
    if(evt.key === "Enter"){
      fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(res => res.json())
        .then((result) => {
          setPokemon(result);
          setQuery('');
          console.log(result);
        })
    }
  }

  return (
    <div className="App">
      <h1 className="title">Pokedex</h1>
      <div className="search-box">
        <input
          className="search-bar"
          type="text"
          placeholder="Find a pokemon..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      <div className="result">
        <div className="poke-id">ID: {pokemon.id}</div>
        <div className="poke-name">{pokemon.name}</div>
        <img className="poke-img" src={pokemon.sprites.front_default} alt='' />
        <div className="poke-type">{pokemon.types[0].type.name}</div>
        <br/>
        <div className="poke-move">
          Moves: 
          <ul>
            {/* <li>{pokemon.move[0].move.name}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
