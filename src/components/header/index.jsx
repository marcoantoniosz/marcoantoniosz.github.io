import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import logo from '../../images/LOGO.png';
import { Squash as Hamburger } from 'hamburger-react';
import MyContext from '../../context/MyContext';


export default function Header() {
  const { menuOn, setMenu } = useContext(MyContext);
  return (
    <header className={style.header }>
      <div className="logoContainer">
        <Link to="/">
        <img className={ style.headLogo } src={ logo } alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className={ style.aUl }>
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
        <div className={ style.hamburguer }>
          <Hamburger easing="ease-in" size={ 29 } toggled={menuOn} toggle={setMenu} />
        </div>
      </nav>
    </header>
  )
}
