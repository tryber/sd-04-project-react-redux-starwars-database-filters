import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { swSearchNum } from '../actions/';

class Filters extends React.Component {
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

    this.getValue = this.getValue.bind(this);
    this.getCol = this.getCol.bind(this);
    this.getFil = this.getFil.bind(this);
  }

  getValue(event) {
    const { name, value } = event.target;
    this.setState({
      filterByNumericValues: {
        ...this.state.filterByNumericValues,
        [name]: value,
      },
    });
  }

  getCol() {
    this.bar = 12;
    const colAr = [];
    this.props.colonumItems.forEach((item) => {
      colAr.push(item.name);
    });
    const acCol = [];
    this.props.filterByNumericValues.forEach((item) => {
      acCol.push(item.column);
    });
    let colFil = [];
    colFil = colAr.filter(
      (n) => !acCol.includes(n),
    );
    return (
      <select
        name="column"
        data-testid="column-filter"
        value={this.state.value}
        onChange={this.getValue}
      >
        {colFil.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    );
  }
  getFil() {
    this.bar = 12;
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
        <form>
          <this.getCol />
          <select
            name="comparison"
            data-testid="comparison-filter"
            value={this.state.comparison} onChange={this.getValue}
          >
            {this.state.comparisonItems.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <input
            name="value" type="number" data-testid="value-filter"
            value={this.state.value} onChange={this.getValue}
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={() =>
              this.props.swSearchNum(this.state.filterByNumericValues)
            }
          >
            Filter
          </button>
        </form>
        <this.getFil />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  colonumItems: state.filters.colonumItems,
  filterByNumericValues: state.filters.filterByNumericValues,
});
const mapDispatchToProps = (dispatch) => ({
  swSearchNum: (e) => dispatch(swSearchNum(e)),
});
Filters.propTypes = {
  swSearchNum: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.shape.isRequired,
  colonumItems: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
