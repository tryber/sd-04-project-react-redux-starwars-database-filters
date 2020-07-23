import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputName, valorNumerico, trataData } from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coluna: "",
      comparacao: "",
      numero: "",
    }
    this.handleColuna = this.handleColuna.bind(this);
    this.handleComparacao = this.handleComparacao.bind(this);
    this.handleNumero = this.handleNumero.bind(this);
    // this.handleRedux = this.handleRedux.bind(this);
  }
  
  // handleRedux = () => {
  //   let coluna = this.state.coluna
  //   let comparacao = this.state.comparacao
  //   let numero = this.state.numero
  //   this.valorNumerico1(coluna, comparacao, numero)
  // }

  handleColuna = (event) => {
    this.setState({
      coluna: event.target.value
    })
  }

  handleComparacao = (event) => {
    this.setState({
      comparacao: event.target.value
    })
  }

  handleNumero = (event) => {
    this.setState({
      numero: event.target.value
    })
  }

  render() {
    const { inputName1, valorNumerico1, tratarData1, data } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="inputTexto">Filtre por nome</label>
          <input type="text" name="inputTexto" data-testid="name-filter" onChange={inputName1} />
        </form>
        <form>
          <label>
            <select value={this.state.coluna} onChange={this.handleColuna} data-testid="column-filter">
              <option selected value="">Escolha a coluna</option>
              <option value="population">Population</option>
              <option value="orbital_period">Orbital period</option>
              <option value="diameter">Diameter</option>
              <option value="rotation_period">Rotation period</option>
              <option value="surface_water">Surface water</option>
            </select>
          </label>
          <label>
            <select value={this.state.comparacao} onChange={this.handleComparacao} data-testid="comparison-filter">
              <option selected value="">Escolha comparacao</option>
              <option value="maior">Maior que</option>
              <option value="menor">Menor que</option>
              <option value="igual">Igual a</option>
            </select>
          </label>
          <label>
            Digite o numero desejado:
            <input type="number" value={this.state.numero} onChange={this.handleNumero} data-testid="value-filter" />
          </label>
          <button type="button" onClick={() => valorNumerico1(this.state.coluna,
            this.state.comparacao,
            this.state.numero)}
          >
            {/* , tratarData1(this.state.coluna, this.state.comparacao, this.state.numero, data) */}
            Pesquise
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  inputName1: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  inputName1: (event) => dispatch(inputName(event)),
  valorNumerico1: (numero, coluna, comparacao) =>
    dispatch(valorNumerico(numero, coluna, comparacao)),
  // tratarData1: (coluna, comparacao, numero, data) =>
  //   dispatch(trataData(coluna, comparacao, numero, data))
});

const mapStateToProps = (state) => ({ data: state.reducer.data })

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
