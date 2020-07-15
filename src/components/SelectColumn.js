import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { comparisonFilterAction } from '../actions/index';

const listOfColumns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const listOfComparisons = ['maior que', 'menor que', 'igual a'];

export class SelectColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
    };
    this.handle = this.handle.bind(this);
  }

  handle(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { comparisonFilter, activeColums } = this.props;
    const { column, comparison, value } = this.state;
    const { handle } = this;
    const listOfActiveColumns = activeColums.map((option) => option.column);
    return (
      <div className="container">
        <div className="container-box">
          <select data-testid="column-filter" name="column" onChange={(e) => handle(e)}>
            <option defaultValue>Column</option>
            {listOfColumns.filter((element) => !listOfActiveColumns.includes(element))
              .map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          <select data-testid="comparison-filter" name="comparison" onChange={(e) => handle(e)}>
            <option defaultValue>Comparison</option>
            {listOfComparisons.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
        <input type="number" data-testid="value-filter" onChange={(e) => handle(e)} name="value" />
        <button
          type="button" onClick={() => comparisonFilter({ column, comparison, value })}
          data-testid="button-filter"
        >Filtrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeColums: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  comparisonFilter: (object) => dispatch(comparisonFilterAction(object)),
});

SelectColumn.propTypes = {
  comparisonFilter: PropTypes.shape.isRequired,
  activeColums: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectColumn);
