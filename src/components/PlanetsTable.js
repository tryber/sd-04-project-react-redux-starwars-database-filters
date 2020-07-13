import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import PlanetItem from './PlanetItem';
import '../styles/PlanetsTable.css';

const operatorHelper = {
  'menor que': (v, c) => parseFloat(v) < parseFloat(c),
  'maior que': (v, c) => parseFloat(v) > parseFloat(c),
  'igual a': (v, c) => parseFloat(v) === parseFloat(c),
};


const filterInfo = (info, nameFilter, numericFilter) => {
  if (nameFilter && !info.name.toLowerCase().includes(nameFilter.toLowerCase())) return false;
  if (numericFilter.length > 0 && !numericFilter.every(
    ({ column, comparison, value }) => operatorHelper[comparison](info[column], value),
  )) return false;
  return true;
};

const orderInfo = (column, { [column]: a }, { [column]: b }) => {
  if (isNaN(a) || isNaN(b)) return parseFloat(a) - parseFloat(b);
  return a.localeCompare(b);
};

const processData = (data, name, filterByNumericValues, order) => {
  const filtered = data.filter((info) => filterInfo(info, name, filterByNumericValues));
  const ordered = filtered.sort((a, b) => orderInfo(order.column, a, b));
  return order.sort === 'ASC' ? ordered : ordered.reverse();
};

class PlanetsTable extends Component {
  componentDidMount() {
    this.props.fetchData('planets');
  }

  render() {
    const {
      data, filterByName: { name }, filterByNumericValues, order,
    } = this.props;
    if (data.length < 1) return <div>loading...</div>;
    const keys = Object.keys(data[0]).filter((k) => k !== 'residents');
    const resultingData = processData(data, name, filterByNumericValues, order);

    return (
      <table className="planets-table">
        <thead>
          <tr>
            {keys.map((k) => <th key={k}>{k.replace('_', ' ')}</th>)}
          </tr>
        </thead>
        <tbody>
          {resultingData.map((planet) => <PlanetItem data={planet} key={planet.name} />)}
        </tbody>
      </table>
    );
  }
}

PlanetsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  fetchData: PropTypes.func.isRequired,
  filterByName: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  filterByNumericValues: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  order: PropTypes.shape({
    sort: PropTypes.string,
    column: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  ...state.filters,
  order: state.order,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (request) => dispatch(fetchData(request)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsTable);
