import React from 'react'
import styles from '../styles/Card/Card.module.css';

const Card = ({item}) => {
  return (
    <div className={styles.card}>
        <div className={styles.imgDiv}>
            <img src={item.img} alt="" />
        </div>
        <div className={styles.contentDiv}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.award}>{item.award}</span>
        </div>
    </div>
  )
}

export default Card
