import React from 'react'
import styles from "../styles/TeamMain/TeamMain.module.css";
import { team } from '../app/team';
import TeamCard from './TeamCard';
const TeamMain = () => {
  return (
    <div className={styles.teamMain}>
        {team.map(member=>(
          <TeamCard member={member}/>
        ))}
    </div>
  )
}

export default TeamMain
