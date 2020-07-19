import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../../actions/FiltersActions';

const Filters = ({ searchByName }) => (
  <div>
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search by Name"
        onChange={(e) => searchByName(e.target.value)}
      />
    </form>
  </div>
);

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  searchByName: (text) => dispatch(filterByName(text)),
});

export default connect(null, mapDispatchToProps)(Filters);

Filters.propTypes = {
  searchByName: PropTypes.func.isRequired,
};
