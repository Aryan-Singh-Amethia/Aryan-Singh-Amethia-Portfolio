import { Inter } from 'next/font/google'
import About from   '@/components/about/about'
import NewHero from '@/components/hero/NewHero'
import RotatingLogo from '@/components/rotatingLogo/rotatingLogo'

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
        <RotatingLogo/>
        <NewHero/>
        <About/>
    </div>
  );
}
