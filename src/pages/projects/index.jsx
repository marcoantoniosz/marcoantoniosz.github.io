import React from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';
import projectsMage from '../../images/PROJETOS.png';
import style from './style.module.css';

export default function Projects() {
  return (
    <>
    <Header />
    <main>
      <section className={ style.projectsContainer }>
        <h1>
          Meus projetos
        </h1>
        <div className={ style.line } />
        <ul>
          <li>
            <a href="https://marcoantoniosz.github.io/itony/"> iTony</a>
          </li>
          <li>
            <a href="https://marcoantoniosz.github.io/tryvia/">Tryvia</a>
          </li>
          <li>
            <a href="https://marcoantoniosz.github.io/pocket-cauldron/">Pocket Cauldron</a>
          </li>
        </ul>
      </section>
      <img className={ style.projectsLogo } src={ projectsMage } alt="projects-mage" />
    </main>
    <Footer />
  </>
  )
}
