import React from 'react'
import styles from "../styles/Team/Team.module.css";
import TeamHeader from '../components/TeamHeader';
import TeamMain from '../components/TeamMain';
const Team = () => {
  return (
    <div className={styles.team}>
        <TeamHeader/>
        <TeamMain/>
    </div>
  )
}

export default Team
