import './App.css';
import logo from './International_Pokémon_logo.png';
import ResultControler from './ResultControler';
import React, { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [query, setQuery] = useState('');
  const [isShiny, setIsShiny] = useState(false);


  const search = (evt) => {
    if(evt.key === "Enter"){
      fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(res => res.json())
        .then((result) => {
          setPokemon(result);
          setQuery('');
          //setIsShiny(false);
          console.log(result);
        })
     }
  }

  const dateBuider = (d) =>{
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    let hour = d.getHours();
    let minutes = d.getMinutes();

    if(hour < 10){
      hour = "0"+ hour;
    }
    if(minutes < 10){
      minutes = "0"+ minutes;
    }
    

    return hour + ":" + minutes + " " + day + "." + month + "." + year;
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
      <ResultControler pokemon={pokemon} isShiny={isShiny} setIsShiny={setIsShiny}/>

      <div className="date-box">{dateBuider(new Date())}</div>
    </div>
  );
}

export default App;
