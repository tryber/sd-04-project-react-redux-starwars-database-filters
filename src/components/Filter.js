import React from 'react';
import PropTypes, { string, object } from 'prop-types';
import { connect } from 'react-redux';
import { filterPlanetByNumber } from '../actions/filterPlanetByName';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };

    this.getFilterInfo = this.getFilterInfo.bind(this);
    /* this.handleChange = this.handleChange.bind(this); */
    this.filterColumns = this.filterColumns.bind(this);
  }

  getFilterInfo(e) {
    e.preventDefault();
    const { dispatchFilterPlanetByNumber } = this.props;
    dispatchFilterPlanetByNumber(this.state);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  filterColumns() {
    const { value, columns } = this.props;
    let filteredColumns = [...columns];
    if (value.length > 0) {
      value.forEach(({ column }) => {
        filteredColumns = filteredColumns.filter((select) => select !== column);
      });
    }
    return filteredColumns;
  }

  renderSelect(columns, testId, name) {
    return (
      <select
        onChange={(e) => this.handleChange(e)}
        data-testid={testId}
        name={name}
      >
        <option defaultChecked>{name}</option>
        {columns.map((column) => (
          <option
            key={column}
            value={column}
          >
            {column}
          </option>
        ))}
      </select>
    );
  }

  render() {
    const filteredColumns = this.filterColumns();
    const { comparisons } = this.props;
    return (
      <div className="numeric-filter">
        <form onSubmit={(e) => this.getFilterInfo(e)}>
          {this.renderSelect(filteredColumns, 'column-filter', 'column')}
          {this.renderSelect(comparisons, 'comparison-filter', 'comparison')}
          <input
            onChange={(e) => this.handleChange(e)}
            data-testid="value-filter"
            name="value"
            type="number"
          />
          <button data-testid="button-filter" type="submit">Add Filter</button>
        </form>
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.arrayOf(object).isRequired,
  dispatchFilterPlanetByNumber: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(string).isRequired,
  comparisons: PropTypes.arrayOf(string).isRequired,
};

const mapStateToProps = (state) => ({
  value: state.filters.filterByNumericValues,
  columns: state.filters.columns,
  comparisons: state.filters.comparisons,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFilterPlanetByNumber: (filterData) => dispatch(filterPlanetByNumber(filterData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
