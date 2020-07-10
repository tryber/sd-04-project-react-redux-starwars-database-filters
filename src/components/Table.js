import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import fetchApiRequisition from '../actions';

class Table extends Component {
  componentDidMount() {
    this.props.api('planets');
  }

  render() {
    const { isFetching, dados } = this.props;
    if (isFetching) return <h1>Loading...</h1>;
    return (
      <div>
        
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

Table.propTypes = {
  isFetching: propTypes.bool(),
  dados: propTypes.array(),
  api: propTypes.func(),
};
