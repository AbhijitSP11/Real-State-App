import styles from './styles.module.scss'
import {SlBadge} from 'react-icons/sl'
import React from 'react'


function Card({icon, heading, para}) {
  return (
    <div>
        <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.icons}>
            {icon}
        </div>
        <div>
            <h3>{heading}</h3>
        </div>
        <div>
            <p>{para}</p>
        </div>

        </div>
    </div>
    </div>
  )
}

export default Card