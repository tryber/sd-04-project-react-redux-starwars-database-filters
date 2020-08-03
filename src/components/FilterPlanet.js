import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterName } from '../actions';

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

FilterPlanet.propTypes = {
  filterByName: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    name: state.filters.filterByName.name,
  };
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (planetName) => dispatch(filterName(planetName)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPlanet);
