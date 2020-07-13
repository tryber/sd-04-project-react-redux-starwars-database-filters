import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NumericFilters = (props) => {
  const { numericFilters } = props;
  if (numericFilters.length === 0) return null;
  return (
    <div className="numeric-filters">
      {numericFilters.map(({ column, comparison, value }) => (
        <div key={column}>
          <span>{column}</span>
          <span>{comparison}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ numericFilters: state.filters.filterByNumericValues });

export default connect(mapStateToProps)(NumericFilters);

NumericFilters.propTypes = {
  numericFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.any,
    }),
  ).isRequired,
};
