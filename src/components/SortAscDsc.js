import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SortAscDsc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Sort By:
          <select data-testid='column-sort'>
            <option />
          </select>
        </label>
        <label>
          <input data-testid='column-sort-input' type="radio" value="ASC" />
          ASC
        </label>
        <label>
          <input data-testid='column-sort-input' type="radio" value="DSC" />
            DSC
        </label>
        <button data-testid='column-sort-button' type="submit">Sort</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetReducer.data,
});

export default connect(mapStateToProps)(SortAscDsc);
