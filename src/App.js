import React from 'react';
import './App.css';
import hearderImage from './images/star-wars.png';
import Table from './components/Table';
import SearchFields from './components/SearchFields';

function App() {
  return (
    <div className="App">
      <header>
        <img src={hearderImage} alt="star-wars" width="100%" height="400px" />
        <SearchFields />
      </header>
      <Table />
    </div>
  );
}

export default App;
