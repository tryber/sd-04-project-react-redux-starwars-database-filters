import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getPlanetsAPIAct } from '../actions';

const Table = (props) => {
  const { data } = props;
  if (!data) return 'Double Loading';
  const keys = Object.keys(data.results[0]).filter(
    (header) => header !== 'residents',
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            {keys.map((param) => (
              <th>{param}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.results.map((planet) => (
            <tr key={planet.name}>
              {keys.map((column) => (
                <td>{planet[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getPlanetsAPIAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
