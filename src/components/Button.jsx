import React from 'react'
import styles from "../styles/Button/Button.module.css";
const Button = ({title, color}) => {
  return (
    <div className={styles.btn} style={{backgroundColor: `${color}`}}>
       <span>{title}</span>
    </div>
  )
}

export default Button
