import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StarterSelector from "./StarterSelector";
import StarterShower from "./StarterShower";

const starterList = ['Bulbasaur', 'Charmander', 'Squirtle']
const imgList = ['bulbasaur.png', 'charmander.png', 'squirtle.png']

function App() {


    const [starter, setStarter] = useState('Bulbasaur')

  return (
    <div className="App">
      <header className="App-header">
        <StarterSelector list={starterList} starter={starter} setStarter={setStarter}/>
        <StarterShower imgList={imgList} starter={starter} starterList={starterList}/>
      </header>
    </div>
  );
}

export default App;
