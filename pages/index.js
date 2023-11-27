import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Hero from '@/components/hero/hero.js'
import About from   '@/components/about/about'
import Dailogue from '@/components/about/dialogue'
import SkillsCarousel from '@/components/skills-carousel/skills-carousel'
import { isMobile } from 'react-device-detect'
import HeroBanner from '@/components/hero/HeroBanner'
import NewHero from '@/components/hero/NewHero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  //console.log("is Mobile :: ",isMobile);  
  return (
    // <Fragment>
    //    <div className='hero_container_grid'>
    //     <div className='hero_sub_1'>
    //       <Hero/>
    //     </div>
    //     <div className='hero_sub_2'>
    //     <HeroBanner/>
    //     </div>
    //     <div className='hero_sub_3'>
    //     <About/>
    //     </div>
    //    </div>
    //    {/* <Dailogue/> */}
    //    <SkillsCarousel/>
    //    {/* <SkillWheel/> */}
    // </Fragment> 
    <div className='home_container'>
        <NewHero/>
    </div>
  );
}
