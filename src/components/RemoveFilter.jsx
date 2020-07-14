import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilter } from '../actions/index';


function RemoveFilter({ valuesFiltered, removeFilter }) {

  const onClick = (obj) => removeFilter(obj);

  return valuesFiltered.map((filtro) => (
    <div data-testid="filter" key={filtro.column}>
    <span>{`${filtro.column} - ${filtro.comparison} - ${filtro.value} `}</span>
    <button type="button" onClick={() => onClick(filtro)}>
      X
    </button>
  </div>
  ));
}

const mapStateToProps = (state) => ({
  valuesFiltered: state.filters.filterByNumericValues,
})

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (obj) => dispatch(removeFilter(obj)),
})

RemoveFilter.propTypes = {
  valuesFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilter);
