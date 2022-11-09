import React from 'react';
import SingleCell from "./SingleCell";
import RollDice from "./RollDice";

const Board = ({arr, players, roll}) => {
    return (
        <div className="gameBoard d-flex flex-wrap">
            {arr.map((x,i) => <SingleCell players={players} cell={x} key={i}/>)}
            <RollDice roll={roll} />
        </div>
    );
};

export default Board;