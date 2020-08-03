import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHead from './tableHead';
import TableBody from './tableBody';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [
        'name',
        'climate',
        'created',
        'diameter',
        'edited',
        'films',
        'gravity',
        'orbital_period',
        'population',
        'rotation_period',
        'surface_water',
        'terrain',
        'url',
      ],
    };
  }

  render() {
    const { data, isLoading } = this.props;
    const { keys } = this.state;
    return isLoading ? (
      <h3>Wait Loading</h3>
    ) : (
      <div>
        <table>
          <thead>
            <TableHead dados={keys} />
          </thead>
          <TableBody dados={data} keys={keys} />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isLoading: state.planetsReducer.isLoading,
});

Table.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Table);
