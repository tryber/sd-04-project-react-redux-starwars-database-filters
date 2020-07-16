import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  filter: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};
