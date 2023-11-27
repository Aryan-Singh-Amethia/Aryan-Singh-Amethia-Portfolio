import React from 'react'
import styles from './NewHero.module.css'
import Image from 'next/image'

const NewHero = () => {
  return (
    <div className={styles.newhero_container}>
       <div className={styles.newhero_frame}>
          <Image 
            src={'/aryan-singh-amethia-portfolio-image.jpg'}
            alt={'aryan-singh-amethia-portfolio-image'}
            fill={true}
            objectFit={'contain'}
            objectPosition={'center'}
            />
        </div>  
    </div>
  )
}

export default NewHero