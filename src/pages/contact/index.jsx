import React from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';
import contactMage from '../../images/CONTATO.png';
import style from './style.module.css';

export default function Contact() {
  return (
    <>
    <Header />
    <main>
      <img className={ style.contactMage } src={ contactMage } alt="contact-mage" />
      <form action="https://api.staticforms.xyz/submit" method="post" className={ style.contactForm }>
        <input type="hidden" name="accessKey" value='1aadecc7-f186-4e91-ae30-dd5e4de5cd39' />
        <input type="hidden" name="redirectTo" value="http://localhost:3000/" />
        <h1>Me envie uma mensagem</h1>
        <div className={ style.line } />
          <label htmlFor="name-input">
            <input type="text" name="name" id="name-input" placeholder="Nome" required />
          </label>
          <label htmlFor="email-input">
            <input type="email" name="email" id="email-input" placeholder="Email" required />
          </label>
          <label htmlFor="message-input">
            <textarea placeholder="Mensagem" name="message" id="message-input" cols="30" rows="10" required />
          </label>
        <button type="submit">Enviar</button>
      </form>
    </main>
    <Footer />
  </>
  )
}
