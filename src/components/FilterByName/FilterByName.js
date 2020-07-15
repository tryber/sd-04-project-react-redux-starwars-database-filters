import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../../actions';

class FilterByName extends React.Component {
  render() {
    return (
      <input
        type="text"
        data-testid="name-filter"
        onChange={(e) => this.props.filterByName(e.target.value)}
      />
    );
  }
}

export default connect(null, { filterByName })(FilterByName);

FilterByName.propTypes = {
  filterByName: PropTypes.func.isRequired,
};
