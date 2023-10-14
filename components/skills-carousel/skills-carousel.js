import React, { useEffect } from "react";
import styles from "./skills-carousel.module.css";
import Image from "next/image";

const SKILL_LOGOS = [
  "skills-css.png",
  "skills-html.png",
  "skills-java.png",
  "skills-javascript.png",  
  "skills-mongodb.png",
  "skills-nextJS.png",
  "skills-react.png",
  "skills-mySQL.png",
  "skills-oracle.png",
  "skills-git.png",
  "skills-bitbucket.png",
  "skills-jenkins.png",
  "skills-firebase.png",
  "skills-redux.png",
  "skills-express.png",
  "skills-node.png"
];

const SkillsCarousel = () => {
  let my_skills = SKILL_LOGOS.map((skill) => (
    <div key={skill} className='skill_image_card' style={{ height: "100%", width: "25%", margin: "0 1.5em 0 1.5em" }}>
      <img src={"/skills/" + skill} alt={skill} />
    </div>
  ));

  // useEffect(()=>{
  //   const cards = document.querySelectorAll(".skill_image_card");

  //   const observer = new IntersectionObserver(entries =>{
  //     console.log(entries);
  //   });
  
  //   observer.observe(cards[0]);
  // });

  return (
    <div className={styles.skills_carousel_container}>
      <div className={styles.carousel_logos}>
        {my_skills.concat(my_skills).map(skill=>(skill))}
      </div>
    </div>
  );
};

export default SkillsCarousel;

