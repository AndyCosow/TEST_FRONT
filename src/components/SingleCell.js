import React from 'react';

const SingleCell = ({cell,players}) => {

    const createPlayer = () => {
        let result = []

        players.map((x, i) => {
            if(x.position === cell) {
                result.push(<div className="player" style={{backgroundColor: x.color}} key={i}></div>)
            }
        })
        return result
    }

    return (
        <div className={cell ? "cell d-flex flex-wrap" : "cellEmpty"}>
            {createPlayer().map(x => x)}
        </div>
    );
};

export default SingleCell;