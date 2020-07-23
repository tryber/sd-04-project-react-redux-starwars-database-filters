import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterValues } from '../../actions/filter';
import CreateSelectColumn from './CreateSelectColumn';
import CreateSelectComparison from './CreateSelectComparison';
import CreateInputValue from './CreateInputValue';

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
    const { option, filterByNumericValues } = this.props;
    const optionsExists = option.length <= 0;
    return (
      <form className="form-group">
        <h3>Filter by numeric values</h3>
        <CreateSelectColumn
          filter={filterByNumericValues}
          options={option}
          handleChange={this.handleChange}
          value={column}
        />
        <CreateSelectComparison handleChange={this.handleChange} value={comparison} />
        <CreateInputValue handleChange={this.handleChange} value={value} />

        <button
          className="btn-small btn-dark"
          disabled={optionsExists}
          onClick={() => this.handleSubmit()}
          data-testid="button-filter"
          type="button"
        >
          Apply filter
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  option: state.filters.options,
  filterByNumericValues: state.filters.filterByNumericValues,
});
const mapDispatchToProps = (dispatch) => ({
  changeValues: (column, comparison, value) => dispatch(filterValues(column, comparison, value)),
});

NumericSearch.propTypes = {
  changeValues: PropTypes.func.isRequired,
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NumericSearch);
