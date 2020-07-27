import PropTypes from 'prop-types';
import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPlanetsAPIAct } from './actions';
import Table from './components/Table';

class App extends React.Component {
  componentWillMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return 'Loading';
    return (
      <div className="App">
        <p>StarWars Datatable with Filters</p>
        <header className="App-header">
          <Table />
        </header>
      </div>
    );
  }
}

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getPlanetsAPIAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
