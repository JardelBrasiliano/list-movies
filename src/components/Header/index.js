import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import Button from '../Button';

import './styles.css';

export default function Header() {
  return (
    <header className="Header-container">
      <div className="Header-content">
        <div className="Header-content-left">
          <div className="Header-content-left-logo">
            <img src={logo} alt="" />
          </div>
          <Link to="/pokemon/">Pokémons</Link>
          <Link to="/my-fast-deck">Deck rápido</Link>
        </div>
        <div className="Header-content-right">
          <Link to="/login">Login</Link>
          <Button>Cadastrar</Button>
        </div>
      </div>
    </header>
  );
}
