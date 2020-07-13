import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';

const Table = ({ data, isFetching }) => {
  console.log('Data da API: ', data);
  console.log(isFetching);
  if (isFetching) return <p>Loading...</p>;
  return (
    <table>
      <TableHeader heads={Object.keys(data[0])} />
      <tbody>
        {data.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet).map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
});

export default connect(mapStateToProps, null)(Table);
