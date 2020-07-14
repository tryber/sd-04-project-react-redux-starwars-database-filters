import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';
import SearchInput from './SearchInput';
import Filters from './Filters';
import { swFetch } from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.comp = this.comp.bind(this);
    this.swFilter = this.swFilter.bind(this);
  }

  componentDidMount() {
    const { getSwFetch } = this.props;
    getSwFetch();
  }

  comp(planetV, filterV, op) {
    let result = false;
    if (op === 'maior que') result = planetV > filterV;
    if (op === 'menor que') result = planetV < filterV;
    if (op === 'igual a') result = planetV === filterV;
    return result;
  }

  swFilter() {
    const { data, swReducer } = this.props;
    const swSearch = swReducer.filterByName.name;
    const filterArray = swReducer.filterByNumericValues;

    let swFiltered = data.filter((planet) => planet.name.includes(swSearch));
    filterArray.map((filter) => {
      swFiltered = swFiltered.filter((planet) =>
        this.comp(
          Number(planet[filter.column]),
          Number(filter.value),
          filter.comparison
        )
      );
    });
    return swFiltered;
  }

  render() {
    const { data, isLoading } = this.props;
    return (
      <div>
        <SearchInput />
        <Filters />
        {!isLoading && <Table planets={data} swFiltered={this.swFilter()} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.swReducer.isLoading,
  data: state.swReducer.data,
  swSearch: state.filterReducer.filterByName.name,
  swReducer: state.filterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getSwFetch: () => dispatch(swFetch()),
});
Home.propTypes = {
  getSwFetch: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // swSearch: PropTypes.string.isRequired,
  swReducer: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
