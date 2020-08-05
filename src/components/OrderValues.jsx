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
    this.createInputDesc = this.createInputDesc.bind(this);
    this.createInputAsc = this.createInputAsc.bind(this);
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
  createInputDesc() {
    return (
      <div>
        <input data-testid="column-sort-input" id="DESC" value="DESC" name="sort" type="radio" />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  }
  createInputAsc() {
    return (
      <div>
        <input
          data-testid="column-sort-input"
          id="ASC"
          value="ASC"
          name="sort"
          type="radio"
          defaultChecked
        />
        <label htmlFor="ASC">ASC</label>
      </div>
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
          {this.createInputAsc()}
          {this.createInputDesc()}
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
