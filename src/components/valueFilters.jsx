import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { aplicaValores, trocaDados } from '../actions/filtersActions';
import Card from './cardValue';
import Sortin from  "./sorteio";

class ValueFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
      options: [],
    };
  }

  componentDidMount() {
    this.iniciaStates();
  }

  iniciaStates() {
    const { options, choseValues } = this.props;
    const newOpt = options;
    if (choseValues.length === 0) this.setState({ options });
    const columnsUsed = choseValues.map((value) => value.column);
    columnsUsed.forEach((colum) => {
      newOpt.forEach((opt, index) => {
        if (opt === colum) newOpt.splice(index, 1);
      });
    });
    this.setState({ options: newOpt });
  }

  gerenciaStates(state, valor) {
    this.setState({ [state]: valor });
  }

  filtra() {
    const { filter, muda } = this.props;
    const { column, comparison, value, options } = this.state;
    const newOpt = options.filter((opt) => opt !== column);
    this.setState({ options: newOpt });
    filter(column, comparison, value, newOpt);
    muda();
  }

  form() {
    return (
      <div>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={(e) => this.gerenciaStates('comparison', e.target.value)}
        >
          <option defaultValue>Comparison</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          onChange={(e) => this.gerenciaStates('value', e.target.value)}
        />
      </div>
    );
  }

  render() {
    const { options } = this.state;
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.filtra();
          }}
        >
          <select
            data-testid="column-filter"
            name="column"
            onChange={(e) => this.gerenciaStates('column', e.target.value)}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {this.form()}
          <button type="submit" data-testid="button-filter">
            Filtrar
          </button>
        </form>
        <Card />
        <Sortin />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.filters.options,
  choseValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispath) => ({
  filter: (col, com, val, opt) => dispath(aplicaValores(col, com, val, opt)),
  muda: () => dispath(trocaDados()),
});

ValueFilters.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  choseValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.func.isRequired,
  muda: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ValueFilters);
