import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterBy } from '../actions/actionFilter';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
    };
    this.set = this.set.bind(this);
  }

  set(e) {
    const { name, value } = e.nativeEvent.target;
    this.setState({ [name]: value });
  }

  filterColumn() {
    const value = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    return (
      <div>
        <select
          onChange={(e) => this.set(e)}
          name="column"
          data-testid="column-filter"
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled>Column</option>
          {value.map((arg) => <option value={arg} name={arg} id={arg}>{arg}</option>)}
        </select>
      </div>
    );
  }

  filterComparison() {
    return (
      <div>
        <select
          onChange={(e) => this.set(e)}
          name="comparison"
          data-testid="comparison-filter"
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled>Comparison</option>
          <option value="maior que" name="maior_que">maior que</option>
          <option value="menor que" name="menor_que">menor que</option>
          <option value="igual a" name="igual_a">igual a</option>
        </select>
      </div>
    );
  }

  filterValue() {
    return (
      <div>
        <label htmlFor="value_number">
          <input
            data-testid="value-filter"
            name="value"
            id="value_number"
            type="number"
            onChange={(e) => this.set(e)}
          />
        </label>
      </div>
    );
  }


  submitFilter(e) {
    const {
      submitValues,
    } = this.props;
    e.preventDefault();
    submitValues(this.state);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitFilter(e)}>
        {this.filterColumn()}
        {this.filterComparison()}
        {this.filterValue()}
        <button
          type="submit"
          data-testid="button-filter"
        >
          Filter
        </button>
      </form>
    );
  }
}

Filters.propTypes = {
  submitValues: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.planetReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  submitValues: (values) => dispatch(filterBy(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
