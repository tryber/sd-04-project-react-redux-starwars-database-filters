import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Table from './components/Table';
import {fetchPlanets } from './actions';
// import { render } from '@testing-library/react';

class App extends Component {

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h1>Loading...</h1>
    return (
      <div className="App">
        <header className="App-header">
          <Table />
        </header>
      </div>
    );
  }
}

const mapState = (state) => ({
  isFetching: state.getPlanets.isFetching
});

const mapDispatch = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets())
});


export default connect(mapState, mapDispatch)(App);
