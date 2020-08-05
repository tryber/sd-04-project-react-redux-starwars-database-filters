import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { inputPesquisa, trocaDados } from '../actions/filtersActions';

class Buscar extends Component {
  changes(e) {
    const { muda, filterName } = this.props;
    filterName(e.target.value);
    muda();
  }

  render() {
    const { digitado = '' } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => this.changes(e)}
          value={digitado}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  digitado: state.filtersReducers.filterByName.name,
});

const mapDispatchToProps = (dispath) => ({
  filterName: (name) => dispath(inputPesquisa(name)),
  muda: () => dispath(trocaDados()),
});

Buscar.propTypes = {
  digitado: PropTypes.string.isRequired,
  filterName: PropTypes.func.isRequired,
  muda: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscar);
