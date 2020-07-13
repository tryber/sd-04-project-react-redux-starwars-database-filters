import React from 'react';
import Table from './Table';
import SearchInput from './SearchInput';
import { connect } from 'react-redux';
import { swFetch } from '../actions';

class Home extends React.Component {
  componentDidMount() {
    const { getSwFetch } = this.props;
    getSwFetch();
  }

  render() {
    if (this.props.loading) return <p>Loading...</p>;
    return (
      <div>
        <SearchInput />
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
