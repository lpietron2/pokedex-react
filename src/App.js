import './App.css';
import logo from './International_Pokémon_logo.png';
import ResultControler from './ResultControler';
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
      <img className="logo" src={logo} alt='Pokedex' />
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
      <ResultControler pokemon={pokemon}/>
    </div>
  );
}

export default App;
