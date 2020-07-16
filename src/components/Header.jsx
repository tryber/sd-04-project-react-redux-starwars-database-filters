import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class Header extends React.Component {
  render() {
    const { filter, filterName } = this.props;
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col">
            <h2>Procurar</h2>
            <input
              data-testid="name-filter"
              value={filterName}
              onChange={(e) => filter(e.target.value)}
              type="text"
            />
          </div>
          <div className="col">
            <h2>Ordem</h2>
          </div>
          <div className="col">
            <div className="d-flex">
              <select>
                <option value="">Coluna</option>
              </select>
              <select>
                <option value="">Comparação</option>
              </select>
            </div>
            <div className="d-flex">
              <input type="number" />
            </div>
            <button type="button">Filtrar</button>
          </div>
          <div className="col">
            <h2>Filtros</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterName: state.reducer.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (name) => dispatch(filterByName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
