import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col">
            <h2>Procurar</h2>
            <input type="text" />
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

export default Header;
