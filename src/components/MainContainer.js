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
    this.planetFilter = this.planetFilter.bind(this);
  }

  componentDidMount() {
    const { getPlanet } = this.props;
    getPlanet();
  }

  planetFilter() {
    const { data, filters } = this.props;
    const searchedPlanet = filters.filterByName.name;
    const filterArray = filters.filterByNumericValues;
    const compare = (a, b, op) => {
      let result = false;
      console.log('a,b,op', a, b, op);
      if (op === 'maior que') result = a > b;
      if (op === 'menor que') result = a < b;
      if (op === 'igual a') {
        console.log('test igual', a === b);
        result = a === b;
      }
      return result;
    };
    let filteredPlanet = data.filter((planet) =>
      planet.name.includes(searchedPlanet),
    );
    console.log('filterArray', filterArray.length);
    filterArray.map((filter) => {
      if (filterArray.length > 0 && filter.column !== 'Coluna') {
        filteredPlanet = filteredPlanet.filter((planet) =>
          compare(
            Number(planet[filter.column]),
            Number(filter.value),
            filter.comparison,
          ),
        );
      }
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
  isLoading: PropTypes.bool.isRequired,
  filters: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
