import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: [],
    };
  }

  componentDidMount() {
    const { dados } = this.props;
    this.coletaDados(dados);
  }

  coletaDados(dados) {
    this.setState({ heads: dados });
  }

  render() {
    const { heads } = this.state;
    return (
      <tr>
        {heads.map((head) => (
          <th key={`${head} head`}>{head}</th>
        ))}
      </tr>
    );
  }
}

TableHead.propTypes = {
  dados: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHead;
