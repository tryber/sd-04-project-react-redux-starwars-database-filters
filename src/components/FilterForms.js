import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveFilterData } from '../actions';

class FilterForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { submitFilterData } = this.props;
    const { column, comparison, number } = this.state;
    // console.log(event.target.column.value);

    submitFilterData(column, comparison, number);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <select onChange={(e) => this.handleChange(e)} data-testid="column-filter" name="column">
            <option defaultValue="" selected disabled hidden>Choose here</option>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select onChange={(e) => this.handleChange(e)} data-testid="comparison-filter" name="comparison">
            <option defaultValue="" selected disabled hidden>Choose here</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input onChange={(e) => this.handleChange(e)} data-testid="value-filter" type="number" name="number" />
          <button type="submit" data-testid="button-filter">acionar filtro</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitFilterData: (column, comparison, number) => (
    dispatch(saveFilterData(column, comparison, number))
  ),
});

FilterForms.propTypes = {
  submitFilterData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterForms);
