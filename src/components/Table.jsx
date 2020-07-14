import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css';
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

Table.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(Table);
