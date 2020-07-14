import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterValues } from '../../actions/filter';

const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const CreateSelectColumn = ({ onChange, value }) => (
  <select value={value} onChange={(e) => onChange(e)} data-testid="column-filter" id="column">
    <option value="">Column</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const CreateSelectComparison = ({ onChange, value }) => (
  <select
    value={value}
    onChange={(e) => onChange(e)}
    data-testid="comparison-filter"
    id="comparison"
  >
    <option defaultValue>Comparison</option>
    <option value="maior que">maior que</option>
    <option value="igual a">igual a</option>
    <option value="menor que">menor que</option>
  </select>
);

const CreateInputValue = ({ onChange, value }) => (
  <input
    style={{ width: '90px' }}
    value={value}
    onChange={(e) => onChange(e)}
    data-testid="value-filter"
    type="number"
    id="value"
  />
);

class NumericSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit() {
    const { column, comparison, value } = this.state;
    const { changeValues } = this.props;
    changeValues(column, comparison, value);
    this.setState({ column: '', comparison: '', value: '' });
  }

  render() {
    const { column, comparison, value } = this.state;
    return (
      <form>
        <CreateSelectColumn onChange={this.handleChange} value={column} />
        <CreateSelectComparison onChange={this.handleChange} value={comparison} />
        <CreateInputValue onChange={this.handleChange} value={value} />

        <button onClick={() => this.handleSubmit()} data-testid="button-filter" type="button">
          Apply filter
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeValues: (column, comparison, value) => dispatch(filterValues(column, comparison, value)),
});

NumericSearch.propTypes = {
  changeValues: PropTypes.func.isRequired,
};

CreateSelectColumn.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

CreateSelectComparison.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

CreateInputValue.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(NumericSearch);
