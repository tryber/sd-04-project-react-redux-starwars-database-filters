import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions/index';

class FilterName extends React.Component {
  render() {
    return (
      <div>
        <input
        type="text"
        data-testid="name-filter"
        placeholder="Pesquise o Planeta"
        onChange={(e) => this.props.filterPlanetsByName(e.target.value.toLowerCase())}
        />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  filterPlanetsByName: (value) => dispatch(filterByName(value)),
});

FilterName.propTypes = {
  filterPlanetsByName: PropTypes.func,
};

FilterName.defaultProps = {
  filterPlanetsByName: null,
};

export default connect(null, mapDispatchToProps)(FilterName);
