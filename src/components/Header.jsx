import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName, filterByNumeric } from '../actions';

const FilterByName = ({ filterName, filter }) => (
  <div className="col">
    <h2>Procurar</h2>
    <input
      data-testid="name-filter"
      value={filterName}
      onChange={(e) => filter(e.target.value)}
      type="text"
    />
  </div>
);

const FilterByNumeric = ({ filter }) => {
  const [numericFilter, setNumericFilter] = useState({});
  return (
    <div className="col">
      <div className="d-flex">
        <select
          onChange={(e) => setNumericFilter({ ...numericFilter, column: e.target.value })}
          className="w-50"
          data-testid="column-filter"
          defaultValue=""
        >
          <option value="" disabled>
            Coluna
          </option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          onChange={(e) => setNumericFilter({ ...numericFilter, comparison: e.target.value })}
          className="w-50"
          data-testid="comparison-filter"
          defaultValue=""
        >
          <option value="" disabled>
            Comparação
          </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
      <div className="d-flex">
        <input
          className="w-100"
          data-testid="value-filter"
          onChange={(e) => setNumericFilter({ ...numericFilter, value: e.target.value })}
          type="number"
        />
      </div>
      <button data-testid="button-filter" type="button" onClick={() => filter(numericFilter)}>
        Filtrar
      </button>
    </div>
  );
};

class Header extends React.Component {
  render() {
    const { filterByNome, filterByNumber, filterName } = this.props;
    return (
      <div className="jumbotron">
        <div className="row">
          <FilterByName filterName={filterName} filter={filterByNome} />
          <FilterByNumeric filterNumber={1} filter={filterByNumber} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterName: state.filters.filterByName.name,
  filterNumber: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNome: (name) => dispatch(filterByName(name)),
  filterByNumber: (filter) => dispatch(filterByNumeric(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  filterByNome: PropTypes.func.isRequired,
  filterByNumber: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

FilterByNumeric.propTypes = {
  filter: PropTypes.func.isRequired,
};

FilterByName.propTypes = {
  filter: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};
