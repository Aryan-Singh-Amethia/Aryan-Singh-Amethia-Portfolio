import React, { Fragment } from "react";
import classes from "./about.module.css";
import { useTypewriter , Cursor} from "react-simple-typewriter";
import Dailogue from '@/components/about/dialogue'
import { isMobile } from "react-device-detect";

const About = () => {

  const [text] = useTypewriter({
    words : ['FRONTEND','FULL-STACK','CODER','LEARNER'],
    loop : {}
  });

  return (
    <div className={classes.second_row}>
    <div className={classes.about_container}>   
      <span className={classes.about_wrapper}>
        {`<  ${text}`} 
        <Cursor cursorColor="white" cursorStyle={'|'}/> 
        {` >`}
      </span>
    </div>
     <Dailogue/>
    </div>
  );
};

export default About;
