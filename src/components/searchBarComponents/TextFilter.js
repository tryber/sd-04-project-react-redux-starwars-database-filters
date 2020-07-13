import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchText } from '../../actions';

class TextFilter extends Component {
  render() {
    return (
      <div className="textInput">
        <label htmlFor="search-text">
          Name Search:
          <br />
          <input className="input" type="text" data-testid="name-filter"
            onChange={(e) => this.props.searchText(e)}
          />
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchText: (event) => dispatch(searchText(event.target.value)),
});

export default connect(null, mapDispatchToProps)(TextFilter);

TextFilter.propTypes = {
  searchText: PropTypes.func.isRequired,
};
