import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetch } from '../actions';
import { expectedFilterNumber } from './Header';

const filterByNumericValues = (data, filterNumber) =>
  filterNumber.reduce((filteredPlanetsArray, filterNumericValue) => {
    const { column, comparison, value } = filterNumericValue;
    return filteredPlanetsArray.filter((planet) => {
      switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        case 'igual a':
          return Number(planet[column]) === Number(value);
        default:
          return false;
      }
    });
  }, data);

const Content = ({ data, filters }) => {
  const { filterName, filterNumber } = filters;
  const planets = filterByNumericValues(data, filterNumber);
  return (
    <tbody>
      {planets
        .filter((planet) => planet.name.toLowerCase().includes(filterName.toLowerCase()))
        .map((planet) => (
          <tr key={planet.orbital_period}>
            {Object.values(planet).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
    </tbody>
  );
};

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planetsState: [],
      headersState: [],
    };
  }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets().then((response) => {
      response.data.forEach((planet) => {
        // eslint-disable-next-line no-param-reassign
        delete planet.residents;
      });
      this.setState({
        planetsState: response.data,
        headersState: Object.keys(response.data[0]),
      });
    });
  }

  render() {
    const { filterName, filterNumber } = this.props;
    const { headersState, planetsState } = this.state;
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            {headersState.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <Content data={planetsState} filters={{ filterName, filterNumber }} />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.data,
  filterName: state.filters.filterByName.name,
  filterNumber: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterNumber: expectedFilterNumber,
};

Table.defaultProps = {
  filterNumber: [],
};

Content.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape({
    filterName: PropTypes.string,
    filterNumber: expectedFilterNumber,
  }).isRequired,
};
