import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { removeFilterAct } from '../actions';

const Filters = (props) => {
  const { filterByNumericValues, removeFilter } = props;
  return (
    <div>
      <h1>Filters</h1>
      <ul>
        {filterByNumericValues.map(({ column, comparison, value }) => (
          <li key={column} data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button type="button" onClick={() => removeFilter(column)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Filters.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(Object).isRequired,
  removeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (column) => dispatch(removeFilterAct(column)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Filters);
