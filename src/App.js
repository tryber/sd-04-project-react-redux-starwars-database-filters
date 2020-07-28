import React from 'react';
import './css/App.css';
import Table from './components/Table';
import Header from './components/Header';
import HeaderTable from './components/HeaderTable';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderTable />
      <Table />
    </div>
  );
}

export default App;
