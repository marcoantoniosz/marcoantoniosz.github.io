import React from 'react';
import GitHubIcon from '../../images/github-brands.svg';
import LinkedInIcon from '../../images/linkedin-brands.svg';
import style from './style.module.css';


export default function Footer() {
  return (
    <footer>
      <div className={ style.iconsContainer }>
        <a target="_blank" href="https://github.com/marcoantoniosz" rel="noreferrer">
          <img className={ style.footerIcon } src={ GitHubIcon } alt="github-icon" />
        </a>
        <p>
          me encontre
        </p>
        <a target="_blank" href="https://www.linkedin.com/in/marcoantoniosz/" rel="noreferrer">
         <img className={ style.footerIcon } src={ LinkedInIcon } alt="linkedin-icon" />
        </a>
      </div>
    </footer>
  )
}
