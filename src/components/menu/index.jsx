import React, { useContext } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import MyContext from '../../context/MyContext';

export default function MenuMobile() {
  const { menuOn, setMenu } = useContext(MyContext);
  const toggleMenu = () => setMenu(!menuOn);
  return (
      <nav className={ style.navMobile }>
        <ul className={ style.aUl }>
          <li>
            <Link onClick={ toggleMenu } to="/">home</Link>
          </li>
          <li>
            <Link onClick={ toggleMenu } to="/about">sobre</Link>
          </li>
          <li>
            <Link onClick={ toggleMenu } to="/projects">projetos</Link>
          </li>
          <li>
            <Link onClick={ toggleMenu } to="/contact">contato</Link>
          </li>
        </ul>
      </nav>
  )
}
