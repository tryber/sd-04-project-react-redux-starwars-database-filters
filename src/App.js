import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';


import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">
        <Filter />
        <h2>STARS WARS PLANETS</h2>
        <Table />
      </header>
    </div>
  );
}

export default App;
