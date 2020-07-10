import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { isLoading, data } = this.props;
    console.log(isLoading, data);
    return (
      <div>
        <table>
          <td>Oi</td>
          {data.map((e, index) => (
            <tr key={index}>{e.name}</tr>
          ))}
        </table>
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
