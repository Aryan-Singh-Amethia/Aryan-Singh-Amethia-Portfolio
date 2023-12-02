import { useEffect } from "react";
import styles from "./rotatingLogo.module.css";

const RotatingLogo = ()=>{

    const myIntro = 'Aryan Singh Amethia-UI/UX | Frontend . ';

   return(
    <div className={styles.body}>
      <div className={styles.circle}>
        <div className={styles.innerCta}>Hire Me</div>
        <div className={styles.text}>
            <p>
                {
                 myIntro.split('')
                         .map((c,i)=>{
                           console.log(''); 
                          return <span style={{transform:`rotate(${i*9.5}deg)`}}>{c}</span>
                        })
                }
            </p>
        </div>
      </div>
    </div>);
}

export default RotatingLogo;