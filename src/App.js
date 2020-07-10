import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSwPlanets } from './actions';
import './App.css';

import Table from './components/Table';

function App({ fetchSwPlanets }) {
  fetchSwPlanets();
  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSwPlanets: () => dispatch(getSwPlanets()),
});

App.propTypes = {
  fetchSwPlanets: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
