import React, {useState} from 'react';

const RollDice = ({roll}) => {
    const [num, setNum] = useState(6)

    const rollDice = () => {
        const rnd = Math.ceil(Math.random()*6)
        setNum(rnd)
        roll(rnd)
    }

    return (
        <div className="roll">
            <h1>{num}</h1>
            <button onClick={rollDice}>ROLL</button>
        </div>
    );
};

export default RollDice;