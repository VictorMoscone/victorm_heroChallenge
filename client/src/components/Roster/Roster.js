import React, { useEffect, useState } from 'react'
import './Roster.css';

const Roster = (props) => {

    const [teamMap, setTeamMap] = useState();

    useEffect(() => {
        if (props.chosenTeam !== 'Not Selected') {
            setTeamMap(props.chosenTeam.map( 
                (character) =>
                  {
                    return <p key={character.id}>{character.name}</p>;
                  }
                )); 
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.chosenTeam]);

    return (
        <div className='Roster'>
            {teamMap}
        </div>
    );
}

export default Roster
