import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchRequestApi from '../actions';

class Table extends Component {
  componentDidMount() {
    console.log('montou!');
    const { getRequestFromApi } = this.props;
    getRequestFromApi();
  }

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
  data: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  getRequestFromApi: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  getRequestFromApi: () => dispatch(fetchRequestApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
