import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

const SearchPlanet = ({ filterByName }) => {
  return (
    <div>
      <label htmlFor="search">
        Procurar
        <input
          data-testid="name-filter"
          type="text"
          name="search"
          onChange={(event) => {
            filterByName(event.target.value);
          }}
        />
      </label>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
});

export default connect(null, mapDispatchToProps)(SearchPlanet);
