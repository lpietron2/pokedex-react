import React, { useState } from 'react';

function PokeMoves({pokemon}){
    const [moveLength, setMoveLength] = useState(0);

    const MoveHandler = () => {
        if(pokemon.moves === undefined){
            return;  
        }else{
            setMoveLength(pokemon.moves.length);
        }
    }
    return(
        <div>
            Moves: {MoveHandler()}
        </div>
    );
}

export default PokeMoves;