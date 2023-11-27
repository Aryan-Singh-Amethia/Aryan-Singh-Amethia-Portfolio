import React from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import Drawer from "./drawer";

const Navbar = () => {

  const socials = ['github','leetcode.png','linkedin','instagram'];

  return (
    <header className={classes.navbar_container}>
      <nav className={classes.navbar_main}>
        <div className={classes.navbar_drawer}>
          <Drawer />
        </div>
        {/* <div className={classes.navbar_title}>
              <h1>Aryan Singh Amethia</h1>
            </div> */}
        <div className={classes.navbar_options_container}>
          <h2 className={classes.navbar_options}>Home</h2>
          <h2 className={classes.navbar_options}>About</h2>
          <h2 className={classes.navbar_options}>Projects</h2>
          <h2 className={classes.navbar_options}>Others</h2>
        </div>
        {/* <div className={classes.navbar_signature_icon}>
           <Image
             src="/aryan-logo.png"
             alt="Aryan Singh Amethia Logo"
             width={200}
             height={200}
             />
        </div> */}
        <div className={classes.navbar_socials_container}>           
           {socials.map(social=>(
            <div className={classes.navbar_social_container}>
              <Image src={`/${social.includes('png')?social:social+'.svg'}`} alt={social} fill={true} objectFit="contain"/>
           </div>
           ))} 
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
