import React from 'react';
import Table from './components/Table';
import SearchPlanet from './components/SearchPlanet';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchPlanet />
      <Table />
    </div>
  );
}

export default App;
