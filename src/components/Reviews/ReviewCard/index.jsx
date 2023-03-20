import React from 'react'
import { BsStar } from 'react-icons/bs'
import styles from './styles.module.scss'

function ReviewCard({name, handle, image, description}) {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div>
            <h3>{name}</h3>
            <p>@{handle}</p>
            </div>
            <div>
                <img className={styles.image} src={image} alt="" />
            </div>
            
        </div>
        <div className={styles.down}>
            <div><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/> 5.0</div>
            <div><p>{description}</p></div>
        </div>
    </div>
  )
}

export default ReviewCard