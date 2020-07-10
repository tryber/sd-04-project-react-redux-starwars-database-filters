import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Table from './components/Table';
import { fetchSWPlanets } from './actions';

const App = (props) => {
  const { getPlanets } = props;
  getPlanets();
  return (
    <div>
      <header>
        <Table />
      </header>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchSWPlanets()),
});

export default connect(null, mapDispatchToProps)(App);
