import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { handleNameFilter } from '../../redux/actions/index';

const NameFilter = (props) => (
  <input
    data-testid="name-filter"
    type="text"
    value={props.input}
    onChange={(e) => props.handleNameFilter(e.target.value)}
  />
);

NameFilter.propTypes = {
  handleNameFilter: PropTypes.func,
  input: PropTypes.string,
};

NameFilter.defaultProps = {
  handleNameFilter: () => console.log('faltando função aqui, manda uma'),
  input: '',
};

const mapStateToProps = (state) => ({
  input: state.filters.filterByName.name,
});

export default connect(mapStateToProps, { handleNameFilter })(NameFilter);
