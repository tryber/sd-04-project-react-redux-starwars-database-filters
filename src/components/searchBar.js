import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputName, valorNumerico } from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coluna: '',
      comparacao: '',
      numero: '',
    };
    this.handleColuna = this.handleColuna.bind(this);
    this.handleCom = this.handleCom.bind(this);
    this.handleNumero = this.handleNumero.bind(this);
    // this.handleRedux = this.handleRedux.bind(this);
  }
  // handleRedux = () => {
  //   let coluna = this.state.coluna
  //   let comparacao = this.state.comparacao
  //   let numero = this.state.numero
  //   this.valorNumerico1(coluna, comparacao, numero)
  // }

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

  handleNumero(event) {
    this.setState({
      numero: event.target.value,
    });
  }

  render() {
    const { inputName1, valorNumerico1 } = this.props;
    const { numero, comparacao, coluna } = this.state;
    const array = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const comp = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <div>
        <form>
          <label htmlFor="inputTexto">Filtre por nome</label>
          <input type="text" name="inputTexto" data-testid="name-filter" onChange={inputName1} />
        </form>
        <form>
          <select value={coluna} onChange={this.handleColuna} data-testid="column-filter">
            {array.map((e) => <option value={e}>{e}</option>)}
          </select>
          <select value={comparacao} onChange={this.handleCom} data-testid="comparison-filter">
            {comp.map((e) => <option value={e}>{e}</option>)}
          </select>
          <label htmlFor="numero">Digite o numero desejado:
            <input name="numero" type="number"
              value={numero}
              onChange={this.handleNumero} data-testid="value-filter"
            />
          </label>
          <button type="button" onClick={() => valorNumerico1(coluna, comparacao, numero)}>Pesquise
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  inputName1: PropTypes.func.isRequired,
  valorNumerico1: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  inputName1: (event) => dispatch(inputName(event)),
  valorNumerico1: (numero, coluna, comparacao) =>
    dispatch(valorNumerico(numero, coluna, comparacao)),
  // tratarData1: (coluna, comparacao, numero, data) =>
  //   dispatch(trataData(coluna, comparacao, numero, data))
});

const mapStateToProps = (state) => ({ data: state.reducer.data });

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
