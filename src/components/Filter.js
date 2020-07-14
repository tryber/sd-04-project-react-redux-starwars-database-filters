import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterName } from '../actions/index';

export class Filter extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          data-testid='name-filter'
          onChange={(event) => (this.props.inputText(event.target.value))}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputText: e => dispatch(filterName(e)),
});

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
  inputText: PropTypes.string.isRequired,
};
