import { connect } from 'react-redux';
import React from 'react';
import onChange from '../actions/onChange';

function Header({ OnChangeDispatch, searchBar }) {
  const OnChangeHandler = (e) => {
    OnChangeDispatch(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          data-testid="name-filter"
          onChange={(event) => OnChangeHandler(event)}
          type="text"
          value={searchBar}
          placeholder="Termo de pesquisa"
        />
      </label>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  OnChangeDispatch: (e) => dispatch(onChange(e)),
});

const mapStateToProps = (state, ownProps) => ({
  searchBar: state.reducerRequestApi.filters.filterByName.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
