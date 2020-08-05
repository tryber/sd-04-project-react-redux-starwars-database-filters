import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions';

const numberColumns = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const filterDataByName = (data, filter) => {
  const pattern = new RegExp(`.*${filter}.*`, 'gim');
  console.log('data', data);
  return data.filter((result) => result.name.match(pattern));
};

const filterByNumber = (numbersFilter, data) => {
  let newData = [...data];
  const operations = {
    'maior que': (a, b) => Number(a) > Number(b),
    'menor que': (a, b) => Number(a) < Number(b),
    'igual a': (a, b) => a === b,
  };
  if (numbersFilter.length > 0) {
    for (let i = 0; i < numbersFilter.length; i += 1) {
      const columnFilter = numbersFilter[i].column;
      const comparisonFilter = numbersFilter[i].comparison;
      const valueFilter = numbersFilter[i].value;
      newData = newData.filter((element) =>
        operations[comparisonFilter](element[columnFilter], valueFilter),
      );
    }
    return newData;
  }
  return data;
};

const sortAcending = (A, B) => {
  if (A < B) {
    return -1;
  }
  return 1;
};

const sortDecending = (A, B) => {
  if (A < B) {
    return 1;
  }
  return -1;
};

const checkData = (a, column) => {
  const data = numberColumns.some((elem) => elem === column)
    ? Number(a[column])
    : a[column.toLowerCase()].toUpperCase();
  return data;
};

const sortData = (data, column, sortWay) => {
  const sortedData = data.sort((a, b) => {
    const A = checkData(a, column);
    const B = checkData(b, column);
    if (sortWay === 'ASC') {
      return sortAcending(A, B);
    }
    if (sortWay === 'DESC') {
      return sortDecending(A, B);
    }
    return 0;
  });
  return sortedData;
};

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.getHeaders = this.getHeaders.bind(this);
    this.getBody = this.getBody.bind(this);
  }

  componentDidMount() {
    this.props.getData('planets');
  }

  getHeaders() {
    const { results } = this.props;
    const headerKeys = Object.keys(results[0]);
    return (
      <tr>
        {headerKeys.map((k) => (
          <th key={k}>{k}</th>
        ))}
      </tr>
    );
  }

  getBody() {
    const { results, nameFilter, numberFilter } = this.props;
    console.log('props', numberFilter);
    return (
      <tbody>
        {sortData(
          filterDataByName(filterByNumber(numberFilter, results), nameFilter),
          this.props.orderColumn,
          this.props.orderSort,
        ).map((element) => (
          <tr key={element.name}>
            {Object.values(element).map((d) => (
              <td key={`${element.name}-${d}`}>{d}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    const { results } = this.props;
    if (results) {
      return (
        <table>
          <thead>{this.getHeaders()}</thead>
          {this.getBody()}
        </table>
      );
    }
    return <div>...em uma galáxia muito distante</div>;
  }
}

Table.propTypes = {
  getData: PropTypes.func,
  nameFilter: PropTypes.string,
  numberFilter: PropTypes.arrayOf(PropTypes.object),
  orderColumn: PropTypes.string,
  orderSort: PropTypes.string,
  results: PropTypes.shape({
    map: PropTypes.func,
  }),
};

Table.defaultProps = {
  getData: () => console.log('Should be a function'),
  results: null,
  nameFilter: '',
  numberFilter: [],
  orderColumn: '',
  orderSort: '',
};

const mapStateToProps = (state) => ({
  results: state.data.results,
  nameFilter: state.filters.filterByName.name,
  numberFilter: state.filters.filterByNumericValues,
  numericFilterInput: state.numericFilterInput,
  orderColumn: state.filters.order.column,
  orderSort: state.filters.order.sort,
});

export default connect(mapStateToProps, { getData })(Table);
