import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchName } from '../actions/actionFilter';

const Search = ({
  search, data, term,
}) => {
  function handleSearchTerm(e) {
    const { value } = e.nativeEvent.target;
    const modifyData = data.filter(
      (planet) => planet.name.toLowerCase().indexOf(value.toLowerCase()) !== -1,
    ).map((planet) => planet);

    return search(modifyData, value);
  }

  return (
    <div>
      <label>
          Search:
        <input
          data-testid="name-filter"
          onChange={(e) => handleSearchTerm(e)}
          type="text"
          value={term}
        />
      </label>
    </div>
  );
};

Search.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  search: PropTypes.func.isRequired,
  term: PropTypes.string,
};

Search.defaultProps = {
  data: [],
  term: '',
};

const mapStateToProps = (state) => ({
  term: state.filters.filterByName.name,
  data: state.planetReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  search: (data, name) => dispatch(searchName(data, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
