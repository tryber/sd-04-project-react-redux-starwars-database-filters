import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilters } from '../actions/dataAction';


function RemoveFilters({ numericValues, removeNumeric }) {
  const removeFiltered = (item) => removeNumeric(item);
  console.log(numericValues);
  return (
    <div>
      <h3>Filtrados</h3>
      {numericValues.map((item) => (
        <div data-testid="filter" key={item.column}>
          <span>{`${item.column} - ${item.comparison} - ${item.value}`}</span>
          <button type="button" onClick={() => removeFiltered(item)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeNumeric: (filteredKeys) => dispatch(removeFilters(filteredKeys)),
});

RemoveFilters.propTypes = {
  numericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.number,
    }),
  ).isRequired,
  removeNumeric: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilters);
