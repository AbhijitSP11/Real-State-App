import React from 'react'
import {BsShare, BsStar} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import styles from './styles.module.scss'

function FeaturedCard({image, heading, type, price, location}) {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div>
                <img src={image} className={styles.image} alt='house'/>
             </div>
            <div>
                <h3>{type}</h3>
            </div>
            <div>
                <h2>{heading}</h2>
            </div>
            <div className={styles.info}>
                <h3>$ {price}</h3>
                <div>icons</div>
            </div>
            <div className={styles.location}>
            <div><ImLocation2/> St.Maria, California</div>
            <div className={styles.icons}>
            <div><BsShare/> </div>
            <div><BsStar/> </div> 
            </div>
            </div>
            <div className={styles.last}>
            <div>{location}</div>
            <div className={styles.button}>
             Send Offer
            </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard