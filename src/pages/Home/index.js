import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Loading from '../../components/Laoading';
import './styles.css';
import {
  fetchRegion,
} from '../../store/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      region: '',
    };
    this.handChange = this.handChange.bind(this);
    this.handClick = this.handClick.bind(this);
  }

  // componentDidMount() {
  //   const {
  //     setDataRegion,
  //     setDataCapital,
  //     setDataLanguage,
  //     setDataPhone,
  //     setDataCountry,
  //   } = this.props;
  //   setDataRegion('europe');
  //   setDataCapital('tallinn');
  //   setDataLanguage('eng');
  //   setDataPhone('372');
  //   setDataCountry('br');
  // }

  handChange({ target: { value, id } }) {
    if (value !== 'option-filter' && id === 'select-filter') {
      this.setState({ filter: value });
    }
    if (value !== 'option-region' && id === 'select-region') {
      this.setState({ region: value }); // refatorar
    }
  }

  handClick() {
    const { setDataRegion } = this.props;
    const { region } = this.state;
    if (!region) return;
    setDataRegion(region);
  }

  renderFlags(stateRegion) {
    return (
      <div>
        { stateRegion.map((element, index) => (
          <Link
            to={ { pathname: '/details', name: element.name } }
            key={ index }
          >
            <img
              className="bandeiras"
              alt="flag"
              key={ index }
              src={ element.flag }
            />
          </Link>
        )) }
      </div>
    );
  }

  render() {
    const { filter, region } = this.state;
    const { stateRegion } = this.props;
    if (stateRegion.length < 1) return <Loading />;
    return (
      <div>
        <Header />
        <main className="mainHome">
          <label htmlFor="select-filter">
            <div>Filtrar por:</div>
            <select id="select-filter" valeu={ filter } onChange={ this.handChange }>
              <option value="option-filter">Escolha uma opção</option>
              <option value="region">Região</option>
              <option value="capital">Capital</option>
              <option value="language">Língua</option>
              <option value="country">País</option>
              <option value="cod">Código de ligação</option>
            </select>
          </label>
          <label htmlFor="select-region">
            <div>Região</div>
            <select id="select-region" value={ region } onChange={ this.handChange }>
              <option value="option-region">Escolha uma opção</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
          <button
            type="button"
            className="buttonPesquisar"
            onClick={ this.handClick }
          >
            Pesquisar
          </button>
        </main>
        <div className="main-bandeiras">
          { stateRegion && this.renderFlags(stateRegion) }
        </div>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDataRegion: (region) => dispatch(fetchRegion(region)),
});

const mapStateToProps = (state) => ({
  stateRegion: state.reducerRegion.region,
});

Home.propTypes = {
  setDataRegion: PropTypes.func,
  stateRegion: PropTypes.arrayOf({}),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
