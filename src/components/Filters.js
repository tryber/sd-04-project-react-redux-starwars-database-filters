import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { filterByNumber } from '../actions';
import FiltersInUse from './FiltersInUse';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  render() {
    const { changeH, filterByNumericValues, options } = this.props;
    let optionsN = options;
    if (typeof filterByNumericValues && filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column }) => {
        optionsN = optionsN.filter((option) => option !== column);
      });
    }
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            changeH(this.state);
          }}
        >
          <select
            data-testid="column-filter"
            name="column"
            onChange={(event) => this.setState({ column: event.target.value })}
          >
            {optionsN.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            name="comparison"
            onChange={(event) => this.setState({ comparison: event.target.value })}
          >
            <option defaultValue>Comparison</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            name="inputNumber"
            data-testid="value-filter"
            onChange={(event) => this.setState({ value: event.target.value })}
          />
          <button type="submit" data-testid="button-filter">
            Filtrar
          </button>
        </form>
        <FiltersInUse />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  filterByNumericValues: state.filters.filterByNumericValues,
  options: state.filters.options,
});

const mapDispatchToProps = (dispatch) => ({
  changeH: (data) => dispatch(filterByNumber(data)),
});

Filters.propTypes = {
  changeH: PropType.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
