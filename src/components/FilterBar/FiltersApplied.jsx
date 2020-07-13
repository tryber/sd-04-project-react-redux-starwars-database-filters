import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function FiltersApplied({ filters }) {
  console.log('estou no filtersApplied...', filters, filters.length);

  return (
    <div className="filters-applied">
      {filters.length > 0 ? <h4>Filters applied</h4> : null}
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

FiltersApplied.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(FiltersApplied);
