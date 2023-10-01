import React from 'react'
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={classes.hero_container}>
       <div className={classes.hero_image}>
          <Image
            src={'/aryan-qutab-minar-2022.jpg'}
            fill='true'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) (max-height: 900px) 50vw, 33vw"
            alt='Aryans Image'
          />
        </div> 
    </div>
  )
}

export default Hero