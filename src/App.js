import React from 'react';
import './App.css';

import Table from './components/Table';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Table />
      </header>
    </div>
  );
}

export default App;
