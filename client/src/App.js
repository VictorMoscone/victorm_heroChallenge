import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [loadState, setLoadState] = useState ('False');
  const [characterData, setCharacterData] = useState([]);
  const [xMenList, setXmenList] = useState([]);
  const [avengersList, setAvengersList] = useState([]);
  const [justiceLeagueList, setJusticeLeagueList] = useState([]);
  const [ssquadList, setSSquadList] = useState([]);
  const [fantasticFourList, setFantasticFourList] = useState([]);
  const [guardiansList, setGuardiansList] = useState([]);

  const generateRosters = (data) => {
    sortTeam(data, 'X-Men');
    sortTeam(data, 'Avengers');
    sortTeam(data, 'Justice League');
    sortTeam(data, 'Suicide Squad');
    sortTeam(data, 'Fantastic Four');
    sortTeam(data, 'Guardians of the Galaxy');
  };

  const sortTeam = (data, team) => {
    let teamArray = [];
    data.forEach(character => {
      if (character.connections.groupAffiliation.includes(team)) {
        teamArray.push(character);
      };
    });
    switch (team) {
      case 'X-Men':
        setXmenList(teamArray);
        break;
      case 'Avengers':
        setAvengersList(teamArray);
        break;
      case 'Justice League':
        setJusticeLeagueList(teamArray);
        break;
      case 'Suicide Squad':
        setSSquadList(teamArray);
        break;
      case 'Fantastic Four':
        setFantasticFourList(teamArray);
        break;
      case 'Guardians of the Galaxy':
        setGuardiansList(teamArray);
        break;
      default:
        break;
    };
  };

  useEffect(() => {
    if (loadState === 'False') {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://akabab.github.io/superhero-api/api/all.json`,
          );
          setCharacterData(data);
          generateRosters(data);
          setLoadState('True');
        } catch (err) {
          console.log(err);
        };
      })();
    };
    console.log(characterData)
  });

  return (
    <div className="App">
    </div>
  );
};

export default App;
