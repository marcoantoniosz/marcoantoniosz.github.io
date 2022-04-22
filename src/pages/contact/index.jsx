import React, { useRef, useContext } from 'react';
import MyContext from '../../context/MyContext';
import MenuMobile from '../../components/menu';
import Header from '../../components/header';
import Footer from '../../components/footer';
import contactMage from '../../images/CONTATO.png';
import style from './style.module.css';
import emailjs from 'emailjs-com';

export default function Contact() {
  const { menuOn } = useContext(MyContext);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_23aq96b', 'template_hlct6xp', form.current, 'zisHxAL3L-d8HRlge')
      .then((result) => {
          alert('Mensagem enviada! :)')
      }, (error) => {
          alert(error.text);
      });
      e.target.reset();
  };
  const mainPage = (
    <main className={ style.contactMain }>
      <img className={ style.contactMage } src={ contactMage } alt="contact-mage" />
      <form onSubmit={ sendEmail } ref={ form } className={ style.contactForm }>
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
        <button value="Send" type="submit">Enviar</button>
      </form>
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
