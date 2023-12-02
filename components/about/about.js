import styles from "./about.module.css";

const About = ()=>{

  //<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6"></path> </g></svg>

  return (
    <div className={styles.about_container}>
      <div className={styles.about_header}>
        <h1>Turning Vision Into Reality With Code And Design.</h1>
      </div>
      <div className={styles.about_paragraph}>
        <p>As a skilled full-stack developer , I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in Next.js and Web Development</p>
      </div>
      <div className={styles.about_contact}>
        <div className={styles.about_resume}>
           <span>Resume</span>
           <div className={styles.about_resume_svg}>
             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6"></path> </g></svg>
           </div>
        </div>
      </div>
    </div>
  );
}

export default About;