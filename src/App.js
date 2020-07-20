import React from 'react';
import './App.css';

import Table from './components/Table';
import Search from './components/Search';
import ShowFilter from './components/ShowFilter';

function App() {
  return (
    <div>
      <Search />
      <ShowFilter />
      <hr />
      <Table />
    </div>
  );
}

export default App;
