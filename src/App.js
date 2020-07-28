import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import { getSWAPI } from './actions/index.js';
import Filters from './components/Filters';
import Table from './components/Table/index';
// import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Filters />
        </header>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getSWAPI()),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  getPlanets: Proptypes.func.isRequired,
};
