import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import Header from '../../components/header';
import Footer from '../../components/footer';
import aboutMage from '../../images/SOBRE.png';
import style from './style.module.css';
import MenuMobile from '../../components/menu';

export default function About() {
  const { menuOn } = useContext(MyContext);
  const mainPage = (
    <main className={ style.aboutMain }>
        <section className={ style.aboutMe }>
          <h1>Sobre mim</h1>
          <br />
          <div className={ style.line } />
          <br />
          <p>
            Me chamo Marco, tenho 22 anos, atualmente resido nas sempre ensolaradas terras do norte de Minas Gerais e nutro uma paixão desenfreada por tecnologia e tudo que possa me conectar a processos criativos em geral.
          </p>
          <br />
          <p>
          Sou estudante de desenvolvimento web full stack e tenho como objetivo construir ferramentas capazes de impactar e facilitar a vida das pessoas.
          </p>
        </section>
        <img className={ style.aboutMage } src={ aboutMage } alt="about-mage" />
        <section className={ style.skillsContainer }>
          <h1>Skills</h1>
          <br />
          <div className={ style.line } />
          <br />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git & Github</li>
            <li>Jest</li>
            <li>ReactJS</li>
            <li>RTL</li>
            <li>Redux</li>
            <li>React Hooks</li>
            <li>Bootstrap</li>
            <li>MySQL</li>
          </ul>
        </section>
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
