import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { aplicarFiltro } from '../actions/filtersActions';

class Filters extends Component {
  atualiza() {
    const { digitadoNome, backData, filter } = this.props;
    if (digitadoNome === '') filter(backData);
    else if (digitadoNome !== '') {
      let auxData = [];
      auxData = backData.filter((planet) => {
        const names = [];
        names.push(planet.name.toLowerCase());
        return names[0].includes(digitadoNome.toLowerCase());
      });
      filter(auxData);
    }
    return <h3>TABELA</h3>;
  }

  render() {
    const { troca } = this.props;
    return !troca ? <h3>TABELA</h3> : <div>{this.atualiza()}</div>;
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  backData: state.planetsReducer.backData,
  troca: state.planetsReducer.changeData,
  digitadoNome: state.filtersReducers.filterByName.name,
});

const mapDispatchToProps = (dispath) => ({
  filter: (filtro) => dispath(aplicarFiltro(filtro)),
});

Filters.propTypes = {
  backData: PropTypes.arrayOf(PropTypes.object).isRequired,
  troca: PropTypes.bool.isRequired,
  digitadoNome: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
