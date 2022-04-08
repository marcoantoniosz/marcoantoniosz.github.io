import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import logo from '../../images/LOGO.png';

export default function Header() {
  return (
    <header>
      <div className={ style.logoContainer }>
        <img className={ style.headLogo } src={ logo } alt="logo" />
      </div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">sobre</Link>
        <Link to="/projects">projetos</Link>
        <Link to="/contact">contato</Link>
      </nav>
    </header>
  )
}
