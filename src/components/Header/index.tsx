import React from "react";

import "./styles.css";

import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header id="menu">
      <div className="wrapper">
        <img className="logo" alt="Logo Spotify" />

        <nav>
          <a href="">Premium</a>
          <a href="/sobre">Suporte</a>
          <a href="">Baixar</a>
          <span className="divisor"></span>
          <a href="">Inscrever-se</a>
          <a href="">Entrar</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;