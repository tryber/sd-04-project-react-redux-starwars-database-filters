import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import Header from './components/Header';
import { requestFetchApi } from './actions/actionFetch';
import Table from './components/Table/Table';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
      </div>
    );
  }
}

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetchApi()),
});

export default connect(null, mapDispatchToProps)(App);
