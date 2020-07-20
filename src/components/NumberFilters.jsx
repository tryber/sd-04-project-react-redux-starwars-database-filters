import React from 'react';
import { connect } from 'react-redux';

const NumberFilters = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log(e.target);
    }}
  >
    <select data-testid="column-filter">
      <option value="population">Population</option>
      <option value="orbital_period">Orbital period</option>
      <option value="diameter">Diameter</option>
      <option value="rotation_period">Rotation period</option>
      <option value="surface_water">Surface water</option>
    </select>
    <select data-testid="comparison-filter">
      <option value=">">More than</option>
      <option value="<">Less than</option>
      <option value="=">Equal to</option>
    </select>
    <input data-testid="value-filter" type="number" />
    <button data-testid="button-filter" type="submit">Apply filters</button>
  </form>
);

export default connect()(NumberFilters);
