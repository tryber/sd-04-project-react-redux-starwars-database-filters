import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table/Table';
import fetchplanets from '../action/index';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchplanets();
  }

  render() {
    if (this.props.loading) return <h1>Loading...</h1>;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.getPlanets.isFetching,
});

export default connect(mapStateToProps, { fetchplanets })(Home);

Home.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
