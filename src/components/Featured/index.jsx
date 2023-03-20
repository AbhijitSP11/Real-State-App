import React from 'react'
import styles from './styles.module.scss'
import FeaturedCard from './FeaturedCard'

function Featured() {
  return (
    <div className={styles.container}>
    <div className={styles.heading}>
    <div className={styles.column}>
      <h2 className={styles.featured}>Feature Place</h2>
      <h1>You might like this</h1>
      </div>
    <div>
      <button className={styles.button}>See more</button>
    </div>
    </div>
    <div className={styles.cards}>
        <FeaturedCard image={"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} type={"House"} heading={"Berry Plant Real Estate"} price={"12000"} location={"St.Maria, California"} />
        <FeaturedCard image={"https://images.pexels.com/photos/1397752/pexels-photo-1397752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} type={"Apartment"} heading={"Keller Wilson Reality"} price={"43200"} location={"St.Maria, California"} />
        <FeaturedCard image={"https://images.pexels.com/photos/2563339/pexels-photo-2563339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} type={"Penthouse"} heading={"Brooks Williams Estate"} price={"95000"} location={"St.Maria, California"} />
    </div>
    </div>
  )
}

export default Featured