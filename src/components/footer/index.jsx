import React from 'react';
import GitHubIcon from '../../images/github-brands.svg';
import LinkedInIcon from '../../images/linkedin-brands.svg';
import style from './style.module.css';


export default function Footer() {
  return (
    <footer>
      <div className={ style.iconsContainer }>
        <img className={ style.footerIcon } src={ GitHubIcon } alt="github-icon" />
        <p>
          me encontre
        </p>
        <img className={ style.footerIcon } src={ LinkedInIcon } alt="linkedin-icon" />
      </div>
    </footer>
  )
}
