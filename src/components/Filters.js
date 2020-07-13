import React from 'react';
import { Component } from 'react';

const renderFirstFilter = () => (
  <div>
    <select data-testid="column-filter">
      <option value="">Coluna</option>
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
  </div>
);

const renderSecondFilter = () => (
  <div>
    <select data-testid="comparison-filter">
      <option value="">Comparação</option>
      <option value="maior que">maior que</option>
      <option value="igual a">igual a</option>
      <option value="menor que">menor que</option>
    </select>
    <input type="number" data-testid="value-filter" />
    <button type="button" data-testid="button-filter">
      Filtrar
    </button>
  </div>
);

class Filters extends Component {
  render() {
    return (
      <div>
        {renderFirstFilter()}
        {renderSecondFilter()}
      </div>
    );
  }
}

export default Filters;
