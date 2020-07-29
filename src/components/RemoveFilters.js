import React from 'react';
import { connect } from 'react-redux';
import { removeNumericFilter } from '../actions';

function RemoveFilters({ numericValues, removeNumeric }) {
  const onClick = (item) => removeNumeric(item);

  return numericValues.map((item) => (
    <div key={item.value}>
      <span>{`${item.column} - ${item.comparison} - ${item.value} `}</span>
      <button type="button" onClick={() => onClick(item)}>
        X
      </button>
    </div>
  ));
}

const mapState = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatch = (dispatch) => ({
  removeNumeric: (filterKeys) => dispatch(removeNumericFilter(filterKeys)),
});

export default connect(mapState, mapDispatch)(RemoveFilters);
