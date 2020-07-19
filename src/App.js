import React, { Component } from 'react';
import { connect } from 'react-redux';
import { planetsFetchData } from './actions/PlanetsActions';
import Table from './components/Table';

class App extends Component {
  componentDidMount() {
    const { fetchPlanetsData } = this.props;

    fetchPlanetsData('https://swapi-trybe.herokuapp.com/api/planets');
  }

  render() {
    const { planetsLoading, planets } = this.props;

    if (planetsLoading) return <span>loading...</span>;

    return (
      <div>
        <Table planets={planets} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetsLoading: state.planetsLoading.isLoading,
  planets: state.planets.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlanetsData: (url) => dispatch(planetsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
