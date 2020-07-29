import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilter } from '../action/actionFilter';

const RemoveFilter = ({ Filters, removeFilter }) => {
  const onClick = (obj) => removeFilter(obj);
  
  return Filters.map((filtro) => (
    <div data-testid="filter" key={filtro.column}>
      <span>{`${filtro.column} - ${filtro.comparison} - ${filtro.value}`}</span>
      <button type="button" onClick={() => onClick(filtro)}>
          x
      </button>
    </div>
  ));
};

const mapStateToProps = (state) => ({
  Filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (obj) => dispatch(removeFilter(obj)),
});

removeFilter.PropTypes = {
  Filters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  Filters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilter);
