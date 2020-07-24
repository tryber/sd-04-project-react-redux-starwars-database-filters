import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets, filterByName } from '../actions';

import RenderTable from './RenderTable';
import SelectFilter from './SelectFilter';
import FiltersList from './FiltersList';

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
        <SelectFilter />
        <FiltersList />
        {isFetching && 'Loading...'}
        {data.length > 0 && <RenderTable data={data} name={name} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.starWarsAPIReducer.isFetching,
  data: state.starWarsAPIReducer.data,
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetsData: () => dispatch(fetchPlanets()),
  filterName: (payload) => dispatch(filterByName(payload)),
});

Table.propTypes = {
  getPlanetsData: PropTypes.func.isRequired,
  filterName: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: RenderTable.propTypes.isRequired,
  name: RenderTable.propTypes.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
