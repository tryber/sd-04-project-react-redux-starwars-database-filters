import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { filterByNameAct } from '../actions/index';
// import './Search.css';

// deve ter conexão com a store
const Search = (props) => {
  const { filterByName } = props;
  return (
    <div>
      <label className="labels" htmlFor="search">
        Digite o nome:
      </label>
      <input
        className="search-bar"
        id="search"
        data-testid="name-filter"
        placeholder="Search"
        // value={}
        onChange={(event) => filterByName(event.target.value)}
      />
    </div>
  );
};

Search.propTypes = {
  filterByName: PropTypes.func.isRequired,
};

// const mapToProps = (state) => ({
//   name: state.filters.filterByName.name,
// });

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByNameAct(name)),
});

export default connect(null, mapDispatchToProps)(Search);
