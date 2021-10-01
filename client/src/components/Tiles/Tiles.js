import React from 'react';
import './Tiles.css';

const Tiles = (props) => {
    if (props.chosenTeam === 'Not Selected') {
        return <div><img src={props.imgSrc} alt={props.team} className='Tile' onClick={() => props.setChosenTeam(props.rosterData)}/></div>
    };

    return (
        <div></div>
    );
};

export default Tiles
