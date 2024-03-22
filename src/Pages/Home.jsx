import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home/Home.module.css';
import About from '../components/About';
import Sponsors from '../components/Sponsors';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <About/>
      <Sponsors/>
    </div>
  )
}

export default Home
