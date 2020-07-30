import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeInputCompAct, filterCompAct } from '../actions/index';

class Comparador extends React.Component {
  static CreateOptions() {
    return {
      first: [
        '',
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ],
      second: ['', 'maior que', 'menor que', 'igual a'],
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.comparisonMethod = this.comparisonMethod.bind(this);
    this.inputMethod = this.inputMethod.bind(this);
    this.filterMethod = this.filterMethod.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  comparisonMethod() {
    const { handleComparisor } = this.props;
    const { column, comparison, value } = this.state;
    handleComparisor(column, comparison, value);
  }

  inputMethod(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  filterMethod(options) {
    const { filterByNumericValues } = this.props;
    if (filterByNumericValues.length === 0) {
      return options;
    }
    let newOptions = [...options];
    filterByNumericValues.forEach((filter) => {
      newOptions = newOptions.filter((option) => option !== filter.column);
    });
    return newOptions;
  }

  renderSelect(filteredOptions, test, name, value) {
    return (
      <select
        name={name}
        onChange={this.inputMethod}
        data-testid={test}
        value={value}
      >
        {filteredOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  renderSecondSelect(filteredOptions, test, name, value) {
    return (
      <select
        name={name}
        onChange={this.inputMethod}
        data-testid={test}
        value={value}
      >
        {filteredOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  render() {
    const options = Comparador.CreateOptions();
    const newOptions = this.filterMethod(options.first);
    const { column } = this.state;
    return (
      <div>
        {this.renderSelect(newOptions, 'column-filter', 'column', column)}
        {this.renderSecondSelect(options.second, 'comparison-filter', 'comparison')}
        <input
          data-testid="value-filter"
          type="text"
          name="value"
          onChange={this.inputMethod}
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={this.comparisonMethod}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

Comparador.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(Object).isRequired,
  handleComparisor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.filters.data,
  inputText: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  handleComparisor: (column, comparison, value) => (
    dispatch(filterCompAct(column, comparison, value))
  ),
  changeInputComparisor: (event) => dispatch(changeInputCompAct(event.target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comparador);
