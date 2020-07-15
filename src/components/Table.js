import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterFunction from './FilterFunction';
import './Table.css';

class Table extends Component {
  render() {
    const { data, isFetching, searchText, comparisonFilter } = this.props;
    if (isFetching) return <div>Loading...</div>;
    const title = Object.keys(data[0]).filter((key) => key !== 'residents');
    return (
      <div>
        <div className="container">
          <table>
            <thead>
              <tr>
                {title.map((element) => <th key={element}>{element}</th>)}
              </tr>
            </thead>
            <tbody>
              {FilterFunction(data, searchText, title, comparisonFilter)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    isFetching: state.reducerPlanets.isFetching,
    data: state.reducerPlanets.data,
    searchText: state.filters.filterByName.name,
    comparisonFilter: state.filters.filterByNumericValues,
  }
);


Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  comparisonFilter: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default connect(mapStateToProps, null)(Table);
