import React from 'react';

const PlanetsRadio = ({ onClick }) => {
  return (
    <div>
      <label htmlFor="orderASC">
        <input
          type="radio"
          name="sort"
          value="ASC"
          test="column-sort-input"
          onClick={onClick}
        />
        ASC
      </label>
      <label htmlFor="orderDSC">
        <input
          type="radio"
          value="DESC"
          name="sort"
          test="column-sort-input"
          onClick={onClick}
        />
        DESC
      </label>
    </div>
  );
};

export default PlanetsRadio;
