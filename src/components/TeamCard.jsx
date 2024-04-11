import React from 'react'
import styles from "../styles/TeamCard/TeamCard.module.css"
import { Link } from 'react-router-dom'
const TeamCard = ({member}) => {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
          <div className={styles.front}>
            <img src={member.img} alt="" />
          </div>
          <div className={styles.back}>
            <div className={styles.text}>
              <span>{member.position}</span>

            </div>
            <div className={styles.logos}>
              <Link to={member.ln} target='_blank'>
                <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
              </Link>
              <Link to={member.ig} target='_blank'  >
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        
        <span>{member.name}</span>
    </div>
  )
}

export default TeamCard
