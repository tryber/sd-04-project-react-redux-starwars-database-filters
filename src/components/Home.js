import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
import Filters from './filters/Filters';
import { requestFetch } from '../action/index';

class Home extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    if (this.props.loading) return <h1>Loading...</h1>;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <Filters />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
