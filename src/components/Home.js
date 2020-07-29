import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';
import Table from './Table';
import PropTypes from 'prop-types';

export class Home extends Component {
  componentDidMount() {
    const { fetchPlanets } = this.props;
    console.log(fetchPlanets());
    fetchPlanets();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h3>Loading...</h3>;
    return (
      <div>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetchPlanets: PropTypes.any,
};
