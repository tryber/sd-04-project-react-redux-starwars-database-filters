import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterPlanet } from '../actions';

// function Filter(searchPlanet) {
class Filter extends Component {
  render() {
    console.log(this.props);
    const { filterPlanet } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(event) => filterPlanet(event.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterPlanet: (planet) => dispatch(filterPlanet(planet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
