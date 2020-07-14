/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByNumericValues } from '../actions/filterByNumericValues';

class FilterSelectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.functionforCC = this.functionforCC.bind(this);
  }

  handleFilterChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  columnFilterElement() {
    const { filters } = this.props;
    const columnFilter = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    let columnFilterElement = columnFilter;
    filters.forEach(({ column }) => {
      columnFilterElement = columnFilterElement.filter((element) => element !== column);
    });
    return columnFilterElement;
  }

  functionforCC() {
    const { column, comparison, value } = this.state;
    const { dispatchNumValues } = this.props;
    dispatchNumValues(column, comparison, value);
  }

  render() {
    return (
      <div>
        <select onChange={(event) => this.handleFilterChange(event, 'column')} data-testid="column-filter">
          <option></option>
          {this.columnFilterElement().map(
            (option) => (<option key={option} value={option}>{option}</option>),
          )}
        </select>
        <select
          onChange={(event) => this.handleFilterChange(event, 'comparison')}
          data-testid="comparison-filter"
        >
          <option></option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          onChange={(event) => this.handleFilterChange(event, 'value')}
          data-testid="value-filter"
          type="number"
        />
        <button onClick={() => this.functionforCC()} type="button" data-testid="button-filter">
          Filters
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchNumValues: (column, comparison, value) => dispatch(
    filterByNumericValues(column, comparison, value),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelectors);

FilterSelectors.propTypes = {
  dispatchNumValues: propTypes.func.isRequired,
  filters: propTypes.arrayOf(propTypes.object).isRequired,
};
