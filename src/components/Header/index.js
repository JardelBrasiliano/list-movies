import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './styles.css';

export default function Header() {
  return (
    <header className="Header-container">
      <div className="Header-content">
        <div className="Header-content-left">
          <div className="Header-content-left-logo">
            <img src={logo} alt="" />
          </div>
          <a href="/">Filmes</a>
          <a href="/">Series</a>
        </div>
        <div className="Header-content-right">
          <Link to="/login">Login</Link>
          <div className="Header-content-right-register">
            <p>Cadastrar</p>
          </div>
        </div>
      </div>
    </header>
  );
}
