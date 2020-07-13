import { connect } from 'react-redux';
import React from 'react';
import { actionInput } from '../actions/actionInput';

function Header({ inputText, inputValue }) {
  return (
    <div>
      <label>
        <input
          data-testid="name-filter"
          onChange={(event) => inputText(event)}
          type="text"
          value={inputValue}
          placeholder="Termo de pesquisa"
        />
      </label>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  inputText: (event) => dispatch(actionInput(event.target.value)),
});

const mapStateToProps = (state) => ({
  inputValue: state.reducerInput.filters.filterByName.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
