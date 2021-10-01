import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Tiles from './components/Tiles/Tiles';
import Roster from './components/Roster/Roster';
import xmenImg from './images/xmen.png';
import avengersImg from './images/avengers.png';
import justiceleagueImg from './images/justiceleague.png';
import suicidesquadImg from './images/suicidesquad.png';
import teentitansImg from './images/teentitans.png';
import guardiansImg from './images/guardians.png';
import CharSheet from './components/CharSheet/CharSheet';

function App() {

  const [loadState, setLoadState] = useState(true);
  const [characterData, setCharacterData] = useState([]);
  const [xMenList, setXmenList] = useState([]);
  const [avengersList, setAvengersList] = useState([]);
  const [justiceLeagueList, setJusticeLeagueList] = useState([]);
  const [sSquadList, setSSquadList] = useState([]);
  const [teenTitansList, setTeenTitansList] = useState([]);
  const [guardiansList, setGuardiansList] = useState([]);
  const [chosenTeam, setChosenTeam] = useState('Not Selected');
  const [chosenCharacter, setChosenCharacter] = useState ('Not Selected');

  // Will save states for each team.
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

    // For each API entry, we check their affiliations...
    data.forEach(character => {
      if (character.connections.groupAffiliation.includes(team)) {
        // If the affiliation has the team name we're looking for, it's added to an array.
        teamArray.push(character);
      };
    });

    // Depending on which team we want, we set it as a state.
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
    // on component load, if we haven't gotten the data before, we will now!
    if (characterData.length === 0) {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://akabab.github.io/superhero-api/api/all.json`,
          );
          // This will generate the rosters, and let our load state know that it's done loading.
          setCharacterData(data);
          generateRosters(data);
          setLoadState(false);
        } catch (err) {
          console.log(err);
        };
      })();
    };
  }, [characterData]); // eslint-disable-line react-hooks/exhaustive-deps

  // If the app is still loading, it will display a loading message.
  if (loadState) {
    return <div className="App">Loading...</div>;
  };

  // Depending on the Team or Character states; the app will render three different sets of components.
  if (chosenTeam === 'Not Selected') {
    return <div className="AppGrid">
      <Tiles team='X-Men' rosterData={xMenList} imgSrc={xmenImg} chosenTeam={chosenTeam} setChosenTeam={setChosenTeam}/>
      <Tiles team='Avengers' rosterData={avengersList} imgSrc={avengersImg} chosenTeam={chosenTeam} setChosenTeam={setChosenTeam}/>
      <Tiles team='Justice League' rosterData={justiceLeagueList} imgSrc={justiceleagueImg} chosenTeam={chosenTeam} setChosenTeam={setChosenTeam}/>
      <Tiles team='Suicide Squad' rosterData={sSquadList} imgSrc={suicidesquadImg} chosenTeam={chosenTeam} setChosenTeam={setChosenTeam}/>
      <Tiles team='Teen Titans' rosterData={teenTitansList} imgSrc={teentitansImg} chosenTeam={chosenTeam} setChosenTeam={setChosenTeam}/>
      <Tiles team='Guardians of the Galaxy' rosterData={guardiansList} imgSrc={guardiansImg} chosenTeam={chosenTeam} setChosenTeam={setChosenTeam}/>
      <Roster chosenTeam={chosenTeam} />
    </div>;
  } else if (chosenTeam !== 'Not Selected' && chosenCharacter === 'Not Selected') {
    return <div className="App">
      <button id="backButton" type="button" onClick={() => setChosenTeam('Not Selected')}>Go Back</button>
      <Roster chosenTeam={chosenTeam} setChosenCharacter={setChosenCharacter}/>
    </div>
  } else if (chosenCharacter !== 'Not Selected') {
    return <div className="App">
      <button id="backButton" type="button" onClick={() => setChosenCharacter('Not Selected')}>Go Back</button>
      <CharSheet chosenCharacter={chosenCharacter}/>
    </div>
  };
};

export default App;
