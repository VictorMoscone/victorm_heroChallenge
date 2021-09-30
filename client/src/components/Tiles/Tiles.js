import React from 'react';
import './Tiles.css';

const Tiles = (props) => {

    return (
        <div>
            <img src={props.imgSrc} alt={props.team} className='Tile' onClick={() => console.log(`You've chosen ${props.team}!`)}/>
        </div>
    );
};

export default Tiles
