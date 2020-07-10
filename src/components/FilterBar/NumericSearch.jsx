import React from 'react';

const NumericSearch = () => {
  return (
    <div>
      <input type="number" data-testid="" />
      <select data-testid="column-filter" name="" id="">
        <option value=""></option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </div>
  );
};

export default NumericSearch;
