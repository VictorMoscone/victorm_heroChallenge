import React from 'react';
import './Tiles.css';

// The tiles will only appear if a team hasn't been chosen.
const Tiles = (props) => {
    if (props.chosenTeam === 'Not Selected') {
        return <div><img src={props.imgSrc} alt={props.team} className='Tile' onClick={() => props.setChosenTeam(props.rosterData)}/></div>
    };

    return (
        <div></div>
    );
};

export default Tiles
