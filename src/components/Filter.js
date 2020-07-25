import React from 'react';
import PropTypes, { string, object } from 'prop-types';
import { connect } from 'react-redux';
import { filterPlanetByNumber } from '../actions/filterPlanetByName';

const Option = ({ value, children }) => <option value={value}>{children}</option>;

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
    const { column, comparison, value } = this.state;
    console.log(column, comparison, value);
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

  render() {
    const { comparisons } = this.props;
    return (
      <div className="numeric-filter">
        <form onSubmit={(e) => this.getFilterInfo(e)}>
          <select onChange={(e) => this.handleChange(e)} data-testid="column-filter" name="column" id="column">
            <option value="defaultChecked">colunas</option>
            {this.filterColumns().map((column) => (
              <Option key={column} value={column}>{column}</Option>
            ))}
          </select>

          <select onChange={(e) => this.handleChange(e)} data-testid="comparison-filter" name="comparison" id="comparison">
            <option value="defaultChecked">comparação</option>
            {comparisons.map((comparison) => (
              <Option key={comparison} value={comparison}>{comparison}</Option>
            ))}
          </select>

          <input onChange={(e) => this.handleChange(e)} data-testid="value-filter" name="value" type="number" />

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

Option.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
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
