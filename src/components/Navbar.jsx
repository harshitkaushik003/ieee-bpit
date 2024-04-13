import React, { useEffect, useState } from 'react'
import styles from '../styles/Navbar/Navbar.module.css';
import myImage from "../assets/logo.png";
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import icon from "../assets/hamburger.png";
const Navbar = () => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setOpacity(0); 
      } else {
        setOpacity(1); // Set opacity to 1 for wider screens
      }
    }

    // Call handleResize initially to set initial opacity based on screen width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleOpacity() {
    setOpacity(opacity === 0 ? 1 : 0);
  }
  return (
    <>
    <div className={styles.nav}>
        <div className={styles.logo}>
            <img src={myImage} alt="" />
            <Link className='link' to={"/"}>
              <span>IEEE BPIT</span>
            </Link>
            <img src={icon} alt="" className={styles.hamburger} onClick={handleOpacity}/>

        </div>
        <div className={styles.content} style={{opacity}}>
            <div className={styles.text}><span>Events</span></div>
            <Link className='link' to={"/team"}><div className={styles.text}><span>Team</span></div></Link>
            <div className={styles.text}><span>Projects</span></div>
            {/* <div className={styles.text}><span>Contact</span></div> */}
        </div>
    </div>
    <Outlet/>

    <Footer/>
    </>
    
  )
}

export default Navbar
