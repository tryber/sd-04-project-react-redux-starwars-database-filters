import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';
import SearchText from './SearchText';
import FilterFunction from './FilterFunction';
import './Table.css';
import SelectColumn from './SelectColumn';

class Table extends Component {
  componentDidMount() {
    const { getStarsWarsPlanets } = this.props;
    getStarsWarsPlanets();
  }

  render() {
    const { data, isFetching, searchText, comparisonFilter } = this.props;
    if (isFetching) return <div>Loading...</div>;
    const title = Object.keys(data[0]).filter((key) => key !== 'residents');
    return (
      <div>
        <SearchText />
        <SelectColumn />
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

const mapDispatchToProps = (dispatch) => ({
  getStarsWarsPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  getStarsWarsPlanets: PropTypes.func.isRequired,
  data: PropTypes.shape.isRequired,
  isFetching: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  comparisonFilter: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
