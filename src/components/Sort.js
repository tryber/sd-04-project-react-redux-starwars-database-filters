import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sorting } from '../actions';

const options = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'residents',
  'films',
  'created',
  'edited',
];

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: options,
      act: 'ASC',
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { column, act } = this.state;
    const { sorter } = this.props;
    document.querySelectorAll('tr');
    sorter(column, act);
    this.setState({ column: 'Name', act: 'ASC' });
  }

  render() {
    const { toFilter } = this.props;
    return (
      <div>
        <select data-testid="column-sort">
          {options.map((ops) => (<option key={ops}>{ops}</option>))}
        </select>
        <label htmlFor="ASC">
          ASC
          <input data-testid="column-sort-input" id="ASC" name="sort" type="radio" defaultChecked />
        </label>
        <label htmlFor="DSC">
          DSC
          <input data-testid="column-sort-input" id="ASC" name="sort" type="radio" />
        </label>
        <button data-testid="column-sort-button" type="button" onClick={this.onClick}>
          Filtrar
        </button>
      </div>
    );
  }
}

Sort.propTypes = {
  sorter: PropTypes.func.isRequired,
  toFilter: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  toFilter: state.getPlanets.data,
});

const mapDispatchToProps = (dispatch) => ({
  sorter: (data) => dispatch(sorting(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
