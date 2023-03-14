import React from 'react';
import './App.css';
import ClassComponentClock from './components/clock';
import img from './materials/uk.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponentClock text="Переможемо" img={img} >
          {2}
        </ClassComponentClock>
      </header>
    </div>
  );
}

export default App;
