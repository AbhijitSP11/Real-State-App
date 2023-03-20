import styles from './styles.module.scss'
import React from 'react'
import Card from '../Service/Card'

function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h1>Your first and <span className={styles.last}> last </span> stop  <br/> for all real estate <br/> information in the area.</h1>
        </div>
        <div className={styles.right}>
            <p>We offer expert guidance on all aspects of your transaction so that  you can feel secure in your decision and confident in our work.</p>
        </div>
    </div>
    
  )
}

export default Hero