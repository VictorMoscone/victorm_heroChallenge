import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Tiles from './components/Tiles/Tiles';
import xmenImg from './images/xmen.png';
import avengersImg from './images/avengers.png';
import justiceleagueImg from './images/justiceleague.png';
import suicidesquadImg from './images/suicidesquad.png';
import teentitansImg from './images/teentitans.png';
import guardiansImg from './images/guardians.png';

function App() {

  const [loadState, setLoadState] = useState(true);
  const [characterData, setCharacterData] = useState([]);
  const [xMenList, setXmenList] = useState([]);
  const [avengersList, setAvengersList] = useState([]);
  const [justiceLeagueList, setJusticeLeagueList] = useState([]);
  const [sSquadList, setSSquadList] = useState([]);
  const [teenTitansList, setTeenTitansList] = useState([]);
  const [guardiansList, setGuardiansList] = useState([]);

  const generateRosters = (data) => {
    sortTeam(data, 'X-Men');
    sortTeam(data, 'Avengers');
    sortTeam(data, 'Justice League');
    sortTeam(data, 'Suicide Squad');
    sortTeam(data, 'Teen Titans');
    sortTeam(data, 'Guardians of the Galaxy');
  };

  const sortTeam = (data, team) => {
    const teamArray = [];

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
      case 'Teen Titans':
        setTeenTitansList(teamArray);
        break;
      case 'Guardians of the Galaxy':
        setGuardiansList(teamArray);
        break;
      default:
        break;
    };
  };

  useEffect(() => {
    if (characterData.length === 0) {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://akabab.github.io/superhero-api/api/all.json`,
          );
          setCharacterData(data);
          generateRosters(data);
          setLoadState(false);
        } catch (err) {
          console.log(err);
        };
      })();
    };
  }, [characterData]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loadState) {
    return <div className="App">Loading...</div>;
  };

  return (
    <div className="App">
      <Tiles team='X-Men' rosterData={xMenList} imgSrc={xmenImg}/>
      <Tiles team='Avengers' rosterData={avengersList} imgSrc={avengersImg}/>
      <Tiles team='Justice League' rosterData={justiceLeagueList} imgSrc={justiceleagueImg}/>
      <Tiles team='Suicide Squad' rosterData={sSquadList} imgSrc={suicidesquadImg}/>
      <Tiles team='Teen Titans' rosterData={teenTitansList} imgSrc={teentitansImg}/>
      <Tiles team='Guardians of the Galaxy' rosterData={guardiansList} imgSrc={guardiansImg}/>
    </div>
  );
};

export default App;
