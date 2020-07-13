import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetFilter } from '../../actions';

const NumericFilters = (props) => {
  const { numericFilters } = props;
  if (numericFilters.length === 0) return null;
  return (
    <div className="numeric-filters">
      {numericFilters.map(({ column, comparison, value }) => (
        <div data-testid="filter" key={column}>
          <span>{column}</span>
          <span>{comparison}</span>
          <span>{value}</span>
          <button
            name={column}
            type="button"
            onClick={(e) => {
              const newFilters = numericFilters.filter(
                (numericFilter) => numericFilter.column !== e.target.name,
              );
              return props.resetFilter(newFilters);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ numericFilters: state.filters.filterByNumericValues });

export default connect(mapStateToProps, { resetFilter })(NumericFilters);

NumericFilters.propTypes = {
  numericFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.any,
    }),
  ).isRequired,
  resetFilter: PropTypes.func.isRequired,
};
