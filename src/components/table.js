import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAPI } from "../action";
import TableH from './tableH';

class Table extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { items, isLoaded } = this.props;
    if (!isLoaded) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <label htmlFor='names'>Procurar
        <input type='text' placeholder='digite um nome' />
        </label>
        <table className="table table-sm">
          <TableH />
          {items.map((item) => (
            <tbody key={item.name}>
              <tr>
                <td>{item.name}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.rotation_period}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  isLoaded: state.reducer.isLoaded,
  items: state.reducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
