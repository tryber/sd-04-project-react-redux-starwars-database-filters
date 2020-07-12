import React from 'react';
import './App.css';

import Table from './components/Table';
import FilterName from './components/FilterName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>StarWars Datatable with Filters</h1>
      </header>
      <FilterName />
      <Table />
    </div>
  );
}

export default App;
