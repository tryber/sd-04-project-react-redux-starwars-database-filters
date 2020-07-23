import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import linha from './TableBody';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.handleTabela = this.handleTabela.bind(this);
  }

  handleTabela = (filterValues, data, filterByName) => {
    const filtrado = data.filter((elem) => elem.name.includes(filterByName));
    if (filterValues.length !== 0) {
      switch (filterValues[0].comparison) {
        case 'maior que':
          return filtrado.filter((elem) => elem[filterValues[0].column] > filterValues[0].value);
        case 'menor que':
          return filtrado.filter((elem) => elem[filterValues[0].column] < filterValues[0].value);
        case 'igual a':
          return filtrado.filter((elem) => elem[filterValues[0].column] === filterValues[0].value);
        default:
          return filtrado;
      }
    }
    return filtrado;
  }

  render() {
    const { data, isLoading, filterByName, filterValues } = this.props;
    if (isLoading) return <span>Loading...</span>;
    const planetas = data[0];
    const objPlanetas = Object.keys(planetas).filter((item) => item !== 'residents');
    return (
      <table>
        <thead>
          <tr>
            {objPlanetas.map((planet) => (<th>{planet}</th>))}
          </tr>
        </thead>
        <tbody>
          {this.handleTabela(filterValues, data, filterByName).map((item) => linha(item))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }).isRequired,
  filterByName: PropTypes.bool.isRequired,
  filterValues: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.reducer.data,
  isLoading: state.reducer.isLoading,
  filterByName: state.filters.filterByName.name,
  filterValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);
