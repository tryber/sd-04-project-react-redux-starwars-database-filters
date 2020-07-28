import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { trataOrdem } from '../actions/index';

class Ordenador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opt: '',
      radio: '',
    };
    this.handleopt = this.handleopt.bind(this);
    this.handleradio = this.handleradio.bind(this);
  }

  handleopt(event) {
    this.setState({
      opt: event.target.value,
    });
  }

  handleradio(event) {
    this.setState({
      radio: event.target.value,
    });
  }

  render() {
    const options = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
      'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url',
    ];
    const { opt, radio } = this.state;
    const { trataOrdem1 } = this.props;
    return (
      <form>
        <select value={opt} onChange={this.handleopt} data-testid="column-sort">
          {options.map((ele) => (<option value={ele}>{ele}</option>))};
        </select>
        <label htmlFor='radio'>ASC
          <input
            value={radio} onClick={this.handleradio} data-testid="column-sort-input"q
            type="radio" name="radio" value="ASC"
          />
        </label>
        <label htmlFor='radio'>DESC
          <input
            value={radio} onClick={this.handleradio} data-testid="column-sort-input"
            type="radio" name="radio" value="DESC"
          />
        </label>            
          <button
            type="button" data-testid="column-sort-button" onClick={() => trataOrdem1(opt, radio)}
          >Filtrar
          </button>
      </form>
    )
  }
}

Ordenador.propTypes = {
  trataOrdem1: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  trataOrdem1: (opt, radio) => dispatch(trataOrdem(opt, radio)),
});

const mapStateToProps = (state) => ({
  options: state.filters.options,
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordenador);