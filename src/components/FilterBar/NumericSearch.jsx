import React from 'react';

const NumericSearch = () => (
  <form>
    <select data-testid="column-filter" name="" id="">
      <option value="">{''}</option>
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
    <select data-testid="comparison-filter" name="" id="">
      <option value="">{''}</option>
      <option value="">Maior que</option>
      <option value="">Menor que</option>
      <option value="">Igual a</option>
    </select>
    <input data-testid="value-filter" type="number" />
    <button data-testid="button-filter" type="button">
      search
    </button>
  </form>
);

export default NumericSearch;
