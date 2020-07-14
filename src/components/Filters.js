import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncActionDataFetch, actionNameFilter } from '../actions';

class Filters extends Component {
  componentDidMount() {
    const { dataFetch } = this.props;
    dataFetch('https://swapi-trybe.herokuapp.com/api/planets/');
  }

  render() {
    const { nameChange } = this.props;
    return (
      <div>
        <label htmlFor="filter-planets">Procurar </label>
        <input
          type="text" id="filter-planets" data-testid="name-filter"
          onChange={(e) => nameChange(e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dataFetch: (url) => dispatch(asyncActionDataFetch(url)),
  nameChange: (text) => dispatch(actionNameFilter(text)),
});

export default connect(null, mapDispatchToProps)(Filters);

Filters.propTypes = {
  dataFetch: PropTypes.func.isRequired,
};
