import React from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';

const Header = () => {
  return (
    <div>
      <NameFilter />
      <NumericFilter />
    </div>
  );
};

export default Header;
