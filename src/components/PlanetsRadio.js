import React from 'react';
import PropTypes from 'prop-types';

const PlanetsRadio = ({ onClick }) => (
  <div>
    <label htmlFor="orderASC">
      <input
        type="radio"
        name="sort"
        value="ASC"
        data-testid="column-sort-input"
        onClick={onClick}
      />
      ASC
    </label>
    <label htmlFor="orderDSC">
      <input
        type="radio"
        value="DESC"
        name="sort"
        data-testid="column-sort-input"
        onClick={onClick}
      />
      DESC
    </label>
  </div>
);

PlanetsRadio.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlanetsRadio;
