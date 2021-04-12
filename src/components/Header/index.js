import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import returnlogo from '../../images/returnlogo.png';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src={ logo } alt="mova logo" />
        <Link to="/">
          <button className="voltar buttonBack" type="button">
            <img src={ returnlogo } alt="retorna logo" />
            Voltar
          </button>
        </Link>
      </header>
    );
  }
}

export default Header;
