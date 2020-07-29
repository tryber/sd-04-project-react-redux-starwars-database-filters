import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Table from './components/Table';
import SearchBar from './components/searchBar';
import Ordenador from './components/ordenador';
import Filtros from './components/filtros';
import { fetchApi } from './actions/index';

class App extends React.Component {
  componentDidMount() {
    const { fetchApi1 } = this.props;
    fetchApi1();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <Filtros />
          <Ordenador />
        </header>
        <Table />
      </div>
    );
  }
}

App.propTypes = {
  fetchApi1: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchApi1: () => dispatch(fetchApi()),
});

export default connect(null, mapDispatchToProps)(App);
