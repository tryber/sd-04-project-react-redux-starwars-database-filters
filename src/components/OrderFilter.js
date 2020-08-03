import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { submitRadioAct } from '../actions';

class OrderFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'ASC',
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
          name="sort"
          type="radio"
          value="ASC"
          defaultChecked
        />
        <label htmlFor="ASC">ASC</label>
        <input data-testid="column-sort-input" name="sort" type="radio" value="DESC" />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  }

  render() {
    const { data, submitRadio } = this.props;
    const { column, sort } = this.state;
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
          onClick={() => submitRadio(column, sort)}
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
  ...state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  submitRadio: (column, sort) => dispatch(submitRadioAct(column, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderFilter);
