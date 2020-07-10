import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filterPlanets from '../actions/filterPlanets';

class Header extends Component {
  render() {
    const { setFilter, data } = this.props;
    return (
      <div>
        <input data-testid="name-filter" type="text" onChange={(e) => setFilter(e, data)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (e, data) => dispatch(filterPlanets(data, e.target.value)),
});

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
  // setDataFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
