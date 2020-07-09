import React, { Component } from 'react';
import fetchRequestApi from '../actions/getApi';
import { connect } from 'react-redux';

class Table extends Component {
  componentDidMount() {
    const { getRequestFromApi } = this.props;
    getRequestFromApi();
  }

  render() {
    const { isLoading, data } = this.props;
    console.log(isLoading, data);
    return (
      <div>
        <table>
          <tr>
            <td>Nome</td>
          </tr>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRequestFromApi: () => dispatch(fetchRequestApi()),
});

const mapStateToProps = (state) => ({
  isLoading: state.reducerRequestApi.isLoading,
  data: state.reducerRequestApi.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
