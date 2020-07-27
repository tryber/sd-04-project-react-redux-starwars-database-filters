import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPlanets, { filterByName } from '../actions';
import Table from './Table';

class Home extends Component {
  componentDidMount() {
    const { fetchP } = this.props;
    fetchP();
  }

  render() {
    const { isLoaded, filterByName } = this.props;
    if (isLoaded) return <p>Loading</p>;
    return (
      <div>
        <label htmlFor="pName">
          <input
            id="pName"
            type="text"
            placeholder="Nome do planeta"
            onChange={(event) => filterByName(event.target.value)}
          />
        </label>
        <Table />
      </div>
    );
  }
}

Home.propTypes = {
  fetchP: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  filterByName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoaded: state.getPlanets.isLoaded,
  filterByName: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  fetchP: () => dispatch(fetchPlanets()),
  filterByName: (planetName) => dispatch((filterByName(planetName))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
