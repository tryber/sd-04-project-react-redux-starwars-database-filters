import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilterNumeric } from '../../action';

function RemoveFilter({ numericValues, removeNumbers }) {
  const onClick = (type) => removeNumbers(type);
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
  removeNumbers: (type) => dispatch(removeFilterNumeric(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilter);

RemoveFilter.propTypes = {
  numericValues: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  removeNumbers: PropTypes.func.isRequired,
};
