import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPlanets from '../actions';
import Table from './Table';

class Home extends Component {
  componentDidMount() {
    const { fetchP } = this.props;
    fetchP();
  }

  render() {
    const { isLoaded } = this.props;
    if (isLoaded) return <p>Loading</p>;
    return (
      <div>
        <Table />
      </div>
    );
  }
}

Home.propTypes = {
  fetchP: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoaded: state.getPlanets.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchP: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
