import React, { useState } from 'react';
import './ResultStyle.css';

function ResultControler({pokemon}){
    if((pokemon.sprites === undefined) || (pokemon.types[0] === undefined)){
        return(
            <div></div>
        );
    }
    return(
        <div className="result">
            <div className="poke-id">ID: {pokemon.id}</div>
            <div className="poke-name">{pokemon.name}</div>
            <img className="poke-img" src={pokemon.sprites.front_default} alt='' />
            Type:
            <div className="poke-type">{pokemon.types[0].type.name}</div>
            {pokemon.types[1] ? (
                <div className="poke-type">{pokemon.types[1].type.name}</div>
            ) : (null)
            }        
            </div>
    );
}
export default ResultControler;