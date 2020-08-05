import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../../action';

class Search extends React.Component {
  render() {
    const { nameFilter } = this.props;
    return (
      <div>
          <input
            data-testid="name-filter"
            type="text"
            onChange={(elem) => nameFilter(elem.target.value)}
            placeholder="Faça sua pesquisa"
          />
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  nameFilter: (text) => dispatch(filterByName(text)),
});

export default connect(null, MapDispatchToProps)(Search);

Search.propTypes = {
  nameFilter: PropTypes.func.isRequired,
};
