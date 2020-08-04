import React from 'react';

import Table from './components/Table';
import Search from './components/Search';
import Filters from './components/Filters';
// import SortAscDsc from './components/SortAscDsc';

function App() {
  return (
    <div>
      <header>
        <Search />
        <Filters />
        {/* <SortAscDsc /> */}
      </header>
      <Table />
    </div>
  );
}

export default App;
