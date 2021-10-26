import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu"
import FPA from './components/ModExp';
import Inv from './components/Inv';
import GCD from './components/GCD';
import {useState} from 'react'
let calcs=["ModExp", "Inv", "GCD"];
function App() {
  const [calcs, setcalcs] = useState(new Array(0));
  const addCalc=(c) => {
    setcalcs([...calcs, c])
  }
  return (
    <div>
      <Menu calculators={calcs} add={addCalc}/>
      {calcs.map(v => v)}
    </div>
  );
}

export default App;
