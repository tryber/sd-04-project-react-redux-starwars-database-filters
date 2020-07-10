import React from 'react';
import { connect } from 'react-redux';
import { filterByNumber } from '../actions';

const Filters = (props) => {
  const { changeH } = props;
  const dropdownKeys = ['population', 'orbital_period', 'diameter',
    'rotation_period',
    'surface_water',
  ];
  return (
    <div>
      <form onSubmit={(event) => changeH(event)}>
        <select data-testid="column-filter" name="column">
          {dropdownKeys.map((key) => (
            <option key={`${key} index`} value={key}>
              {key}
            </option>
          ))}
        </select>
        <select data-testid="comparison-filter" name="comparison">
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>
        <input type="number" name="inputNumber" data-testid="value-filter" />
        <button type="submit" data-testid="button-filter">
          Filtrar
        </button>
        ;
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  changeH: (event) => {
    event.preventDefault();
    return dispatch(filterByNumber(event.target));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
