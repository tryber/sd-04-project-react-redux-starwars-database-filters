import React from 'react';
import './App.css';
import hearderImage from './images/star-wars.png';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header>
        <img src={hearderImage} alt="star-wars" width="100%" height="400px" />

      </header>

      <Table />


    </div>
  );
}

export default App;
