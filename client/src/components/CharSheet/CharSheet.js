import React from 'react'
import './CharSheet.css';

const CharSheet = (props) => {

    let statSquish = props.chosenCharacter.powerstats;

    let totalStats = 0;

    let statCalc = () => {
        totalStats = statSquish.intelligence + statSquish.strength + statSquish.speed + statSquish.durability + statSquish.power + statSquish.combat;
    };

    statCalc();

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
            <div className="item9">{statSquish.intelligence}</div>
            <div className="item10">{statSquish.strength}</div>
            <div className="item11">{statSquish.speed}</div>
            <div className="item12">{statSquish.durability}</div>
            <div className="item13">{statSquish.power}</div>
            <div className="item14">{statSquish.combat}</div>
            <div className="item15">Total Stats: {totalStats}</div>
        </div>
    )
};

export default CharSheet
