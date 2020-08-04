
import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';


class FilterPlanet extends Component {
  render() {
    const { filterByNamea } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="preencha"
          onChange={
            (event) => filterByNamea(event.target.value)
            }
        />
      </div>
    );
  }
}

FilterPlanet.propTypes = {
  filterByNamea: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (planetName) => dispatch(filterByName(planetName)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPlanet);
