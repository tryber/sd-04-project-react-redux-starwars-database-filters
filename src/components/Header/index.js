import React from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import OrderFilter from './OrderFilter';

const Header = () => (
  <div>
    <NameFilter />
    <NumericFilter />
    <OrderFilter />
  </div>
);
export default Header;
