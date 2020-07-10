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
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  data: state.data,
});

export default connect(mapStateToProps, null)(Table);
