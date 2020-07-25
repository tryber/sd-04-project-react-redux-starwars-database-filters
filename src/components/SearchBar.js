import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterPlanetByName } from '../actions/filterPlanetByName';

const SearchBar = ({ value, dispatchFilterPlanetByName }) => (
  <form>
    <div>
      <input
        data-testid="name-filter"
        value={value}
        onChange={(event) => dispatchFilterPlanetByName(event.target.value)}
      />
    </div>
  </form>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  dispatchFilterPlanetByName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFilterPlanetByName: (name) => dispatch(filterPlanetByName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
