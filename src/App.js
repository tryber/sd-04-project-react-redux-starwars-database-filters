import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import './App.css';
import Table from './components/Table';
import { fetchPlanets } from './actions';
import FilterName from './components/FilterName';
// import { render } from '@testing-library/react';

class App extends Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h1>Loading...</h1>;
    return (
      <div className="App">
        <header className="App-header">
          <FilterName />
          <Table />
        </header>
      </div>
    );
  }
}

const mapState = (state) => ({
  isFetching: state.getPlanets.isFetching,
});

const mapDispatch = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});


export default connect(mapState, mapDispatch)(App);

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
