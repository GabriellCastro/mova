import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Loading from '../../components/Laoading';
import { getByCountry } from '../../services/api';
import './styles.css';
import {
  fetchCountry,
} from '../../store/actions';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borders: '',
    };
    this.handleBorders = this.handleBorders.bind(this);
  }

  componentDidMount() {
    const { location: { name }, setDataCountry } = this.props;
    console.log(name);
    setDataCountry(name);
  }

  async handleBorders(bordersList) {
    const { borders } = this.state;
    const error = 404;
    if (borders) return;
    const newBorders = [];
    await bordersList.forEach(async (border) => {
      const response = await getByCountry(border);
      if (response.status === error) {
        console.log('errou');
      } else {
        console.log('foi');
        newBorders.push(response[0]);
      }
      console.log(newBorders);
      this.setState({ borders: newBorders });
    });
  }

  render() {
    const { dataCountry } = this.props;
    const { borders } = this.state;
    const error = 404;
    if (dataCountry.length < 1 || dataCountry.status === error) return <Loading />;
    console.log(dataCountry);
    this.handleBorders(dataCountry[0].borders);
    return (
      <div>
        <Header />
        <div className="main-details ">
          <img className="img-details" alt="pais bandeira" src={ dataCountry[0].flag } />
          <ul className="list-details">
            <li>
              Nome:
              {' '}
              {dataCountry[0].name}
            </li>
            <li>
              Capital:
              {' '}
              {dataCountry[0].capital}
            </li>
            <li>
              Região:
              {' '}
              {dataCountry[0].region}
            </li>
            <li>
              Sub-região:
              {' '}
              {dataCountry[0].subregion}
            </li>
            <li>
              População:
              {' '}
              {dataCountry[0].population}
            </li>
            <li>
              Lingua:
              {' '}
              {dataCountry[0].languages[0].name}
            </li>
          </ul>
        </div>
        <p className="p-vizinhos">Países Vizinhos:</p>
        <div className="main-vizinhos">
          {borders && borders.map((country) => (
            <img
              key={ Math.random() }
              className="img-vizinhos"
              alt="paises vizinhos"
              src={ country.flag }
            />))}
        </div>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  dataCountry: state.reducerCountry.country,
});

const mapDispatchToProps = (dispatch) => ({
  setDataCountry: (country) => dispatch(fetchCountry(country)),
});

Details.propTypes = {
  setDataCountry: PropTypes.func.isRequired,
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  dataCountry: PropTypes.arrayOf({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
