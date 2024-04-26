import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home/Home.module.css';
import About from '../components/About';
import Sponsors from '../components/Sponsors';
import Faculty from '../components/Faculty';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';
import Links from '../components/Links';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <About/>
      <Faculty/>
      <Sponsors/>
      <Links/>
      <Achievements/>
    </div>
  )
}

export default Home
