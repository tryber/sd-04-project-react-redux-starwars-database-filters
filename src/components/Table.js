import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import linha from './TableBody';

const compare = (data, fValues) => {
  switch (fValues.comparison) {
    case 'maior que':
      return Number(data[fValues.column]) > Number(fValues.value);
    case 'menor que':
      return Number(data[fValues.column]) < Number(fValues.value);
    case 'igual a':
      return Number(data[fValues.column]) === Number(fValues.value);
    default:
      return data;
  }
};

const handleTabela = (fValues, data, filterByName) => {
  let fil = data.filter((elem) => elem.name.includes(filterByName));
  if (fValues.length !== 0) {
    fValues.forEach((filtro) => {
      fil = fil.filter((planeta) => compare(planeta, filtro));
    });
  }
  return fil;
};

const sortTabela = (data, opt, radio) => {
  const filterColumn = opt.toLowerCase();
  if (isNaN(data[0][filterColumn])) {
    data.sort((a, b) => (a[filterColumn] > b[filterColumn] ? 1 : -1));
  } else {
    data.sort((a, b) => a[filterColumn] - b[filterColumn]);
  }
  if (radio === 'DESC') data.reverse();
  return data;
};

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    // this.sortTabela = this.sortTabela.bind(this);
  }

  render() {
    const { data, isLoading, filterByName, fValues, ordem } = this.props;
    if (isLoading) return <span>Loading...</span>;
    const planetas = data[0];
    const objPlanetas = Object.keys(planetas).filter((item) => item !== 'residents');
    return (
      <table>
        <thead>
          <tr>
            {objPlanetas.map((planet) => (
              <th>{planet}</th>
            ))}
          </tr>
        </thead>
        <tbody>{sortTabela(handleTabela(fValues, data, filterByName), ordem.column, ordem.sort)
          .map((item) => linha(item))}</tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }).isRequired,
  fValues: PropTypes.func.isRequired,
  filterByName: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  ordem: PropTypes.shape({
    column: PropTypes.string,
    opt: PropTypes.string,
    sort: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.reducer.data,
  ordem: state.reducer.order,
  isLoading: state.reducer.isLoading,
  filterByName: state.filters.filterByName.name,
  fValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);
