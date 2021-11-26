import React, { useState } from 'react';
import PokeMoves from './PokeMoves';
import './ResultStyle.css';


function ResultControler({pokemon, isShiny, setIsShiny}){
    
    const toggleShiny = () => {
        (!isShiny) ? setIsShiny(true) : setIsShiny(false);
    }
    

    if((pokemon.sprites === undefined) || (pokemon.types[0] === undefined)){
        return(
            <div></div>
        );
    }
    return(
        <div>
            <div className="result">
                <div className="info">
                    <div className="poke-id">ID: {pokemon.id}</div>
                    <div className="poke-name">{pokemon.name}</div>
                    <br/>
                    Type:
                    <div className="poke-type">{pokemon.types[0].type.name}</div>
                    {pokemon.types[1] ? (
                        <div className="poke-type">{pokemon.types[1].type.name}</div>
                    ) : (null)
                    }
                </div>
                <div className="img-box">
                    {!isShiny ? 
                        (<img className="poke-img" src={pokemon.sprites.front_default} alt='' />)
                        : (<img className="poke-img" src={pokemon.sprites.front_shiny} alt='' />)
                    }
                    <label htmlFor="shinyCheck">Shiny
                        <input
                        id="shinyCheck"
                        type="checkbox"
                        onChange={toggleShiny}
                        />
                    </label>
                </div>
            </div>
            <div className="poke-moves">
                <PokeMoves pokemon={pokemon} />
            </div>
        </div>
    );
}
export default ResultControler;