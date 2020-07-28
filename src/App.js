import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getPlanetsAPIAct } from './actions';
import Table from './components/Table';
import Input from './components/Input';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <p>Loading</p>;
    return (
      <div>
        <Input />
        <p>StarWars Datatable with Filters</p>
        <Table />
      </div>
    );
  }
}

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getPlanetsAPIAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
