import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
import { fetchPlanets } from '../actions';
import FilterName from './FilterName';
import FilterValues from './FilterValues';
import RemoveFilter from './RemoveFilter';

export class Home extends Component {
  componentDidMount() {
    const { onFetchPlanets } = this.props;
    onFetchPlanets();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h3>Loading...</h3>;
    return (
      <div>
        <h3>Strawars DataTable</h3>
        <FilterName />
        <FilterValues />
        <RemoveFilter />
        <Table />
      </div>
    );
  }
}

Home.propTypes = {
  onFetchPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
