import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
  render() {
    const { isFetching, data } = this.props;
    const chaves =
      (data.length !== 0) ? Object.keys(data[0]).filter((keys) => keys !== 'residents') : [];
    if (isFetching) return <h1>Loading...</h1>;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              {chaves.map((chave) => (<th key={chave}>{chave}</th>))}
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={`${planet} 1`}>
                {chaves.map((chave) => (
                  <td key={`${chave} 2`}>{planet[chave]}</td>
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
  data: state.reducer.data,
  searchName: state.reducer.filters.filterByName.name,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  data: PropTypes.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
