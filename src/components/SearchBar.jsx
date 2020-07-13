import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumbers } from '../actions/index';
import FilterName from './FilterName';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateColumn = this.updateColumn.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.onClick = this.onClick.bind(this);
  }


  getColumns() {
    const select = this.updateColumn();
    return (
      <select
        value={this.state.column}
        data-testid="column-filter"
        onChange={(event) => this.handleChange(event, 'column')}
      >
        {select.map((option) => (
          <option value={option} key={option}>{option}</option>),
        )}
      </select>
    );
  }

  handleChange(event, key) {
    this.setState({ [key]: event.target.value });
  }

  onClick() {
    const { value, column, comparison } = this.state;
    this.props.filterByNumbers( column, comparison, value );
    this.setState({ value: '', column: '', comparison: '' });
  }

  updateColumn() {
    const { valueFilters } = this.props;
    const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const stateColumns = valueFilters.map(({ column }) => column);
    return [
      '',
      ...columns.filter((option) => !stateColumns.includes(option))];
  }


  render() {
    const comparison = ['', 'maior que', 'igual a', 'menor que'];
    return (
      <div className="filter_container">
        <FilterName />
        {this.getColumns()}
        <select
          value={this.state.comparison}
          data-testid="comparison-filter"
          onChange={(event) => this.handleChange(event, 'comparison')}
        >
          {comparison.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <input
          type="number"
          value={this.state.value}
          data-testid="value-filter"
          onChange={ (e) => this.setState({value: e.target.value}) }
        />
        <button data-testid="button-filter" onClick={() => this.onClick()}>Filter</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  valueFilters: state.filters.filterByNumericValues,
});

const mapsDispatchToProps = (dispatch) => ({
  filterByNumbers: (column, comparison, value) =>
    dispatch(filterByNumbers(column, comparison, value)),
});

SearchBar.propTypes = {
  valueFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  filterByNumbers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapsDispatchToProps)(SearchBar);
