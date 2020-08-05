import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderFilters } from '../actions';

class OrderValues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'name',
      sort: 'ASC',
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onClick(event) {
    const { column, sort } = this.state;
    const { orderFilters } = this.props;
    orderFilters(column, sort);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <select data-testid="column-sort" onChange={(event) => this.onChange(event)} name="column">
          {Object.keys(data[0]).map((planet) => (
            <option key={planet} value={planet}>
              {planet}
            </option>
          ))}
        </select>
        <div onChange={(event) => this.onChange(event)} name="sort">
          <input
            data-testid="column-sort-input"
            id="ASC"
            value="ASC"
            name="sort"
            type="radio"
            defaultChecked
          />
          <label htmlFor="ASC">ASC</label>
          <input data-testid="column-sort-input" id="DESC" name="sort" type="radio" value="DESC" />
          <label htmlFor="DESC">DESC</label>
        </div>
        <button
          onClick={(event) => this.onClick(event)}
          data-testid="column-sort-button"
          type="button"
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.getPlanets.data,
});

const mapDispatchToProps = (dispatch) => ({
  orderFilters: (column, sort) => dispatch(orderFilters(column, sort)),
});

OrderValues.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderFilters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderValues);
