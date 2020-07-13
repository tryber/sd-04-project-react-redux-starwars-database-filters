import React from 'react';
import Table from './Table';
import { connect } from 'react-redux';
import { swFetch } from '../actions';

class Home extends React.Component {
  componentDidMount() {
    const { swFetch } = this.props;
    swFetch();
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
  swFetch: () => dispatch(swFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
