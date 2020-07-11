import React, { Component } from 'react';
import TextFilter from './searchBarComponents/TextFilter';
import NumericFilter from './searchBarComponents/NumericFilter';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <TextFilter />
        <NumericFilter />
      </div>
    );
  }
}

export default SearchBar;
