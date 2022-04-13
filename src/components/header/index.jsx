import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../images/LOGO.png';


export default function Header() {
  return (
    <header>
      <div className="logoContainer">
        <img className="headLogo" src={ logo } alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">sobre</Link>
          </li>
          <li>
            <Link to="/projects">projetos</Link>
          </li>
          <li>
            <Link to="/contact">contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
