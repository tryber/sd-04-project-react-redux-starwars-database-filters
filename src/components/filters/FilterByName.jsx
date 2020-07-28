import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../../action';

class FilterByName extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Pesquise um planeta"
          onChange={(event) => this.props.filterByName(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
});

export default connect(null, mapDispatchToProps)(FilterByName);
