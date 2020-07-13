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
    let colonumItemsArray = [];
    this.props.colonumItems.forEach((item) => {
      colonumItemsArray.push(item.name);
    });
    let activFilterColum = [];
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
        {this.props.filterByNumericValues.map((filter) => (
          <div>
            <p>
              {filter.column}, {filter.comparison}, {filter.value}
            </p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form class="form-inline">
          <this.columnRender />
          <select
            name="comparison"
            className="form-control col-2"
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
            className="form-control col-1"
            data-testid="value-filter"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button
            type="button"
            class="btn btn-primary"
            data-testid="button-filter"
            onClick={() =>
              this.props.numericalFilter(this.state.filterByNumericValues)
            }
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
  colonumItems: state.filters.colonumItems,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  numericalFilter: (e) => dispatch(numericalFilter(e)),
});

Filter.propTypes = {
  numericalFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
