import React from 'react'
import styles from './styles.module.scss'
function About() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.about}>
        <h2>About us</h2>
        </div>
        <div>
        <h1>We're here to <br/> help you find your <br/> dream home.</h1>
        </div>
        <div>
        <p>
            Whether you're looking for a new place to call home, or just want to <br/> do a little remodeling on your current abode,, we'll make sure you <br/> find exactly what you want. 
        </p>
        </div>
        <button className={styles.button}>
            Learn More
        </button>
        </div>
        <div className={styles.right}>
            <div className={styles.col}>
                <div className={styles.row}>
                    <img src='https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='House' className={styles.image}/>
                </div>
                <div className={styles.row}>
                <img src='https://images.pexels.com/photos/2805285/pexels-photo-2805285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='House' className={styles.image2}/>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.row}>
                <img src='https://images.pexels.com/photos/2421119/pexels-photo-2421119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='House' className={styles.image3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About