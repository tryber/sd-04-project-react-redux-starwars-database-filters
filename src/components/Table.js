import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchApiRequisition from '../actions';

class Table extends Component {
  componentDidMount() {
    this.props.api('planets');
  }

  render() {
    return (
      <div>
        <h1>ok</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  dados: state.dados,
});

const mapDispatchToProps = (dispatch) => ({
  api: (endpoint) => dispatch(fetchApiRequisition(endpoint)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);