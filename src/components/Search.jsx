import React from 'react';
import './Search.css';
import { connect } from 'react-redux';
import { filteredName } from '../Actions';

// deve ter conexão com a store
class Search extends React.Component {
  render() {
    const { filteredName } = this.props;
    return (
      <div>
        <label className="labels" htmlFor="search">
          Digite o nome:
        </label>
        <input
          className="serachBar"
          id="search"
          data-testid="name-filter"
          placeholder="Search"
          onChange={(event) => filteredName(event.target.value)}
        />
      </div>
    );
  }
}

const mapToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filteredName: (name) => dispatch(filteredName(name)),
});

export default connect(mapToProps, mapDispatchToProps)(Search);
