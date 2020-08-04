
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';


class FilterPlanet extends Component {
  render() {
    const { filterByName } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="preencha"
          onChange={
            (event) => filterByName(event.target.value)
            }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (planetName) => dispatch(filterByName(planetName)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPlanet);
