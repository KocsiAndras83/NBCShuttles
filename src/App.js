import './App.css';
import Time from "./Components/Time"
import Shuttle from './Components/Shuttle';


function App() {
  return (
    <div className="App">
      <h1>NBC Shuttle Times</h1>
      <Time />
      <Shuttle />
    </div>
  );
}

export default App;
