import React, { useEffect, useState } from 'react'
import styles from "../styles/Header/Header.module.css"
import myImage from '../assets/team.jpg';
import Button from './Button';
const Header = () => {
  let [imgStyle, setImgStyle] = useState({opacity: 0});

  useEffect(()=>{
    setTimeout(()=>{
      setImgStyle({opacity: 1});
    }, 1000);
  }, []);

  return (
    <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.content}>
            <span className={styles.heading}>
              IEEE BPIT
            </span>
            <span className={styles.text}>
              Technology shapes the world
            </span>
            <Button title={"Apply Now"} color={"#ffc801"}/>
          </div>
          
        </div>
        <div className={styles.right}>
            <div className={styles.slant} ></div>
            <img src={myImage} alt="" style={imgStyle}/>
            
        </div>
    </div>
  )
}

export default Header
