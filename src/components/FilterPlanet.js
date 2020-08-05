
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';


class FilterPlanet extends Component {
  render() {
    const { filterByNames } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="preencha"
          onChange={
            (event) => filterByNames(event.target.value)
            }
        />
      </div>
    );
  }
}

FilterPlanet.propTypes = {
  filterByNames: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNames: (planetName) => dispatch(filterByName(planetName)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPlanet);
