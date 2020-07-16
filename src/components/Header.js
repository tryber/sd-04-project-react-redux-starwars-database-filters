import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSearchTerm } from '../actions';
import Filters from './Filters';

class Header extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(e) => onChange(e.target.value)}
        />
        <Filters />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(changeSearchTerm(value)),
});

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
