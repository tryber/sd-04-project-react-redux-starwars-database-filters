import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { submitOrder } from '../../redux/actions';

const options = {
  column: [
    '',
    'Name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
  comparison: ['', 'maior que', 'menor que', 'igual a'],
};

class OrderFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      sort: '',
    };

    this.handleOrderChange = this.handleOrderChange.bind(this);
  }

  handleOrderChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  renderRadio() {
    return (
      <div>
        <label htmlFor="ASC">
          <input
            data-testid="column-sort-input"
            type="radio"
            value="ASC"
            checked={this.state.sort === 'ASC'}
            onChange={(e) => this.handleOrderChange(e, 'sort')}
          />
          ASC
        </label>
        <label htmlFor="DESC">
          <input
            data-testid="column-sort-input"
            type="radio"
            value="DESC"
            checked={this.state.sort === 'DESC'}
            onChange={(e) => this.handleOrderChange(e, 'sort')}
          />
          DESC
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form
          id="orderFilter"
          onSubmit={(e) => this.props.submitOrder(e, this.state)}
        >
          <select
            data-testid="column-sort"
            value={this.state.column}
            onChange={(e) => this.handleOrderChange(e, 'column')}
          >
            {options.column.map((elem) => (
              <option key={elem} name="column-order" value={elem}>
                {elem}
              </option>
            ))}
          </select>
          {this.renderRadio()}
          <button
            type="submit"
            form="orderFilter"
            data-testid="column-sort-button"
          >
            Ordenar
          </button>
        </form>
      </div>
    );
  }
}

OrderFilter.propTypes = {
  submitOrder: PropTypes.func,
};

OrderFilter.defaultProps = {
  submitOrder: () => console.log('Não foi passado função'),
};

const mapStateToProps = (state) => ({
  column: state.filters.order.column,
  sort: state.filters.order.sort,
});

export default connect(mapStateToProps, { submitOrder })(OrderFilter);
