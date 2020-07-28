import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { trataFiltro } from '../actions/index';

const Filtros = ({ fValues, trataFiltro1 }) => {
  if (fValues.length !== 0) {
    return fValues.map((fil) => (
      <div data-testid="filter">
        <p>
          {fil.column}, {fil.comparison}, {fil.value}
        </p>
        <button onClick={() => trataFiltro1(fil.column)}>x</button>
      </div>
    ));
  }
  return <h2>Escolha seus filtros</h2>;
};

const mapDidpatchToProps = (dispatch) => ({
  trataFiltro1: (coluna) => dispatch(trataFiltro(coluna)),
});

const mapStateToProps = (state) => ({
  fValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDidpatchToProps)(Filtros);
