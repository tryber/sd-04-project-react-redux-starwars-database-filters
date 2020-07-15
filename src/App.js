import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Table from './components/Table';
import SearchText from './components/SearchText';
import SelectColumn from './components/SelectColumn';
import DeleteFunction from './components/DeleteFunction';
import { fetchPlanets } from './actions';

class App extends Component {
  componentDidMount() {
    const { getStarsWarsPlanets } = this.props;
    getStarsWarsPlanets();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Star Wars Database</h2>
          <div className="container-search">
            <SearchText />
            <SelectColumn />
          </div>
          <DeleteFunction />
        </header>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getStarsWarsPlanets: () => dispatch(fetchPlanets()),
});

App.propTypes = {
  getStarsWarsPlanets: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
