import React from 'react'
import './CharSheet.css';

const CharSheet = (props) => {
    return (
        <div className="grid-container">
            <div className="item1">{props.chosenCharacter.name}</div>
            <img className="item2" src={props.chosenCharacter.images.sm} alt="Test"></img>
            <div className="item3">Intelligence:</div>
            <div className="item4">Strength:</div>
            <div className="item5">Speed:</div>
            <div className="item6">Durability:</div>
            <div className="item7">Power:</div>
            <div className="item8">Combat:</div>
            <div className="item9">{props.chosenCharacter.powerstats.intelligence}</div>
            <div className="item10">{props.chosenCharacter.powerstats.strength}</div>
            <div className="item11">{props.chosenCharacter.powerstats.speed}</div>
            <div className="item12">{props.chosenCharacter.powerstats.durability}</div>
            <div className="item13">{props.chosenCharacter.powerstats.power}</div>
            <div className="item14">{props.chosenCharacter.powerstats.combat}</div>
        </div>
    )
};

export default CharSheet
