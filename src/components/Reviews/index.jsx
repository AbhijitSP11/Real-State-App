import styles from './styles.module.scss'

import React from 'react'
import ReviewCard from './ReviewCard'

function Reviews() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h2 className={styles.heading1}>User Reviews</h2>
            <h1 className={styles.heading2}>What they say</h1>
            <div>
                <img className={styles.image} src="https://static.vecteezy.com/system/resources/previews/002/292/662/original/people-avatar-collection-free-vector.jpg" alt="" />
            </div>
            <p>Whether they are looking for a new place to call home, or just want to do a little remodeling on your current abode, we'll make sure you find exactly what you want.  </p>
            <button className={styles.button}>Read all Reviews</button>
        </div>
        <div className={styles.right}>
            <div className={styles.column}>
                <div className={styles.row}>
                    <ReviewCard name={"Alex Williams"} handle={"alex_will"} image={"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600"} description={"I recently used a real estate website to search for my dream home and I must say that my experience was nothing short of excellent. The website was user-friendly and easy to navigate, allowing me to quickly narrow down my search by location, price range, and property type."} />
                </div>
                <div className={styles.row}>
                <ReviewCard name={"Alex Williams"} handle={"alex_will"} image={"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600"} description={"I recently used a real estate website to search for my dream home and I must say that my experience was nothing short of excellent. The website was user-friendly and easy to navigate, allowing me to quickly narrow down my search by location, price range, and property type."} />
                </div>
            </div>
            <div className={styles.column}>
            <div className={styles.row}>
            <ReviewCard name={"Alex Williams"} handle={"alex_will"} image={"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600"} description={"I recently used a real estate website to search for my dream home and I must say that my experience was nothing short of excellent. The website was user-friendly and easy to navigate, allowing me to quickly narrow down my search by location, price range, and property type."} />
            </div>
                
            </div>
        </div>
    </div>
  )
}

export default Reviews