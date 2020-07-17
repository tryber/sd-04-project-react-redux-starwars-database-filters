import React from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../action/actionFilter';

const FilterTable = ({ filter }) => {
  return (
    <div>
      <form>
        <label>Filter by name:</label>
        <input
          data-testid='name-filter'
          type='text'
          onChange={(e) => filter(e.target.value)}
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filter: (text) => dispatch(filterTable(text)),
});

export default connect(null, mapDispatchToProps)(FilterTable);
