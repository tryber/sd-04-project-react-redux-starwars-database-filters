import React from 'react';

import Table from './components/Table';
import Search from './components/Search';
import Filters from './components/Filters';

function App() {
  return (
    <div>
      <header>
        <Search />
        <Filters />
      </header>
      <Table />
    </div>
  );
}

export default App;
