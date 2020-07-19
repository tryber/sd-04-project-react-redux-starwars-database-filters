import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../../actions/FiltersActions';

const Filters = ({ filterByName }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search by Name"
          onChange={(e) => filterByName(e.target.value)}
        />
      </form>
    </div>
  );
};

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (text) => dispatch(filterByName(text)),
});

export default connect(null, mapDispatchToProps)(Filters);
