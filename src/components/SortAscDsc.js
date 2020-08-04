import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortBy } from '../actions/actionFilter';

class SortAscDsc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
    this.sortInput = this.sortInput.bind(this);
  }

  sortInput(value) {
    return (
      <label htmlFor="sort">
        <input
          type="radio"
          name="sort"
          data-testid="column-sort-input"
          value={value}
          onChange={(e) => this.setState({ sort: e.target.value })}
        />
        {value}
      </label>
    );
  }

  render() {
    const listColumns = [
      'name',
      'climate',
      'gravity',
      'terrain',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const { sortByOrder } = this.props;
    return (
      <div>
        <select
          name="select"
          data-testid="column-sort"
          defaultValue="DEFAULT"
          onChange={(e) => this.setState({ column: e.target.value })}
        >
          <option value="DEFAULT" disabled>Column</option>
          {listColumns.map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
        </select>
        {this.sortInput('ASC')}
        {this.sortInput('DESC')}
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={() => sortByOrder(this.state)}
        >
          Order
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sortByOrder: (order) => dispatch(sortBy(order)),
});

SortAscDsc.propTypes = {
  sortByOrder: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SortAscDsc);
