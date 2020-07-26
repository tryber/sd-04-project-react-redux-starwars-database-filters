import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';
import { fetchPlanet } from '../actions/dataAction';
import FilterName from './FilterName';

class Home extends Component {
  componentDidMount() {
    const {fetch} = this.props;
    fetch();
    console.log(fetch());
  }
  render() {
    const { isFetching } = this.props;
    if (!isFetching) {
      return <div>Loading</div>;
    }
    return (
      <div className="App">
        <FilterName />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchPlanet()),
});

Home.propTypes = {
  isFetching: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
