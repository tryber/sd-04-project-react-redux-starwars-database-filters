import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { swSearch } from '../actions';
import { swSearchNum } from '../actions';

class SearchInput extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <input
        data-testid="name-filter"
        value={value}
        onChange={(e) => this.props.swSearch(e.target.value)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.filters.value,
});

const mapDispatchToProps = (dispatch) => ({
  swSearch: (e) => dispatch(swSearch(e)),
  swSearchNum: (e) => dispatch(swSearchNum(e)),
});

SearchInput.propTypes = {
  swSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
