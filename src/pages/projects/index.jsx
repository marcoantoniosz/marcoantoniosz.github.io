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
      <img className={ style.projectsLogo } src={ projectsMage } alt="projects-mage" />
    </main>
    <Footer />
  </>
  )
}
