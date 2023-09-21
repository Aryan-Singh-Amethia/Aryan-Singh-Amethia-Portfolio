import React from 'react'
import classes from './navbar.module.css'
import Image from 'next/image'
import Drawer from './drawer'

const Navbar = () => {
  return (
    <header className={classes.navbar_container}>
        <nav className={classes.navbar_main}>
            <div className={classes.navbar_drawer}>
              {<Drawer/>}
            </div>
            <div className={classes.navbar_title}>
               <h1>ARYAN SINGH AMETHIA</h1>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
