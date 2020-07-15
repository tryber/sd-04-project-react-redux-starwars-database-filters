import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';
import SearchInput from './SearchInput';
import Filters from './Filters';
import { swFetch } from '../actions';
import compare from '../services/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.swFilter = this.swFilter.bind(this);
  }

  componentDidMount() {
    const { getSwFetch } = this.props;
    getSwFetch();
  }

  swFilter() {
    const { data, swReducer } = this.props;
    const swSearch = swReducer.filterByName.name;
    const filterArray = swReducer.filterByNumericValues;
    let swFiltered = data.filter((planet) => planet.name.includes(swSearch));
    filterArray.map((filter) => {
      swFiltered = swFiltered.filter((planet) =>
        compare(
          Number(planet[filter.column]),
          Number(filter.value),
          filter.comparison,
        ),
      );
      return swFiltered;
    });
    return swFiltered;
  }

  render() {
    const { isLoading } = this.props;
    if (isLoading === true) return <p>Searching for Planets...</p>;
    return (
      <div>
        <SearchInput />
        <Filters />
        <Table swFiltered={this.swFilter()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.swReducer.isLoading,
  data: state.swReducer.data,
  swSearch: state.filters.filterByName.name,
  swReducer: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  getSwFetch: () => dispatch(swFetch()),
});
Home.propTypes = {
  getSwFetch: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  swReducer: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
