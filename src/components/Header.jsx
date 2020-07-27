import React from 'react';
import '../css/App.css';
import hearderImage from '../images/star-wars.png';
import SearchFields from './SearchFields';
import NumberFilters from './NumberFilters';
import OrderFilter from './OrderFilter';

function App() {
  return (
    <div className="App">
      <header>
        <img src={hearderImage} alt="star-wars" width="100%" height="800px" />
        <SearchFields />
        <NumberFilters />
        <OrderFilter />
      </header>
    </div>
  );
}

export default App;
