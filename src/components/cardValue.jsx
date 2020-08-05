import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeValores } from '../actions/filtersActions';
import { trocaDados } from '../actions/filtersActions';

class Card extends Component {

  retira(value) {
    const { filter, muda } = this.props;
    filter(value);
    muda();
  }

  render() {
    const { digitadoValores } = this.props;
    if (digitadoValores !== undefined  && digitadoValores.length > 0) {
      return (
        <div>
          <ul>
            {digitadoValores.map((element, index) => (
              <li data-testid="filter" key={`${element.column}`}>
                {`${element.column} ${element.comparison} ${element.value}`}
                <button
                  type="button"
                  value={element.column}
                  onClick={((e) => this.retira(e.target.value))}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <div>Sem Valores Adicionados</div>;
  }
}

const mapStateToProps = (state) => ({
  digitadoValores: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispath) => ({
  filter: (valor) => dispath(removeValores(valor)),
  muda: () => dispath(trocaDados()),
});

Card.propTypes = {
  digitadoValores: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.func.isRequired,
  muda: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
