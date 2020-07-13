import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { swFilterNum } from '../actions';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: [],
      number: '',
      column: '',
      comparation: '',
    };

    this.uptCol = this.uptCol.bind(this);
    this.numChange = this.numChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.compareAll = this.compareAll.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.uptCol();
  }

  onClick() {
    const { number, column, comparation } = this.state;
    this.props.swFilterNum(column, comparation, number);
    this.setState({
      select: [],
      number: '',
      column: '',
      comparation: '',
    });
    this.uptCol();
  }

  getColumns() {
    const { select } = this.state;
    return (
      <select
        onChange={(e) => this.selectChange(e, 'column')}
        data-testid="column-filter"
        value={this.state.column}
      >
        {select.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  selectChange(e, key) {
    const { value } = e.target;
    this.setState({
      [key]: value,
    });
  }

  numChange(e) {
    this.setState({
      number: e.target.value,
    });
  }

  uptCol() {
    const { nums } = this.props;
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    const stateColumns = nums.map(({ column }) => column);
    this.setState({
      select: [
        '',
        ...columns.filter((column) => !stateColumns.includes(column)),
      ],
    });
  }

  compareAll() {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        onChange={(event) => this.selectChange(event, 'comparation')}
        data-testid="comparison-filter"
        value={this.state.comparation}
      >
        {comparation.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.compareAll()}
        <input
          type="number"
          data-testid="value-filter"
          value={this.state.number}
          onChange={(event) => this.numChange(event)}
        />
        <button data-testid="button-filter" onClick={this.onClick} type="text">
          Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nums: state.filterReducer.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  swFilterNum: (column, comparison, value) =>
    dispatch(swFilterNum(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

Filters.propTypes = {
  swFilterNum: PropTypes.func.isRequired,
  nums: PropTypes.string.isRequired,
};
