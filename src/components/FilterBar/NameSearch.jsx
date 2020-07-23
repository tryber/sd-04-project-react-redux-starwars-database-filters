import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterName } from '../../actions/filter';

const NameSearch = (props) => {
  const { filteredName } = props;
  return (
    <form>
      <h3>Filter for planet name</h3>
      {/* <label htmlFor="name-filter">Find for planet name: </label> */}
      <input
        data-testid="name-filter"
        name="name-filter"
        id="name-filter"
        type="text"
        placeholder="type here..."
        onChange={(e) => filteredName(e.target.value.toLowerCase())}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filteredName: (name) => dispatch(filterName(name)),
});

NameSearch.propTypes = {
  filteredName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NameSearch);
