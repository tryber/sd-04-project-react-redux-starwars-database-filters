import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import linha from './TableBody';

const handleTabela = (fValues, data, filterByName) => {
  const fil = data.filter((elem) => elem.name.includes(filterByName));
  if (fValues.length !== 0) {
    switch (fValues[0].comparison) {
      case 'maior que':
        return fil.filter((elem) => Number(elem[fValues[0].column]) > Number(fValues[0].value));
      case 'menor que':
        return fil.filter((elem) => Number(elem[fValues[0].column]) < Number(fValues[0].value));
      case 'igual a':
        return fil.filter((elem) => Number(elem[fValues[0].column]) === Number(fValues[0].value));
      default:
        return fil;
    }
  }
  return fil;
};

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    // this.handleTabela = this.handleTabela.bind(this);
  }


  render() {
    const { data, isLoading, filterByName, fValues } = this.props;
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
          {handleTabela(fValues, data, filterByName).map((item) => linha(item))}
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
  fValues: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.reducer.data,
  isLoading: state.reducer.isLoading,
  filterByName: state.filters.filterByName.name,
  fValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);
