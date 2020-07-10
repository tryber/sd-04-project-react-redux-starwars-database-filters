import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.getHeaders = this.getHeaders.bind(this);
    this.getBody = this.getBody.bind(this);
  }

  componentDidMount() {
    const { getData } = this.props;
    getData('planets');
  }

  getHeaders() {
    const { results } = this.props;
    const headerKeys = Object.keys(results[0]);
    return (
      <tr>
        {headerKeys.map((k) => (
          <th key={k}>{k}</th>
        ))}
      </tr>
    );
  }

  getBody() {
    const { results } = this.props;
    return (
      <tbody>
        {results.map((element) => (
          <tr>
            {Object.values(element).map((d) => (
              <td>{d}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    const { results } = this.props;
    if (results) {
      return (
        <table>
          <thead>{this.getHeaders()}</thead>
          {this.getBody()}
        </table>
      );
    }
    return <div>...em uma galáxia muito distante</div>;
  }
}

Table.propTypes = {
  getData: PropTypes.func,
  results: PropTypes.shape({
    map: PropTypes.func,
  }),
};

Table.defaultProps = {
  getData: () => console.log('Should be a function'),
  results: null,
};

const mapStateToProps = (state) => ({
  results: state.data.results,
});

export default connect(mapStateToProps, { getData })(Table);
