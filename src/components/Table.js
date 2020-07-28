import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterForms from './FilterForms';
import { handleChange } from '../actions';
import OrderFilters from './OrderFilters';

// class Table extends Component {
//   componentDidMount() {
//     const { fetchPlanets: fetch } = this.props;
//     fetch();
//   }

//   test() {
//     const { filteredPlanets } = this.props;
//     return filteredPlanets;
//   }

//   render() {
//     const { planetsData, filteredPlanets, isFetching } = this.props;
//     if (isFetching) return <p>Loading...</p>;
//     const headerTitles = planetsData ? Object.keys(planetsData[0]) : [];
//     return <RenderTable tableHeaderTitles={headerTitles} filteredPlanets={filteredPlanets} />;
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   fetchPlanets: () => dispatch(fetchPlanets()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Table);

// Table.propTypes = {
//   planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
//   fetchPlanets: PropTypes.func.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   filteredPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

const comparisson = (planet, { column, comparison, value }) => {
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
};

const order = (column, sort, planets) => {
  const newPlanets = [...planets];
  if (!Number(newPlanets[0][column])) {
    newPlanets.sort(function (a, b) {
      const x = a[column].toLowerCase();
      const y = b[column].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else {
    newPlanets.sort(function (a, b) {
      return a[column] - b[column];
    });
  }

  if (sort === 'ASC') return newPlanets;
  if (sort === 'DESC') return newPlanets.reverse();
  return newPlanets;
};

const Table = ({ data, handleInput, inputText, filterByNumericValues, col, sort }) => {
  let planets = [...data];
  if (planets.length >= 1) {
    const newColumn = col.toLowerCase();
    planets = order(newColumn, sort, planets);
  }
  const keys = data.length >= 1 ? Object.keys(data[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');
  if (filterByNumericValues.length >= 1) {
    filterByNumericValues.forEach((filter) => {
      planets = planets.filter((planet) => comparisson(planet, filter));
    });
  }

  if (inputText !== '') planets = planets.filter((planet) => planet.name.includes(inputText));

  return (
    <div>
      <input data-testid="name-filter" type="text" onChange={(e) => handleInput(e.target.value)} />
      <FilterForms />
      <OrderFilters keys={tableHeader} />
      <table>
        <thead>
          <tr>
            {tableHeader.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={planet.name}>
              {tableHeader.map((column) => (
                <td key={planet[column]}>{planet[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputText: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
  data: state.apiReducer.data,
  error: state.apiReducer.error,
  col: state.filters.order.column,
  sort: state.filters.order.sort,
});

const mapDispatchToProps = (dispatch) => ({
  handleInput: (text) => dispatch(handleChange(text)),
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInput: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  col: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
