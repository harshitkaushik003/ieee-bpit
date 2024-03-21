import React from 'react'
import styles from "../styles/Header/Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.left}></div>
        <div className={styles.right}>
            <div className={styles.slant}></div>
        </div>
    </div>
  )
}

export default Header
