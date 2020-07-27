import React from 'react';
import './App.css';
import Table from './components/table/Table';
import GetPlanets from './components/GetPlanets';
import FilterByName from './components/filters/FilterByName';
import FilterByNumericValues from './components/filters/FilterByNumericValues';

function App() {
  return (
    <div className="App">
      <FilterByName />
      <FilterByNumericValues />
      <Table />
      <GetPlanets />
    </div>
  );
}

export default App;
