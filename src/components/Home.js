import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import fetchPlanets from '../actions';
import FilterValues from './FilterValues';
import FilterPlanet from './FilterPlanet';
import FilterRemove from './FilterRemove';
import FilterOrder from './FilterOrder';

class Home extends Component {
  componentDidMount() {
    const { buscaPlaneta } = this.props;
    buscaPlaneta();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <span className="home-loading">Loading...</span>;

    return (
      <div className="home">
        <h1 className="home-title">Star Wars DataTable</h1>
        <FilterPlanet />
        <FilterValues />
        <FilterRemove />
        <FilterOrder />
        <Table />
      </div>
    );
  }
}

Home.propTypes = {
  buscaPlaneta: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isFetching: state.getPlanets.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buscaPlaneta: () => dispatch(fetchPlanets()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
