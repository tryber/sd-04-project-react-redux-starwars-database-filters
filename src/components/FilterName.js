import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class FilterName extends Component {
  render() {
    const { changeName } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Search"
          onChange={(event) => changeName(event.target.value)}
        />
      </div>
    );
  }
}

FilterName.propTypes = {
  changeName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  changeName: (planetName) => dispatch(filterByName(planetName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
