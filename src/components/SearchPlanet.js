import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import { fetchPlanet } from '../actions/planetActions';

class SearchPlanet extends React.Component {
  componentDidMount() {
    const { getPlanet } = this.props;
    getPlanet();
  }

  render() {
    const { data, isLoading } = this.props;
    return (
      <div>
        <h1>Here is ShearchPlanet</h1>
        {!isLoading && <Table planets={data} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.planetReducer.isLoading,
  data: state.planetReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanet: () => dispatch(fetchPlanet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanet);
