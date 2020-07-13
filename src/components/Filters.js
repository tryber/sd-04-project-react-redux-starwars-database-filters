import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterBy, changeDataButton } from '../actions/actionFilter';

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

  filterColumn() {
    return (
      <div>
        <select onChange={(e) => this.set(e)} name="column" data-testid="column-filter" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled="true">Column</option>
          <option value="population" name="population">Population</option>
          <option value="orbital_period" name="orbital_period">Orbital_Period</option>
          <option value="diameter" name="diameter">Diameter</option>
          <option value="rotation_period" name="rotation_period">Rotation_Period</option>
          <option value="surface_water" name="surface_water">Surface_Water</option>
        </select>
      </div>
    );
  }

  filterComparison() {
    return (
      <div>
        <select onChange={(e) => this.set(e)} name="comparison" data-testid="comparison-filter" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled="true">Comparison</option>
          <option value="maior que" name="maior_que">Maior que</option>
          <option value="menor que" name="menor_que">Menor que</option>
          <option value="igual a" name="igual_a">Igual a</option>
        </select>
      </div>
    );
  }

  set(e) {
    const { name, value } = e.nativeEvent.target;
    this.setState({ [name]: value });
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
    const { submitValues } = this.props;
    e.preventDefault();
    submitValues(this.state);
    console.log('estou apertado');
    // const searchColumn = data.map((planets) => planets[columnKey]);
    // console.log(searchColumn);
    // console.log(columnKey);

    // if (comparasion === "maior que") return number > ;
    // if (comparasion === "menor que") return number < ;
    // if (comparasion === "igual a") return number === ;

    // return changeDataButton(modifyData);
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

const mapStateToProps = (state) => ({
  data: state.planetReducer.data,
  columnKey: state.filters.filterByNumericValues.column,
  comparasion: state.filters.filterByNumericValues.comparasion,
  number: state.filters.filterByNumericValues.value,
});

const mapDispatchToProps = (dispatch) => ({
  submitValues: (values) => dispatch(filterBy(values)),
  changeDataButton: (data) => dispatch(changeDataButton(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
