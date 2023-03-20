import styles from './styles.module.scss'
import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

function FooterComp() {
  return (
        <footer className={styles.container}>
            <div className={styles.left} >
            <div>
                <h2>theState</h2>
                <p>We offer expert guidance on all aspects of your transaction so that you can feel secure in your decision and confident in our work.</p>
            </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.content}>
                    <h2>Useful links</h2>
                    <p><MdOutlineKeyboardArrowRight/> About Us</p>
                    <p><MdOutlineKeyboardArrowRight/> How we work</p>
                    <p><MdOutlineKeyboardArrowRight/> Terms & Conditions</p>
                    <p><MdOutlineKeyboardArrowRight/> FAQ</p>
                </div>
                <div className={styles.content}>
                    <h2>Content</h2>
                    <p><MdOutlineKeyboardArrowRight/> Home</p>
                    <p><MdOutlineKeyboardArrowRight/> Browse Product</p>
                    <p><MdOutlineKeyboardArrowRight/> Blog</p>
                </div>
                <div className={styles.content}>
                    <h2>Contact Us</h2>
                    <p><MdOutlineKeyboardArrowRight/> @gmail.com</p>
                    <p><MdOutlineKeyboardArrowRight/> 265-65-56652</p>
                    <p><MdOutlineKeyboardArrowRight/> Social Media</p>
                    <p><MdOutlineKeyboardArrowRight/> Unsubscribe mail</p>
                </div>
            </div>
        </footer>
  )
}

export default FooterComp