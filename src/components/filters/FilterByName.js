import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByText } from '../../actions/actionCreators';

class FilterByName extends Component {
  render() {
    const { name } = this.props;
    // console.log(this.props);
    return (
      <input
        type="text"
        data-testid="name-filter"
        value={name}
        onChange={(e) => this.props.filterByText(e.target.value)}

      />
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});


export default connect(mapStateToProps, { filterByText })(FilterByName);

FilterByName.propTypes = {
  name: PropTypes.string.isRequired,
  filterByText: PropTypes.func.isRequired,
};
