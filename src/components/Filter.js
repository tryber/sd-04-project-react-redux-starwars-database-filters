import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { numericalFilter, deleteFilter } from '../actions/filterActions';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterByNumericValues: {
        column: '',
        comparison: '',
        value: '',
      },
      comparisonItems: ['Comparação', 'maior que', 'igual a', 'menor que'],
    };

    this.handleChange = this.handleChange.bind(this);
    this.columnRender = this.columnRender.bind(this);
    this.filterRender = this.filterRender.bind(this);
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

  columnRender() {
    this.bar = 12; // Without CC asked for using this
    const colonumItemsArray = [
      'Coluna',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]; // Must refactor this part and subtract object directly
    const activFilterColum = [];
    this.props.filterByNumericValues.forEach((item) => {
      activFilterColum.push(item.column);
    });
    let colonumItemsFiltered = [];
    colonumItemsFiltered = colonumItemsArray.filter(
      (n) => !activFilterColum.includes(n),
    );
    return (
      <select
        name="column"
        className="form-control col-1 "
        data-testid="column-filter"
        value={this.state.value}
        onChange={this.handleChange}
      >
        {colonumItemsFiltered.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    );
  }

  filterRender() {
    this.bar = 12; // Without CC asked for using this
    return (
      <div>
        {this.props.filterByNumericValues.map((filter, index) => (
          <div data-testid="filter">
            <p>
              {filter.column} {filter.comparison} {filter.value}
            </p>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() =>
                this.props.deleteFilter(index)
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="form-inline">
          <this.columnRender />
          <select
            name="comparison" className="form-control col-2" data-testid="comparison-filter"
            value={this.state.comparison} onChange={this.handleChange}
          >
            {this.state.comparisonItems.map((item) => (
              <option value={item}>{item}</option>))}
          </select>
          <input
            name="value" type="number" className="form-control col-1"
            data-testid="value-filter" value={this.state.value} onChange={this.handleChange}
          />
          <button
            type="button" className="btn btn-primary" data-testid="button-filter"
            onClick={() => this.props.numericalFilter(this.state.filterByNumericValues)}
          >
            Filter
          </button>
        </form>

        <this.filterRender />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  numericalFilter: (e) => dispatch(numericalFilter(e)),
  deleteFilter: (e) => dispatch(deleteFilter(e)),

});

Filter.propTypes = {
  numericalFilter: PropTypes.func.isRequired,
  deleteFilter: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
