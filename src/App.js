import React from "react";

import SearchInput from "./components/SearchInput";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <SearchInput />
      <Table />
    </div>
  );
}

export default App;
