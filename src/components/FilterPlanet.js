import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class FilterPlanet extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="preencha"
          onChange={(event) => filterByName(event.target.value)}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterByName: (planetName) => dispatch(filterByName(planetName)),
  };
}

export default connect(null, mapDispatchToProps)(FilterPlanet);
