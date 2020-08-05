import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { aplicarFiltro } from '../actions/filtersActions';

const sortData = (data, column, sort) => {
  console.log(column);
  if (sort === 'DESC') {
    return data.sort((a, b) => Number(b[column]) - Number(a[column]));
  }
  if (sort === 'ASC') {
    return data.sort((a, b) => Number(a[column]) - Number(b[column]));
  }
  return false;
};

class Filters extends Component {
  atualiza() {
    const { digitadoNome, filter, digitadoValores, data, troca, order } = this.props;
    let planets = data.sort((a, b) => a.name.localeCompare(b.name));
    if (order.column !== 'Name' && order.column !== undefined) {
      planets = sortData(planets, order.column, order.sort);
    }
    //console.log(planets);
    const auxDat = planets;
    if (digitadoNome === '' && !(digitadoValores.length > 0)) filter(auxDat);
    else if (digitadoNome !== '') {
      let auxData = [];
      auxData = auxDat.filter((planet) => {
        const names = [];
        names.push(planet.name.toLowerCase());
        return names[0].includes(digitadoNome.toLowerCase());
      });
      filter(auxData);
    } else if (troca && digitadoValores.length > 0) {
      let dat = auxDat;
      digitadoValores.forEach((element) => {
        const comparation = parseFloat(element.value);
        if (element.comparison === 'maior que') {
          dat = auxDat.filter((planet) => parseFloat(planet[element.column]) > comparation);
        } else if (element.comparison === 'igual a') {
          dat = auxDat.filter((planet) => parseFloat(planet[element.column]) === comparation);
        } else if (element.comparison === 'menor que') {
          dat = auxDat.filter((planet) => parseFloat(planet[element.column]) < comparation);
        }
        filter(dat);
        console.log(dat);
        return null;
      });
    }
    //  filter(backData);
    return <p />;
  }

  render() {
    const { troca } = this.props;
    return !troca ? <p /> : <div>{this.atualiza()}</div>;
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  backData: state.planetsReducer.backData,
  troca: state.planetsReducer.changeData,
  digitadoNome: state.filters.filterByName.name,
  digitadoValores: state.filters.filterByNumericValues,
  options: state.filters.options,
  order: state.filters.order,
});

const mapDispatchToProps = (dispath) => ({
  filter: (filtro) => dispath(aplicarFiltro(filtro)),
});

Filters.propTypes = {
  backData: PropTypes.arrayOf(PropTypes.object).isRequired,
  troca: PropTypes.bool.isRequired,
  digitadoNome: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  digitadoValores: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
