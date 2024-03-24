import React from 'react'
import styles from '../styles/Achievements/Achievements.module.css';
import { awards } from '../app/data';
import Card from './Card';
const Achievements = () => {
  return (
    <div className={styles.mainBox}> 
        <div className={styles.heading}>
            <span>Achievements</span>
        </div>
        <div className={styles.box}>
            {awards.map(item=>(
                <Card item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Achievements
