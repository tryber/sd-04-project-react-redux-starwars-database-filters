import React from 'react';
import { connect } from 'react-redux';
import { handleNumericFilter, submitFilter } from '../../redux/actions';
import Filter from './Filter';

const options = {
  column: [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
  comparison: ['', 'maior que', 'menor que', 'igual a'],
};

const giveMeOptions = (arr, name, previousFilters = []) => {
  const filteredArr = arr.filter(
    (element) => !previousFilters.some((prevFilter) => prevFilter === element),
  );
  return filteredArr.map((elem) => (
    <option key={elem} name={name} value={elem}>
      {elem}
    </option>
  ));
};

class NumericFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectFields = this.selectFields.bind(this);
    this.renderFilters = this.renderFilters.bind(this);
  }

  handleChange(e, field) {
    this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ column: '', comparison: '', value: 0 });
  }

  selectFields(field) {
    const prevFilters =
      field === 'column' ? this.props.filters.map((elem) => elem[field]) : [];
    return (
      <select
        data-testid={`${field}-filter`}
        value={this.state[field]}
        onChange={(e) => this.handleChange(e, field)}
      >
        {giveMeOptions(options[field], field, prevFilters)}
      </select>
    );
  }

  renderFilters() {
    return this.props.filters.map((elem) => {
      console.log('element', elem);
      const filterS = `${elem.column} ${elem.comparison} ${elem.value}`;
      return (
        <Filter
          key={`${elem.column}-${elem.value}`}
          filterString={filterS}
          column={elem.column}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          id="numericFilter"
          onSubmit={(e) => {
            this.props.submitFilter(e, this.state);
            this.handleSubmit(e);
          }}
        >
          {this.selectFields('column')}
          {this.selectFields('comparison')}
          <input
            name="value"
            type="number"
            data-testid="value-filter"
            value={this.state.value}
            onChange={(e) => this.handleChange(e, 'value')}
          />
          <button
            type="submit"
            form="numericFilter"
            data-testid="button-filter"
          >
            Filtrar
          </button>
        </form>
        {this.renderFilters()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, { submitFilter })(NumericFilter);
