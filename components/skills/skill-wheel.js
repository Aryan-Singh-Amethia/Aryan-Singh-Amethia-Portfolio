import React from 'react';
import styles from './skill-wheel.module.css';
import Wheel from './wheel';
import Image from 'next/image';
  
const SkillWheel = () => {

  return (
    <div className={styles.skills}>
      <Image
         src={'/logic-vs-imagination.webp'} 
         alt="Aryan Singh Amethia's portfolio image"
         layout='fill'
         />
    </div>
  );

}

export default SkillWheel;