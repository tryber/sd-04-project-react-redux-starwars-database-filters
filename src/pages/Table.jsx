import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Tabela from '../components/Tabela';

class Table extends Component {
  render() {
    const { isLoading, data } = this.props;
    if (isLoading) return <span>L O A D I N G . . .</span>;
    return (
      <div>
        <Header />
        <div>
          <table>
            <thead>
              {Object.keys(data.results[0]).map((e, index) => (
                <th key={index}> {e} </th>
              ))}
            </thead>
            <tbody>
              {data.results.map((planet, index) => (
                <Tabela planet={planet} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.reducerRequestApi.isLoading,
  data: state.reducerRequestApi.data,
});

export default connect(mapStateToProps, null)(Table);
