import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import MenuMobile from '../../components/menu';
import Header from '../../components/header';
import Footer from '../../components/footer';
import homeMage from '../../images/HOME.png';
import style from './style.module.css';


export default function Home() {
  const { menuOn } = useContext(MyContext);
  
  const mainPage = 
  ( 
    <main className={ style.homeContainer }>
      <div className={ style.homeInfo }>
        <section className={ style.texts }>
          <h1>Olá, mundo!</h1>
          <p>Me chamo Marco Souza.</p>
          <p>Sou estudante de Desenvolvimento Web Full Stack. </p>
        </section>
      </div>
      <img className={ style.homeMage } id={ style.homeMage } src={ homeMage } alt="home-mage" />
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
