import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import homeMage from '../../images/HOME.png';
import style from './style.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={ style.homeContainer }>
        <img className={ style.homeMage } src={ homeMage } alt="home-mage" />
        <div className={ style.homeInfo }>
          <section className={ style.texts }>
            <h1>{"Olá, mundo!"}</h1>
            <p>Me chamo Marco Souza.</p>
            <p>Sou estudante de Desenvolvimento Web Full Stack. </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
