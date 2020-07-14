import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions/filterByName';

const InputFilter = ({ value, dispatchActionFilterByName }) => (
  <input
    className="navbar navbar-light"
    data-testid="name-filter"
    value={value}
    onChange={(event) => dispatchActionFilterByName(event.target.value)}
    placeholder="Search By Planet Name"
  />
);

const mapStateToProps = (state) => ({
  value: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchActionFilterByName: (text) => dispatch(filterByName(text)),
});

InputFilter.propTypes = {
  dispatchActionFilterByName: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputFilter);
