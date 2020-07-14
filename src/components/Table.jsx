import React, { Component } from 'react';
import './Table.css';
import { planetsResponseApi } from '../Actions';
import { connect } from 'react-redux';
import linhas from './Linhas';

class Table extends Component {
  componentDidMount() {
    const { getSwapi } = this.props;
    getSwapi();
  }

  render() {
    const { data, isFetching } = this.props;
    console.log(data);
    if (isFetching) return <span>...Loading</span>;
    const colunas = Object.keys(data[0]).filter((campo) => campo !== 'residents');
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

const mapDispatchToProps = (dispatch) => ({
  getSwapi: () => dispatch(planetsResponseApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
