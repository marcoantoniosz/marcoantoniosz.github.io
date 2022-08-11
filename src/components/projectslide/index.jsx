import React from 'react';
import { Fade } from 'react-slideshow-image';
import Card from '../card';
import 'react-slideshow-image/dist/styles.css';
import './style.css';

export default function Projectslide(props) {
  const { fadeProjects } = props;
  return (
    <div className="slide-container">
        <Fade>
        {fadeProjects.map((project, index) => (
          <div className="each-fade" key={index}>
            <Card 
              key={ project.title }
              title={ project.title }
              description={ project.description }
              img={ project.image }
              techs={ project.techs }
              stack={ project.stack }
              link={ project.url }
            />
          </div>
        ))}
      </Fade>
    </div>
  )
}