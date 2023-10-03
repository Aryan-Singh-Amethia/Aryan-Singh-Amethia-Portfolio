import React from 'react';
import styles from './skill-wheel.module.css';
import Wheel from './wheel';

const SkillWheel = () => {
  return ( 
    <div className={styles.container}>
       <Wheel/>
       <Text/>
    </div>
  )
}

const Text = () => {
    <section className={styles.skills}>
         <h2>SKILLS</h2>
    </section>
}

export default SkillWheel;