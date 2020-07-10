import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setInputFilter } from '../actions/filterPlanets';

class Header extends Component {
  componentDidMount() {}

  render() {
    const { setInput } = this.props;
    return (
      <div>
        <input type="text" onChange={setInput} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
  filteredData: state.filterReducer.filteredData,
});

const mapDispatchToProps = (dispatch) => ({
  setInput: (e) => dispatch(setInputFilter(e.target.value)),
  // setDataFilter: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setInput: PropTypes.func.isRequired,
  // setDataFilter: PropTypes.func.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // filteredData: PropTypes.array.isRequired,
};
