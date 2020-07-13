import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputName } from '../actions/index';

const SearchBar = ({ inputName1 }) =>
  <form>
    <label htmlFor="inputTexto">Filtre por nome</label>
    <input type="text" name="inputTexto" data-testid="name-filter" onChange={inputName1} />
  </form>
;

SearchBar.propTypes = {
  inputName1: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  inputName1: (event) => dispatch(inputName(event)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
