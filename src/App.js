import React from 'react';

import './App.css';
import Table from './components/Table/Table';
import GetSWAPI from './components/GetSWAPI';
import FilterByName from './components/FilterByName/FilterByName';

function App() {
  return (
    <div className="App">
        <FilterByName />
        <Table />
        <GetSWAPI />
    </div>
  );
}

export default App;