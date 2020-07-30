import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';
import Table from './Table';
import FilterName from './FilterName';
import FilterNumber from './FilterNumber';

export class Home extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h3>Loading...</h3>;
    return (
      <div>
        <FilterNumber />
        <FilterName />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPlanets: PropTypes.func.isRequired,
};
