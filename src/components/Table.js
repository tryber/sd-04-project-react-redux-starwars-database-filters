import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAPIData from '../actions';

export class Table extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData('planets');
  }

  tableHeader = data => (
    <tr>
      {Object.keys(data).map((attr, i) => <th key={i}>{attr}</th>)}
    </tr>
  );

  renderTable = data => data.map((planet, i) => (
    <tr key={i}>
      {Object.values(planet).map((attr, y) => <td key={y}>{attr}</td>)}
    </tr>
  ));

  render() {
    const { error, loading, data: { results } } = this.props;
    if (results) {
      return (
        <div>
          <h1>StarWars Datatable Filters</h1>
          <table>
            <thead>{this.tableHeader(results[0])}</thead>
            <tbody>{this.renderTable(results)}</tbody>
          </table>
        </div>
      );
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }
    return <div>Something went terribly wrong</div>;
  }
}

Table.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.shape({
      map: PropTypes.func,
    }),
  }),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  getData: PropTypes.func,
  loading: PropTypes.bool,
};

Table.defaultProps = {
  getData: () => console.log('Should be a function'),
  data: {
    results: null,
  },
};

const mapDispatchToProps = dispatch => ({
  getData: endpoint => dispatch(getAPIData(endpoint)),
});

const mapStateToProps = state => ({
  data: state.generateTable.data,
  error: state.generateTable.error,
  loading: state.generateTable.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
