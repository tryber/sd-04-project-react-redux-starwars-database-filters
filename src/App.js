import React, { Component } from 'react';
import { connect } from 'react-redux';
import planetsFetchData from './middlewares/PlanetsThunk';

class App extends Component {
  componentDidMount() {
    console.log('mount')
    const { fetchPlanetsData } = this.props;

    fetchPlanetsData('https://swapi-trybe.herokuapp.com/api/planets');
  }

  render() {
    console.log('render')
    const { planetsLoading } = this.props;

    if (planetsLoading) return <span>loading...</span>;

    return (
      <div>
        <p>teste</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetsLoading: state.planetsLoading.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlanetsData: (url) => dispatch(planetsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
