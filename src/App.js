import React from 'react';
import './App.css';
import { PlanetsTable, Header } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <PlanetsTable />
    </div>
  );
}

export default App;
