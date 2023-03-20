import styles from './styles.module.scss'
import {SlBadge} from 'react-icons/sl'
import React from 'react'
import Card from './Card'

function Service() {
  return (
    <div className={styles.container}>
        <Card icon={<SlBadge/>} heading={"Professional Company"} para={"If you are a traveller, your dream is to feel at home as much as you can anywhere you go"}/>
        <Card icon={<SlBadge/>} heading={"Professional Company"} para={"If you are a traveller, your dream is to feel at home as much as you can anywhere you go"}/>
        <Card icon={<SlBadge/>} heading={"Professional Company"} para={"If you are a traveller, your dream is to feel at home as much as you can anywhere you go"}/>
        <Card icon={<SlBadge/>} heading={"Professional Company"} para={"If you are a traveller, your dream is to feel at home as much as you can anywhere you go"}/>
        
    </div>
  )
}

export default Service