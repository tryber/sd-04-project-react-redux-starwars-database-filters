import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';

function filterByText(planets, text) {
  return planets.filter((planet) => text === '' || planet.name.includes(text));
}

class Table extends React.Component {
  render() {
    const { data, isLoading, name } = this.props;
    let dataPlanets = data;
    dataPlanets = filterByText(data, name);
    if (isLoading) return <span>Loading...</span>;

    return (
      <table className="table table-bordered table-dark">
        <tbody>
          {data.length > 0 && <TableHeader heads={Object.keys(data[0])} />}
          {data.length > 0 && dataPlanets.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({
  planetsReducer: { data, isLoading },
  filters: {
    filterByName: { name },
  },
}) => ({
  data,
  name,
  isLoading,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
