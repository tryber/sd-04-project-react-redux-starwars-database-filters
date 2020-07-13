import React from 'react';
import { connect } from 'react-redux';
import { swFetch } from '../actions';
import PropTypes from 'prop-types';
import Table from './Table';

class Home extends React.Component {
  componentDidMount() {
    const { getSwFetch } = this.props;
    getSwFetch();
  }

  render() {
    if (this.props.loading) return <p>Loading...</p>;
    return (
      <div>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.swReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getSwFetch: () => dispatch(swFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  getSwFetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
