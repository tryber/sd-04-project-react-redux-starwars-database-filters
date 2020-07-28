import React from 'react';
import './App.css';
import Table from './components/table/Table';
import GetPlanets from './components/GetPlanets';
import FilterByName from './components/filters/FilterByName';
import FilterByNumericValues from './components/filters/FilterByNumericValues';
import NumericFilter from './components/filters/NumericFilter';

function App() {
  return (
    <div className="App">
      <FilterByName />
      <FilterByNumericValues />
      <NumericFilter />
      <Table />
      <GetPlanets />
    </div>
  );
}

export default App;
