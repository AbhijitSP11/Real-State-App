import React from 'react'
import { BsShare, BsStar } from 'react-icons/bs'
import { GiBathtub, GiPathDistance } from 'react-icons/gi'
import {IoBed} from 'react-icons/io5'
import Search from '../Search'
import styles from './styles.module.scss'

function Explore() {
  return (
    <div>
        <div className={styles.container}>
        <div className={styles.explore}>
        <h2>Explore</h2>
        </div>
         <Search/> 

        <h1>

          Find in your area. 
        </h1>
        <div className={styles.wrapper}>
        <div className={styles.left}>
        <img className={styles.image} src='https://img.freepik.com/premium-vector/abstract-city-map-with-pins-navigation-app_95169-1513.jpg?w=2000' alt=''/>
        <div>
        
        </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
            <div className={styles.column}>
            <img className={styles.columnImg} src='https://images.pexels.com/photos/6585600/pexels-photo-6585600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            </div>
            <div className={styles.column}>
                <div className={styles.row}>
                    <img className={styles.rowImg} src='https://images.pexels.com/photos/7340487/pexels-photo-7340487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                </div>
                <div className={styles.row}>
                <img className={styles.rowImg} src='https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                </div>
                <div className={styles.row}>
                <img className={styles.rowImg} src='https://images.pexels.com/photos/2959583/pexels-photo-2959583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                </div>
            </div>
            </div>
            <div className={styles.ratings}>
            <div><h2>Aston villa, New Downtown  </h2></div>
            <div><BsShare/></div>
            <div><BsStar/></div>
            </div>
            <div className={styles.ratings}>
            <div>
                <span style={{'fontWeight' : 800, 'fontSize': "1.5rem"}}>$ 4,32000 | </span>
                <span> <GiBathtub/> 5 </span>
                <span><IoBed/> 10 </span>
                <span><GiPathDistance/> 500 km</span>
            </div>            
            </div>
            <button className={styles.button}>See more details</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Explore