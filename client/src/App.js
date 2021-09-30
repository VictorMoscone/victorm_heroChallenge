import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [loadState, setLoadState] = useState ('False');
  // const [characterData, setCharacterData] = useState([]);
  const [xMenList, setXmenList] = useState([]);

  const generateRosters = (data) => {
    sortTeam(data, 'X-Men');
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
        setXmenList(teamArray)
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
          // setCharacterData(data);
          generateRosters(data);
          setLoadState('True');
        } catch (err) {
          console.log(err);
        };
      })();
    };
  });

  return (
    <div className="App">
    </div>
  );
};

export default App;
