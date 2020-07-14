import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets, filterByName } from '../actions';

import RenderTable from './RenderTable';

class Table extends Component {
  componentDidMount() {
    const { getPlanetsData } = this.props;
    getPlanetsData();
  }

  render() {
    const {
      isFetching, data, name, filterName,
    } = this.props;

    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(event) => filterName(event.target.value)}
        />
        {isFetching && 'Loading...'}
        {data.length > 0 && <RenderTable data={data} name={name} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  data: state.data,
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetsData: () => dispatch(fetchPlanets()),
  filterName: (name) => dispatch(filterByName(name)),
});

Table.propTypes = {
  getPlanetsData: PropTypes.func.isRequired,
  filterName: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: RenderTable.propTypes.isRequired,
  name: RenderTable.propTypes.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
