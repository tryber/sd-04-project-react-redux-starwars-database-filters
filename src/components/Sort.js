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
      sort: '',
    };

    this.onClick = this.onClick.bind(this);
    this.radioButton = this.radioButton.bind(this);
  }

  onClick() {
    const { column, sort } = this.state;
    const { sorter } = this.props;
    sorter(column, sort);
  }

  onChange(value) {
    this.setState({
      column: value,
      sort: 'ASC',
    });
  }

  radioButton(value) {
    this.setState({
      sort: value,
    });
  }

  render() {
    return (
      <div>
        <select data-testid="column-sort" onChange={(e) => this.onChange(e.target.value)}>
          {options.map((ops) => (<option key={ops}>{ops}</option>))}
        </select>
        <label htmlFor="ASC">
          ASC
          <input data-testid="column-sort-input" id="ASC" name="sort" type="radio" value="ASC" onChange={() => this.radioButton('ASC')} />
        </label>
        <label htmlFor="DESC">
          DESC
          <input data-testid="column-sort-input" id="DESC" name="sort" type="radio" value="DESC" onChange={() => this.radioButton('DESC')} />
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
};

const mapDispatchToProps = (dispatch) => ({
  sorter: (column, sort) => dispatch(sorting(column, sort)),
});

export default connect(null, mapDispatchToProps)(Sort);
