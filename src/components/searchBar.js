import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputName, valorNumerico } from '../actions/index';

class SearchBar extends React.Component {
  static filOpt(fValues, options) {
    if (fValues.length !== 0) {
      let opcao = options;
      fValues.forEach(({ column }) => {
        opcao = opcao.filter((op) => op !== column);
      });
      return opcao;
    }
    return options;
  }

  constructor(props) {
    super(props);
    this.state = {
      coluna: '',
      comparacao: '',
      numero: '',
    };
    this.handleColuna = this.handleColuna.bind(this);
    this.handleCom = this.handleCom.bind(this);
    this.handleN = this.handleN.bind(this);
  }

  handleColuna(event) {
    this.setState({
      coluna: event.target.value,
    });
  }

  handleCom(event) {
    this.setState({
      comparacao: event.target.value,
    });
  }

  handleN(event) {
    this.setState({
      numero: event.target.value,
    });
  }

  render() {
    const { inputName1, valorNumerico1, options, fValues } = this.props;
    const { numero, comparacao, coluna } = this.state;
    const comp = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <div>
        <form>
          <label htmlFor="inputTexto">Filtre por nome</label>
          <input type="text" name="inputTexto" data-testid="name-filter" onChange={inputName1} />
        </form>
        <form>
          <select value={coluna} onChange={this.handleColuna} data-testid="column-filter">
            {SearchBar.filOpt(fValues, options).map((e) => (<option value={e}>{e}</option>))}
          </select>
          <select value={comparacao} onChange={this.handleCom} data-testid="comparison-filter">
            {comp.map((e) => (<option value={e}>{e}</option>))}
          </select>
          <input type="number" value={numero} onChange={this.handleN} data-testid="value-filter" />
          <button
            type="button" data-testid="button-filter"
            onClick={() => valorNumerico1(coluna, comparacao, numero)}
          >Pesquise
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  fValues: PropTypes.func.isRequired,
  inputName1: PropTypes.func.isRequired,
  options: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  valorNumerico1: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  inputName1: (event) => dispatch(inputName(event)),
  valorNumerico1: (numero, coluna, comparacao) =>
    dispatch(valorNumerico(numero, coluna, comparacao)),
});

const mapStateToProps = (state) => ({
  fValues: state.filters.filterByNumericValues,
  options: state.filters.options,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
