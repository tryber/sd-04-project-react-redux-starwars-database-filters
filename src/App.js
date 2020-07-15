import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import FilterNumerico from './components/FilterNumerico';


import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">
        <FilterNumerico />
        <Filter />
        <h2>STARS WARS PLANETS</h2>
        <Table />
      </header>
    </div>
  );
}

export default App;
