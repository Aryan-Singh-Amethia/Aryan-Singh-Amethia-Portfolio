import React from 'react';
import styles from './skill-wheel.module.css';
import Wheel from './wheel';

const SkillWheel = () => {

  return (
    <div className={styles.skills}>
      <WheelConatiner/>
      <Text/>
    </div>
  );

}

const WheelConatiner = () =>{
  return ( 
    <div className={styles.container}>
       <Wheel/>
    </div>
  )
}

const Text = () => {
  return(
    <div className={styles.skills_text}>
         <h2>SKILLS</h2>
    </div>);
}



export default SkillWheel;