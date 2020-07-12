import React, { Component } from "react";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      column: "",
      comp: "",
    };
  }

  // Setando o número digitado como valor do state
  selectNum(e) {
    this.setState({ num: e.target.value });
  }

  // Setando a chave selecionada como valor do state
  selectChange(e, key) {
    const { value } = e.target;
    this.setState({ [key]: value });
  }

  // setando função para criar colunas a serem filtradas
  setColumns() {
    const columns = [
      "select",
      "population",
      "orbital_period",
      "diameter",
      "rotation_period",
      "surface_water",
    ];
    return (
      <select
        onChange={(e) => this.selectChange(e, "column")}
        data-testid="column-filter"
        value={this.state.column}
      >
        {columns.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  // setando função para criar segunda coluna de filtro
  setComp() {
    const comparation = ["Select", "maior que", "menor que", "igual a"];
    return (
      <select
        onChange={(e) => this.selectChange(e, "comparation")}
        data-testid="comparison-filter"
        value={this.state.comp}
      >
        {comparation.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.setColumns()}
          {this.setComp()}
          <input
            type="number"
            data-testid="value-filter"
            value={this.state.num}
            onChange={(e) => this.selectNum(e)}
            placeholder="set a number"
          ></input>
          <button type="submit" data-testid="button-filter">
            Compare
          </button>
        </form>
      </div>
    );
  }
}

export default Filters;
