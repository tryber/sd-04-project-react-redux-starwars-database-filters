import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sorteiaValores, trocaDados } from '../actions/filtersActions';

class Sortin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
      keys: [
        'Name',
        'Climate',
        'Created',
        'Diameter',
        'Edited',
        'Films',
        'Gravity',
        'Orbital_period',
        'Population',
        'Rotation_period',
        'Surface_water',
        'Terrain',
        'Url',
      ],
    };
    this.handler = this.handler.bind(this);
    this.generateInputAndLabel = this.generateInputAndLabel.bind(this);
  }
  handler({ name, value }) {
    //console.log('name',name);
    //console.log('value',value);
    this.setState({ [name]: value });
  }
  generateInputAndLabel(value) {
    return (
      <div>
        {' '}
        <input
          type="radio"
          data-testid="column-sort-input"
          name="sort"
          value={value}
          onClick={(event) => this.handler(event.target)}
        />{' '}
        <label htmlFor="sort">{value}</label>{' '}
      </div>
    );
  }

  sortt(s, c) {
    const { filter, muda } = this.props;
    const { column, sort } = this.state;
    console.log('sort',sort);
    console.log('column',column);
    filter(sort, column);
    muda();
  }

  render() {
    const { column, sort, keys } = this.state;
    return (
      <div>
        {' '}
        <select
          data-testid="column-sort"
          name="column"
          onChange={(event) => this.handler(event.target)}
        >
          {' '}
          {keys.map((option) => (
            <option key={option}>{option}</option>
          ))}{' '}
        </select>{' '}
        {this.generateInputAndLabel('ASC')} {this.generateInputAndLabel('DESC')}{' '}
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={(() => this.sortt(sort, column))}
        >
          {' '}
          Sort{' '}
        </button>{' '}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (data, column) => dispatch(sorteiaValores(data, column)),
  muda: () => dispatch(trocaDados()),
});
Sortin.propTypes = {
  filter: PropTypes.func.isRequired,
  muda: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Sortin);
