import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getPlanetsAPIAct } from './actions';
import Table from './components/Table';
import Input from './components/Input';
import Filters from './components/Filters';
import OrderFilter from './components/orderFilter';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching, filterByNumericValues } = this.props;
    if (isFetching) return <p>Loading</p>;
    return (
      <div>
        <Input />
        <OrderFilter />
        {(filterByNumericValues.length > 0) ? <Filters /> : <p>Nenhum filtro aplicado</p>}
        <p>StarWars Datatable with Filters</p>
        <Table />
      </div>
    );
  }
}

App.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(Object).isRequired,
  getPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.filters,
  ...state.order,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getPlanetsAPIAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
