import React from 'react'
import styles from "../styles/Links/Links.module.css";
import {links} from "../app/data";
import { Link } from 'react-router-dom';
const Links = () => {
  return (
    <div className={styles.links}>
      <div className={styles.heading}>
        <span>Our Websites</span>
      </div>
      <div className={styles.main}>
        {links.map(item => (
            <Link className={styles.link} to={item.link} target='_blank'>
                <img src={item.img} alt="" />
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Links
