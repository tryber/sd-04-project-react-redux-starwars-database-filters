import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilter } from '../actions';

function RemoveFilter({ numericValues, remove }) {
  const onClick = (type) => remove(type);

  return numericValues.map((type) => (
    <div data-testid="filter" key={type.column}>
      <span>{`${type.column} - ${type.comparison} - ${type.value} `}</span>
      <button type="button" onClick={() => onClick(type)}>
        X
      </button>
    </div>
  ));
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (removeSelect) => dispatch(removeFilter(removeSelect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilter);

RemoveFilter.propTypes = {
  numericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  remove: PropTypes.func.isRequired,
};
