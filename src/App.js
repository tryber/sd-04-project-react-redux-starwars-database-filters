import React from 'react';
import Header from './components/Header';
import FiltersPanel from './components/FiltersPanel';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <FiltersPanel />
        <Table />
      </header>
    </div>
  );
}

export default App;
