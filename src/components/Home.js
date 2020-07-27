import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPlanets, { filterByName } from '../actions';
import Table from './Table';
import FilterValues from './FilterValues';

class Home extends Component {
  componentDidMount() {
    const { fetchP } = this.props;
    fetchP();
  }

  render() {
    const { isLoaded, filterBN } = this.props;
    if (isLoaded) return <p>Loading</p>;
    return (
      <div>
        <label htmlFor="pName">
          <input
            data-testid="name-filter"
            id="pName"
            type="text"
            placeholder="Nome do planeta"
            onChange={(event) => filterBN(event.target.value)}
          />
        </label>
        <FilterValues />
        <Table />
      </div>
    );
  }
}

Home.propTypes = {
  fetchP: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  filterBN: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoaded: state.getPlanets.isLoaded,
  filterByName: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  fetchP: () => dispatch(fetchPlanets()),
  filterBN: (planetName) => dispatch((filterByName(planetName))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
