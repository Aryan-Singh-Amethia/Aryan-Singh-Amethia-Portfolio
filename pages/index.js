  import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Hero from '@/components/hero/hero.js'
import About from   '@/components/about/about'
import Dailogue from '@/components/about/dialogue'
import SkillWheel from '@/components/skills/skill-wheel'
import SkillsCarousel from '@/components/skills-carousel/skills-carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
       <Hero/>
       <About/> 
       <Dailogue/>
       <SkillsCarousel/>
       <SkillWheel/>
    </Fragment>
  );
}
