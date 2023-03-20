import styles from './styles.module.scss'
import React from 'react'
 
function Navbar() {
   return (
    <div className={styles.container}>
        <h2 className={styles.heading}>the state</h2>
    <div className={styles.linksContainer}>
    <div>
        <ul className={styles.links}>
            <li>Home</li>
            <li>About us </li>
            <li>Service</li>
            <li>Explore</li>
            <li>Contact us</li>
        </ul>
     </div>
     <div className={styles.button1}>
     <div>Get Started</div>
    </div>
    </div>
  
    </div>

   )
 }
 
 export default Navbar