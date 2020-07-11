import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';

class Table extends React.Component {
  render() {
    const { data, isLoading } = this.props;
    console.log(isLoading);
    if (isLoading) return <span>Loading...</span>;

    return (
      <table className="table table-bordered table-dark">
        <tbody>
          {data.length > 0 && <TableHeader heads={Object.keys(data[0])} />}
          {data.length > 0 && data.map((planet) => (
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

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isLoading: state.planetsReducer.isLoading,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Table);
