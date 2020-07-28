import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowFilters from './ShowFilters';
import { saveFilterData } from '../actions';

class FilterForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      number: '',
    };
    this.filterOptions = this.filterOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { submitFilterData } = this.props;
    const { column, comparison, number } = this.state;
    submitFilterData(column, comparison, number);
  }

  filterOptions() {
    const { filterByNumericValues, options } = this.props;
    let newOptions = [...options];
    if (filterByNumericValues.length >= 1) {
      filterByNumericValues.forEach(({ column }) => {
        newOptions = newOptions.filter((option) => option !== column);
      });
    }
    return newOptions;
  }

  renderSelect(options, testId, name) {
    return (
      <select onChange={(e) => this.handleChange(e)} data-testid={testId} name={name}>
        <option defaultChecked>{name}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  render() {
    const newOptions = this.filterOptions();
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {this.renderSelect(newOptions, 'column-filter', 'column')}
          {this.renderSelect(
            ['maior que', 'menor que', 'igual a'],
            'comparison-filter',
            'comparison',
          )}
          <input
            onChange={(e) => this.handleChange(e)}
            data-testid="value-filter"
            type="number"
            name="number"
          />
          <button type="submit" data-testid="button-filter">
            acionar filtro
          </button>
        </form>
        <ShowFilters />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
  options: state.filters.options,
});

const mapDispatchToProps = (dispatch) => ({
  submitFilterData: (column, comparison, number) =>
    dispatch(saveFilterData(column, comparison, number)),
});

FilterForms.propTypes = {
  submitFilterData: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForms);
