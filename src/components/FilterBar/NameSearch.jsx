import React from 'react';
import { connect } from 'react-redux';
import { filterName } from '../../actions/filter';

const NameSearch = (props) => {
  const { filteredName } = props;

  // const handleChange = (e) => {
  //   filteredName(e.target.value);
  // };

  return (
    <div>
      <input
        data-testid="name-filter"
        name="name-filter"
        id="name-filter"
        type="text"
        onChange={(e) => filteredName(e.target.value)}
      />
      <label htmlFor="name-filter">Find for planet name</label>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filteredName: (name) => dispatch(filterName(name)),
});

export default connect(null, mapDispatchToProps)(NameSearch);
