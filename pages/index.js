import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Fragment } from 'react'
import Hero from '@/components/hero/hero.js'
import About from '@/components/about/about'
import Dailogue from '@/components/about/dialogue'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
       <Hero/>
       <About/> 
       <Dailogue/>
    </Fragment>
  );
}
