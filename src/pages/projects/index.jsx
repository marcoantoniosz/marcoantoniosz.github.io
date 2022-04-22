import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import MenuMobile from '../../components/menu';
import Header from '../../components/header';
import Footer from '../../components/footer';
import projectsMage from '../../images/PROJETOS.png';
import style from './style.module.css';

export default function Projects() {
  const { menuOn } = useContext(MyContext);
  const mainPage = (
    <main className={ style.projectsMain }>
      <section className={ style.projectsContainer }>
        <h1>
          Meus projetos
        </h1>
        <div className={ style.line } />
        <ul>
          <li>
            <a target="_blank" href="https://marcoantoniosz.github.io/itony/" rel="noreferrer"> iTony</a>
          </li>
          <li>
            <a target="_blank" href="https://marcoantoniosz.github.io/tryvia/" rel="noreferrer">Tryvia</a>
          </li>
          <li>
            <a target="_blank" href="https://marcoantoniosz.github.io/pocket-cauldron/" rel="noreferrer">Pocket Cauldron</a>
          </li>
        </ul>
      </section>
      <img className={ style.projectsLogo } src={ projectsMage } alt="projects-mage" />
    </main>
  );
  return (
    <>
    <Header />
    { menuOn ? <MenuMobile /> : mainPage }
    { menuOn ? undefined : <Footer /> }
  </>
  )
}
