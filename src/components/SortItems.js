import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortByColumn } from '../actions/dataAction';

class SortItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e, field) {
    this.setState({ [field]: e.target.value });
  }

  onClick() {
    const { column, sort } = this.state;
    const { sortItems } = this.props;
    sortItems(column, sort);
  }

  render() {
    const { header } = this.props;
    const headers = Object.keys(header[0]);
    headers.splice(9, 1);
    return (
      <div>
        <select
          data-testid="column-sort"
          onChange={(e) => this.onChange(e, 'column')}
          value={this.state.column}
        >
          {headers.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="sort">
          <input
            defaultChecked
            data-testid="column-sort-input"
            type="radio"
            name="sort"
            value="ASC"
            onChange={(e) => this.onChange(e, 'sort')}
          />
          ASC
        </label>
        <label htmlFor="sort">
          <input
            data-testid="column-sort-input"
            type="radio"
            name="sort"
            value="DESC"
            onChange={(e) => this.onChange(e, 'sort')}
          />
          DESC
        </label>
        <button data-testid="column-sort-button" onClick={this.onClick}>
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  header: state.planetReducer.planets.planets,
});

const mapDispatchToProps = (dispatch) => ({
  sortItems: (column, sort) => dispatch(sortByColumn(column, sort)),
});

SortItems.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      population: PropTypes.string,
      climate: PropTypes.string,
      diameter: PropTypes.string,
      gravity: PropTypes.string,
      orbital_period: PropTypes.string,
      rotation_period: PropTypes.string,
      surface_water: PropTypes.string,
      terrain: PropTypes.string,
    })
  ).isRequired,
  sortItems: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortItems);
