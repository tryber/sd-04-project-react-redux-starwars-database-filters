import React from 'react';
import { connect } from 'react-redux';

function FiltersApplied({ filters }) {
  console.log('estou no filtersApplied...', filters, filters.length);

  return (
    <div>
      {filters.length > 0 ? <h3>Filters applied</h3> : null}
      {filters.map((filter) => (
        <div key={filter.column}>
          <p>Column: {filter.column}</p>
          <p>Comparison: {filter.comparison}</p>
          <p>Value: {filter.value}</p>
          <button>remove filter</button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(FiltersApplied);
