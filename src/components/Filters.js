import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterBy, removeFilterClear } from '../actions/actionFilter';
import SortAscDsc from './SortAscDsc';

const valueOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const selectedColumns = (dataFilter) => {
  if (dataFilter.length === 0) return valueOptions;
  const usedValues = dataFilter.map((value) => value.column);
  return valueOptions.filter((value) => !usedValues.includes(value));
};

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
    };
    this.set = this.set.bind(this);
  }

  set(e) {
    const { name, value } = e.nativeEvent.target;
    this.setState({ [name]: value });
  }

  filterColumn() {
    const { filterByNumericValues } = this.props;
    return (
      <div>
        <select
          onChange={(e) => this.set(e)}
          name="column"
          data-testid="column-filter"
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled>
            Column
          </option>
          {selectedColumns(filterByNumericValues).map((arg) => (
            <option key={arg} value={arg} name={arg} id={arg}>
              {arg}
            </option>
          ))}
        </select>
      </div>
    );
  }

  filterComparison() {
    return (
      <div>
        <select
          onChange={(e) => this.set(e)}
          name="comparison"
          data-testid="comparison-filter"
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled>
            Comparison
          </option>
          <option value="maior que" name="maior_que">
            maior que
          </option>
          <option value="menor que" name="menor_que">
            menor que
          </option>
          <option value="igual a" name="igual_a">
            igual a
          </option>
        </select>
      </div>
    );
  }

  filterValue() {
    return (
      <div>
        <label htmlFor="value_number">
          <input
            data-testid="value-filter"
            name="value"
            id="value_number"
            type="number"
            onChange={(e) => this.set(e)}
          />
        </label>
      </div>
    );
  }

  filtersRender() {
    const { filterByNumericValues, clearFilter } = this.props;
    if (!filterByNumericValues) return <div />;
    return filterByNumericValues.map(({ column, comparison, value }) => (
      <div key={column} data-testid="filter">
        <span>{`${column} - `}</span>
        <span>{`${comparison} - `}</span>
        <span>{`${value} `}</span>
        <button type="button" onClick={() => clearFilter(column)}>
          X
        </button>
      </div>
    ));
  }

  submitFilter(e) {
    const { submitValues } = this.props;
    e.preventDefault();
    submitValues(this.state);
    this.setState({ value: '', column: '', comparison: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitFilter(e)}>
          {this.filterColumn()}
          {this.filterComparison()}
          {this.filterValue()}
          <button type="submit" data-testid="button-filter">
            Filter
          </button>
        </form>
        <SortAscDsc />
        {this.filtersRender()}
      </div>
    );
  }
}

Filters.propTypes = {
  submitValues: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
    }),
  ),
};

Filters.defaultProps = {
  filterByNumericValues: [],
};

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  submitValues: (values) => dispatch(filterBy(values)),
  clearFilter: (column) => dispatch(removeFilterClear(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
