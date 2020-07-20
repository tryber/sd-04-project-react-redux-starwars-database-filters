import React, { Component } from 'react';
import { connect } from 'react-redux';
import { planetsFetchData } from './actions/PlanetsActions';
import Table from './components/Table';
import Filters from './containers/Filters';

class App extends Component {
  componentDidMount() {
    const { fetchPlanetsData } = this.props;

    fetchPlanetsData('https://swapi-trybe.herokuapp.com/api/planets');
  }

  render() {
    const { planetsLoading, planets, filters } = this.props;

    if (planetsLoading) return <span>loading...</span>;

    return (
      <div>
        <Filters />
        <Table planets={planets} filters={filters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetsLoading: state.planetsLoading.isLoading,
  planets: state.planets.data,
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlanetsData: (url) => dispatch(planetsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
