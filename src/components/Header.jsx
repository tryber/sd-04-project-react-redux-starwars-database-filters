import React from 'react';
import '../css/App.css';
import hearderImage from '../images/star-wars.png';
import SearchFields from './SearchFields';
import NumberFilters from './NumberFilters';

function App() {
  return (
    <div className="App">
      <header>
        <img src={hearderImage} alt="star-wars" width="100%" height="800px" />
        <SearchFields />
        <NumberFilters />
      </header>
    </div>
  );
}

export default App;
