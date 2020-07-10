import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import fetchApiRequisition from '../actions';
import './Table.css';

class Table extends Component {
  componentDidMount() {
    this.props.api('planets');
  }

  render() {
    const { isFetching, dados } = this.props;
    const chaves = 
      (dados.length !== 0) ? Object.keys(dados[0]).filter((keys) => keys !== 'residents') : [];
    if (isFetching) return <h1>Loading...</h1>;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              {chaves.map((chave, index) => (<th key={index}>{chave}</th>))}
            </tr>
          </thead>
          <tbody>
            {dados.map((planet, index) => (
              <tr key={index}>
                {chaves.map((chave, _index) => (
                  <td key={`${chave} ${index}`}>{planet[chave]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.reducer.isFetching,
  dados: state.reducer.dados,
});

const mapDispatchToProps = (dispatch) => ({
  api: (endpoint) => dispatch(fetchApiRequisition(endpoint)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

propTypes.Table = {
  dados: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  api: propTypes.func.isRequired,
}