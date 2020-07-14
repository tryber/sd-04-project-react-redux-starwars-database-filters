import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { swSearchNum } from '../actions';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterByNumericValues: {
        column: '',
        comparison: '',
        value: '',
      },
      swComp: ['', 'maior que', 'igual a', 'menor que'],
    };
    this.getValue = this.getValue.bind(this);
    this.getCol = this.getCol.bind(this);
    this.getFil = this.getFil.bind(this);
  }

  getValue(e) {
    const { name, value } = e.target;
    this.setState({
      filterByNumericValues: {
        ...this.state.filterByNumericValues,
        [name]: value,
      },
    });
  }

  getCol() {
    this.bar = 12; // ai ai cc
    const colItems = [];
    this.props.swCol.forEach((e) => {
      colItems.push(e.name);
    });
    const colFil = [];
    this.props.filterByNumericValues.forEach((e) => {
      colFil.push(e.column);
    });
    let filteredCol = [];
    filteredCol = colItems.filter((e) => !colFil.includes(e));
    return (
      <select
        name="column"
        data-testid="column-filter"
        value={this.state.value}
        onChange={this.getValue}
      >
        {filteredCol.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    );
  }

  getFil() {
    this.bar = 12; // ai ai ccccccccc
    return (
      <div>
        {this.props.filterByNumericValues.map((fil) => (
          <div>
            <p>
              {fil.column}, {fil.comparison}, {fil.value}
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
            value={this.state.comparison}
            onChange={this.getValue}
          >
            {this.state.swComp.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
          <input
            name="value"
            type="number"
            data-testid="value-filter"
            value={this.state.value}
            onChange={this.getValue}
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
  swCol: state.filterReducer.colonumItems,
  filterByNumericValues: state.filterReducer.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  swSearchNum: (e) => dispatch(swSearchNum(e)),
});

Filters.propTypes = {
  swSearchNum: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.shape.isRequired,
  swCol: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
