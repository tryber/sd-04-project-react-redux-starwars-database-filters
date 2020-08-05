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
    // para atualizar sem a ação do botão
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onClick() {
    const { column, sort } = this.state;
    const { orderFilter } = this.props;
    orderFilter(column, sort);
  }

  createInput(valueAscOrDesc) {
    const { sort } = this.state;
    return (
      <frameElement>
        <input
          data-testid="column-sort-input"
          id={valueAscOrDesc}
          value={valueAscOrDesc}
          name="sort"
          type="radio"
          checked={sort === valueAscOrDesc}
        />
        <label htmlFor={valueAscOrDesc}>{valueAscOrDesc}</label>
      </frameElement>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <select data-testid="column-sort" onChange={(event) => this.onChange(event)} name="column">
          {Object.keys(data[0]).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        <div onChange={(event) => this.onChange(event)} name="sort">
          {this.createInput('ASC')}
          {this.createInput('DESC')}
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
  orderFilter: (column, sort) => dispatch(orderFilters(column, sort)),
});

OrderValues.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderValues);
