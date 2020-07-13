import React from 'react';

import './App.css';
import Table from './components/Table/Table';
import GetSWAPI from './components/GetSWAPI';
import FilterByName from './components/FilterByName/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues/FilterByNumericValues';

function App() {
  return (
    <div className="App">
      <FilterByName />
      <FilterByNumericValues />
      <Table />
      <GetSWAPI />
    </div>
  );
}

export default App;
