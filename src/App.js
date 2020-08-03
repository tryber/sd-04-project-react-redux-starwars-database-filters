import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApiPlanets } from './actions';
import './App.css';
import Table from './components/table.jsx';

class App extends Component {
  componentDidMount() {
    const { getPlanetsAPI } = this.props;
    getPlanetsAPI();
  }

  render() {
    return (
      <div className="App">
        <header>
         <Table />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispath) => ({
  getPlanetsAPI: () => dispath(fetchApiPlanets()),
});

export default connect(null, mapDispatchToProps)(App);
