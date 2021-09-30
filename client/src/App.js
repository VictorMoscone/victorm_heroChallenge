import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [characterData, setCharacterData] = useState('')

  useEffect(() => {
    if (characterData === '') {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://akabab.github.io/superhero-api/api/all.json`,
          );
          setCharacterData(data);
        } catch (err) {
          console.log(err);
        };
      })();
    };
    console.log(characterData);
  });

  return (
    <div className="App">
    </div>
  );
};

export default App;
