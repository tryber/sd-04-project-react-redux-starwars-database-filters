import React, { Component } from 'react';
import './Table.css';
import { planetsResponseApi } from '../Actions';
import { connect } from 'react-redux';
import linhas from './Linhas';

class Table extends Component {


  render() {
    const { data, isFetching } = this.props;
    if (isFetching) return <span>...Loading</span>;
    const planeta1 = data;
    const colunas = Object.keys(planeta1[0]).filter((campo) => campo !== 'residents');
    return (
      <div>
        <table className="tabela">
          <thead>
            <tr>
              {colunas.map((coluna) => (
                <th>{coluna}</th>
              ))}
            </tr>
          </thead>
          <tbody>{data.map((linhaPlaneta) => linhas(linhaPlaneta))}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(Table);
