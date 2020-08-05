<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiPlanets } from './actions';
import './App.css';
import Table from './components/table.jsx';
import Buscar from './components/busca.jsx';
import Filters from './components/filters';
import ValueFilters from './components/valueFilters';

class App extends Component {
  componentDidMount() {
    const { getPlanetsAPI } = this.props;
    getPlanetsAPI();
  }

  render() {
    return (
      <div className="App">
        <header>
          <Buscar />
          <ValueFilters />
          <Filters />
          <Table />
        </header>
      </div>
    );
  }
=======
import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
>>>>>>> e14567c83b028f9242607acca7d007b7229c9e1f
}

const mapDispatchToProps = (dispath) => ({
  getPlanetsAPI: () => dispath(fetchApiPlanets()),
});

App.propTypes = {
  getPlanetsAPI: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
