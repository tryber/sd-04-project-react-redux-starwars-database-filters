import React from 'react';
import './Search.css';
// deve ter conexão com a store
class Search extends React.Component {
  render() {
    return (
      <div>
        <label className="labels" htmlFor="search">
          Digite o nome:
        </label>
        <input
          className="serachBar"
          id="search"
          data-testid="name-filter"
          value="Search"
          readOnly
        />
      </div>
    );
  }
}

export default Search;
