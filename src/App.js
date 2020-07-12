import React from "react";

import SearchInput from "./components/SearchInput";
import Table from "./components/Table";
import Filters from './components/Filters'

function App() {
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <SearchInput />
      <Filters />
      <Table />
    </div>
  );
}

export default App;
