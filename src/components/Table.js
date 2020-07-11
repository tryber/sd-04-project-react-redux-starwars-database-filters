import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions/actionAPI';


class Table extends React.Component {
  componentDidMount() {
    const { fetchingApi } = this.props;

    fetchingApi();
  }

  render() {
    const { isFetching, data } = this.props;
    if (isFetching) return <div>Loading</div>;
    const titles = data[0] ? Object.keys(data[0]) : [];
    return (
      <table>
        <thead>
          <tr>
            {titles
              .filter((title) => title !== 'residents')
              .map((title) => (
                <th key={title}>{title.toUpperCase()}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet)
                .filter((_, index) => index !== 9)
                .map((value) => (
                  <td key={value}>{value}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  isFetching: PropTypes.bool.isRequired,
  fetchingApi: PropTypes.func.isRequired,
};

Table.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  isFetching: state.planetReducer.isFetching,
  data: state.planetReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
