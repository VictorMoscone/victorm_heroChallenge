import React from 'react';
import './Tiles.css';

const Tiles = (props) => {

    return (
        <div>
            <img src={props.imgSrc} alt={props.team} className='Tile'/>
        </div>
    );
};

export default Tiles
