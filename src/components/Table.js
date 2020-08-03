import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHead from './TableHead';
import FilterTable from './FilterByName';
import Filters from './Filters';
import RemoveFilter from './RemoveFilters';
import FilterSort from './FilterSort';
import { fetchGetApi } from '../action';

class Table extends Component {
  componentDidMount() {
    const { getCurrentApi } = this.props;
    getCurrentApi();
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <FilterTable />
        <Filters />
        <RemoveFilter />
        <FilterSort />
        {!loading && <TableHead />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.reducerGetApi.loading,
  data: state.reducerGetApi.data,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentApi: () => dispatch(fetchGetApi()),
});

Table.propTypes = {
  getCurrentApi: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
