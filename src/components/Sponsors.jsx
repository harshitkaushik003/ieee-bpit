import React from 'react'
import styles from "../styles/Sponsors/Sponsors.module.css";
import { sponsors } from '../app/data';
const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
        <div className={styles.heading}>
            <span>Our Partners</span>
        </div>
        <div className={styles.sponsorIconsDiv}>
            <div className={styles.scrollDiv}>
                {sponsors.map(item=>(
                    <div className={styles.imgDiv}>
                        <img src={item} alt="" className={styles.sponsorImg} />
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Sponsors
