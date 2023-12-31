import React from 'react'
import styles, { layout } from '../styles'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquam fugit facere assumenda ex. Repellendus, laudantium earum ipsum dolor suscipit voluptate quaerat temporibus, nisi quis quasi maxime, omnis ut nemo.</p>
            <Button styles='mt-10' />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="card" className='w-[100%] h-[100%]' />
        </div>
    </section>
)

export default CardDeal