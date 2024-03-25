import React from 'react'
import styles from '../styles/Navbar/Navbar.module.css';
import myImage from "../assets/logo.png";
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
const Navbar = () => {
  return (
    <>
    <div className={styles.nav}>
        <div className={styles.logo}>
            <img src={myImage} alt="" />
            <span>IEEE BPIT</span>
        </div>
        <div className={styles.content}>
            <div className={styles.text}><span>Events</span></div>
            <Link className='link' to={"/team"}><div className={styles.text}><span>Team</span></div></Link>
            <div className={styles.text}><span>Projects</span></div>
            <div className={styles.text}><span>Contact</span></div>
        </div>
    </div>
    <Outlet/>

    <Footer/>
    </>
    
  )
}

export default Navbar
