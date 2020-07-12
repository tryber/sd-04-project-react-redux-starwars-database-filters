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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event;
    this.setState({ [name]: value });
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
        <form onSubmit={(e) => { e.preventDefault(); changeH(this.state); }}>
          <select data-testid="column-filter" onChange={(event) => this.handleChange(event)}>
            {optionsN.map((option) => (<option value={option}>{option}</option>))}
          </select>
          <select data-testid="comparison-filter" onChange={(event) => this.handleChange(event)}>
            <option defaultValue>Comparison</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input type="number" data-testid="value-filter" onChange={(event) => this.handleChange(event)} />
          <button type="submit" data-testid="button-filter">Filtrar</button>
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
  filterByNumericValues: PropType.arrayOf(PropType.object).isRequired,
  options: PropType.arrayOf(PropType.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
