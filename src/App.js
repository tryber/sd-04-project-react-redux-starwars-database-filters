import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Table from './components/Table';
import { getPlanetsAPIAct } from './actions';

class App extends React.Component {
  componentWillMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching, getPlanets } = this.props;
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

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getPlanetsAPIAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
