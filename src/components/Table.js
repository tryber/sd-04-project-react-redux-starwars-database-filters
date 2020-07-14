import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHead from './TableHead';
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
        {!loading && <TableHead />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.reducerGetApi.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentApi: () => dispatch(fetchGetApi()),
});

Table.propTypes = {
  getCurrentApi: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
