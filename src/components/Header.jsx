import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { actionInput } from '../actions/actionInput';
import DropDown from './Dropdown';

function Header({ inputText, inputValue }) {
  return (
    <div>
      <label htmlFor="seachBar">
        <input
          data-testid="name-filter"
          onChange={(event) => inputText(event)}
          type="text"
          value={inputValue}
          placeholder="Termo de pesquisa"
        />
      </label>
      <DropDown />
    </div>
  );
}

Header.propTypes = {
  inputText: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  inputText: (event) => dispatch(actionInput(event.target.value)),
});

const mapStateToProps = (state) => ({
  inputValue: state.filters.filterByName.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
