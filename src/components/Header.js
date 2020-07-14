import React from 'react';
import '../styles/App.css';
import FilterNav from './FilterNav';

const Header = () => (
  <div className="container">
    <header>
      <h1>StarWars Datatable with Filters</h1>
    </header>
    <FilterNav />
  </div>
);

export default Header;
