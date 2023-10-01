import React from "react";
import classes from "./about.module.css";
import { useTypewriter , Cursor} from "react-simple-typewriter";

const About = () => {

  const [text] = useTypewriter({
    words : ['FRONTEND','FULL-STACK','CODER','LEARNER'],
    loop : {}
  });

  return (
    <div className={classes.about_container}>   
      <span className={classes.about_wrapper}>
        {`<  ${text}  >`}
        <Cursor cursorColor="white" cursorStyle={'|'}/> 
      </span>
    </div>
  );
};

export default About;
