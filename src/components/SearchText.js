import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchTextAction } from '../actions/index';

export class SearchText extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <label htmlFor="searchText">Procurar:</label><br />
        <input
          type="text"
          data-testid="name-filter"
          onChange={(event) => text(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  text: searchTextAction,
};

SearchText.propTypes = {
  text: PropTypes.string.isRequired,
};


export default connect(null, mapDispatchToProps)(SearchText);
