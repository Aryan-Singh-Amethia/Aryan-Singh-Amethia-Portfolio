import React from 'react';
import styles from './skill-wheel.module.css';
import Wheel from './wheel';

const SkillWheel = () => {

  return (
    <div className={styles.skills}>
      <WheelConatiner/>
    </div>
  );

}

const WheelConatiner = () =>{
  return ( 
    <div className={styles.container}>
       {/* <Wheel/> */}
    </div>
  )
}

export default SkillWheel;