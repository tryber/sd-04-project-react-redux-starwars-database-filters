import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';
import { fetchPlanet } from '../actions/planetActions';
import SearchBar from './SearchBar';
import Filter from './Filter';
import './MainContainer.css';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.compare = this.compare.bind(this);
    this.planetFilter = this.planetFilter.bind(this);
  }

  componentDidMount() {
    const { getPlanet } = this.props;
    getPlanet();
  }

  compare(planetValue, filterValue, operator) {
    let result = false;
    if (operator === 'maior que') result = planetValue > filterValue;
    if (operator === 'menor que') result = planetValue < filterValue;
    if (operator === 'igual a') result = planetValue === filterValue;
    this.bar = result;
    return result;
  }

  planetFilter() {
    const { data, filters, searchedPlanet } = this.props;
    const filterArray = filters.filterByNumericValues;
    let filteredPlanet = data.filter((planet) =>
      planet.name.includes(searchedPlanet),
    );
    filterArray.map((filter) => {
      filteredPlanet = filteredPlanet.filter((planet) =>
        this.compare(
          Number(planet[filter.column]),
          Number(filter.value),
          filter.comparison,
        ),
      );
      return filteredPlanet;
    });
    return filteredPlanet;
  }

  render() {
    const { data, isLoading } = this.props;
    return (
      <div>
        <div className="filterContainer">
          <h1>Welcome to the StarWars planet API</h1>
          <div className="searchbar">
            <SearchBar />
          </div>
          <div>
            <Filter />
          </div>
        </div>
        {!isLoading && (
          <Table planets={data} filteredPlanet={this.planetFilter()} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.planetReducer.isLoading,
  data: state.planetReducer.data,
  searchedPlanet: state.filters.filterByName.name,
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanet: () => dispatch(fetchPlanet()),
});

MainContainer.propTypes = {
  getPlanet: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  searchedPlanet: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  filters: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
