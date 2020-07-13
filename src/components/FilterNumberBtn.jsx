import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { numericFilter } from '../actions/filters';

const FilterNumberBtn = ({ state, filterByNumber }) => (
  <button
    type="button"
    data-testid="button-filter"
    onClick={() => {
      let stateObject = {};
      if (state.column && state.comparison && state.value) {
        stateObject = filterByNumber(state);
      }
      return stateObject;
    }}
  >
    Filter
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  filterByNumber: (value) => dispatch(numericFilter(value)),
});

FilterNumberBtn.propTypes = {
  filterByNumber: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(null, mapDispatchToProps)(FilterNumberBtn);
