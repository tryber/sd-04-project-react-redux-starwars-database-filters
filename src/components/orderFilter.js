import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { submitRadioAct } from '../actions';

class OrderFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'ASC',
      column: 'name',
    };
    this.renderRadioButtons = this.renderRadioButtons.bind(this);
  }

  renderRadioButtons() {
    return (
      <div
        onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
        name="sort"
      >
        <input
          data-testid="column-sort-input"
          name="order"
          type="radio"
          value="ASC"
          defaultChecked
        />
        <label htmlFor="ASC">ASC</label>
        <input
          data-testid="column-sort-input"
          name="order"
          type="radio"
          value="DESC"
        />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  }

  render() {
    const { data, submitRadio } = this.props;
    const { column, order } = this.state;
    return (
      <div>
        <select
          onChange={(event) => this.setState({ column: event.target.value })}
          data-testid="column-sort"
          name="column"
        >
          {Object.keys(data[0])
            .filter((header) => header !== 'residents')
            .map((columnHeader) => (
              <option key={columnHeader}>{columnHeader}</option>
            ))}
        </select>
        {this.renderRadioButtons()}
        <button
          type="button"
          onClick={() => submitRadio(column, order)}
          data-testid="column-sort-button"
        >
          Filter
        </button>
      </div>
    );
  }
}

OrderFilter.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  submitRadio: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.OrderFilterReducer,
  ...state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  submitRadio: (column, order) => dispatch(submitRadioAct(column, order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderFilter);
