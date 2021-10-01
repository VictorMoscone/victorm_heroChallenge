import React, { useEffect, useState } from 'react'
import './Roster.css';

const Roster = (props) => {

    const [teamMap, setTeamMap] = useState();

    // On component load, we map each provided character on the team with a button.
    useEffect(() => {
        if (props.chosenTeam !== 'Not Selected') {
            setTeamMap(props.chosenTeam.map( 
                (character) =>
                  {
                    return <button className="charButton" type="button" key={character.id} onClick={() => props.setChosenCharacter(character)}>{character.name}</button>;
                  }
                )); 
        };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.chosenTeam]);

    return (
        <div className='Roster'>
            {teamMap}
        </div>
    );
}

export default Roster
