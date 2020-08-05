import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { aplicarFiltro } from '../actions/filtersActions';

class Filters extends Component {
  atualiza() {
    const { digitadoNome, backData, filter, digitadoValores, data } = this.props;
    const auxDat = data;
    if (digitadoNome === '' && digitadoValores.length === 0) filter(backData);
    else if (digitadoNome !== '') {
      let auxData = [];
      auxData = backData.filter((planet) => {
        const names = [];
        names.push(planet.name.toLowerCase());
        return names[0].includes(digitadoNome.toLowerCase());
      });
      filter(auxData);
    } else if (digitadoValores.length > 0) {
      let dat = backData;
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
