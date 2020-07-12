import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveFilterData } from '../actions';
import ShowFilters from './ShowFilters';

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
    // console.log(event.target.column.value);
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

  render() {
    const newOptions = this.filterOptions();
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <select
            onChange={(e) => this.handleChange(e)}
            data-testid="column-filter"
            name="column"
          >
            <option defaultValue="" selected disabled hidden>Choose here</option>
            {newOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          <select
            onChange={(e) => this.handleChange(e)}
            data-testid="comparison-filter"
            name="comparison"
          >
            <option defaultValue selected disabled hidden>Choose here</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input onChange={(e) => this.handleChange(e)} data-testid="value-filter" type="number" name="number" />
          <button type="submit" data-testid="button-filter">acionar filtro</button>
        </form>
        <ShowFilters />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
  options: state.options,
});

const mapDispatchToProps = (dispatch) => ({
  submitFilterData: (column, comparison, number) => (
    dispatch(saveFilterData(column, comparison, number))
  ),
});

FilterForms.propTypes = {
  submitFilterData: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForms);
