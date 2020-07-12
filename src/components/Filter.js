import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { numericalFilter } from '../actions/filterActions';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterByNumericValues: {
        column: '',
        comparison: '',
        value: '',
      },
      colonumItems: [
        // Could be defined as props?
        'Coluna',
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ],
      comparisonItems: ['Comparação', 'maior que', 'igual a', 'menor que'],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      filterByNumericValues: {
        ...this.state.filterByNumericValues,
        [name]: value,
      },
    });
  }

  render() {
    return (
      <form>
        <select
          name="column"
          data-testid="column-filter"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.state.colonumItems.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          value={this.state.comparison}
          onChange={this.handleChange}
        >
          {this.state.comparisonItems.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={(e) =>
            this.props.numericalFilter(this.state.filterByNumericValues)
          }
        >
          Filter
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  numericalFilter: (e) => dispatch(numericalFilter(e)),
});

Filter.propTypes = {
  numericalFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Filter);
