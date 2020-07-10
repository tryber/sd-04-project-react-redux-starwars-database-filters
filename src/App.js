import React from 'react';
import './App.css';
import Table from './components/TableScreen/Table';
import FilterBar from './components/FilterBar/FilterBar';

function App() {
  return (
    <div className="App">
      <FilterBar />
      <Table />
    </div>
  );
}

export default App;
