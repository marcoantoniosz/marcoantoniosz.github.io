import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import MenuMobile from '../../components/menu';
import Header from '../../components/header';
import Card from '../../components/card'
import Footer from '../../components/footer';
import projectsMage from '../../images/PROJETOS.png';
import style from './style.module.css';
import data from '../../data/projectsdata';

export default function Projects() {
  const { menuOn } = useContext(MyContext);
  const mainPage = (
    <main className={ style.projectsMain }>
      <img className={ style.projectsLogo } src={ projectsMage } alt="projects-mage" />
        <h1 className={ style.title }>
          Meus projetos
        </h1>
        <div className={ style.projects }>
          { data.map(project => (
            <Card 
            key={ project.title }
            title={ project.title }
            description={ project.description }
            img={ project.image }
            techs={ project.techs }
            stack={ project.stack }
            link={ project.url }
             />
          )) }
        </div>
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
