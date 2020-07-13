import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncActionDataFetch } from '../actions';

class Filters extends Component {
  componentDidMount() {
    const { dataFetch } = this.props;
    dataFetch('https://swapi-trybe.herokuapp.com/api/planets/');
  }

  render() {
    return (
      <div>
        <label htmlFor="filter-planets">Procurar </label>
        <input type="text" id="filter-planets" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dataFetch: (url) => dispatch(asyncActionDataFetch(url)),
});

export default connect(null, mapDispatchToProps)(Filters);

Filters.propTypes = {
  dataFetch: PropTypes.func.isRequired,
};
