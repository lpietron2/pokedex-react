import React, { useState } from 'react';

function PokeMoves({pokemon, id}){

    return(
        <li>
            {pokemon.moves[id].move.name}
        </li>
    );
}

export default PokeMoves;