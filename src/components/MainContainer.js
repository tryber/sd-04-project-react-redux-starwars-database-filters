import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';
import { fetchPlanet } from '../actions/planetActions';
import SearchBar from './SearchBar';
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
    const { data, searchedPlanet } = this.props;
    const filteredPlanet = data.filter((planet) =>
      planet.name.includes(searchedPlanet),
    );

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
});

const mapDispatchToProps = (dispatch) => ({
  getPlanet: () => dispatch(fetchPlanet()),
});

MainContainer.propTypes = {
  getPlanet: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchedPlanet: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
