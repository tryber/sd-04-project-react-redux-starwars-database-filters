import { connect } from 'react-redux';
import React from 'react';
import onChange from '../actions/onChange';

function Header({ OnChangeHandler, inputText }) {
  return (
    <div>
      <label>
        <input
          data-testid="name-filter"
          onChange={(event) => OnChangeHandler(event.target.value)}
          type="text"
          value={inputText}
          placeholder="Termo de pesquisa"
        />
      </label>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  OnChangeHandler: (e) => dispatch(onChange(e)),
});

const mapStateToProps = (state) => ({
  inputText: state.reducerOnChange.filters.filterByName.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
