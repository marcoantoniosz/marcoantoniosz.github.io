import React from 'react';
import style from './style.module.css';

export default function Card(props) {
  const { title, img, description, techs, stack, link} = props;

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div onClick={ handleClick } className={ style.card }>
      <div className={ style.imageContainer }>
        <img className={ style.image } src={ img } alt={ title } />
      </div>
      <div className={ style.pContainer }>
        <div className={ style.line} />
        <p className={ style.description }>{ description }</p>
        <div className={ style.line} />
      </div>
      <ul className={ style.techs }>
        <li className={ style.li }>
          { techs.map(tech => <li key={ tech }>{ tech }</li>) }
        </li>
      </ul>
      <p className={ style.stack }>{ stack }</p>
    </div>
  )
}
