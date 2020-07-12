import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets } from '../actions';

import RenderTable from './RenderTable';

class Table extends Component {
  componentDidMount() {
    const { getPlanetsData } = this.props;
    getPlanetsData();
  }

  render() {
    const { isFetching, data } = this.props;

    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        {isFetching && 'Loading...'}
        {data.length > 0 && <RenderTable data={data} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.starWarsReducer.isFetching,
  data: state.starWarsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetsData: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  getPlanetsData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: RenderTable.propTypes.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
