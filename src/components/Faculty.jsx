import React from 'react'
import styles from "../styles/Faculty/Faculty.module.css";

import img1 from "../assets/faculty/achalSir.jpeg";
import img2 from "../assets/faculty/monika maam.png";
import img3 from "../assets/faculty/shweta maam.png";

const Faculty = () => {
  return (
    <div className={styles.facultyDiv}>
        <div className={styles.heading}>
            <span>Our Faculty</span>
        </div>
        <div className={styles.main}>
            <div className={styles.imgDiv}>
                <img src={img1} alt="" className={styles.facultyImg} />
                <div className={styles.text}>
                    <span className={styles.des}>Branch Counsellor</span>
                    <span className={styles.des}>Dr. Achal Kaushik</span>
                    <span className={styles.des}>Dean Academics</span>
                </div>
            </div>
            <div className={styles.imgDiv}>
                <img src={img3} alt="" className={styles.facultyImg} />
                <div className={styles.text}>
                    <span className={styles.des}>Faculty Coordinator</span>
                    <span className={styles.des}>Dr. Shweta Taneja</span>
                    <span className={styles.des}>HOD CSE</span>
                </div>
            </div>
            <div className={styles.imgDiv}>
                
                <img src={img2} alt="" className={styles.facultyImg} />
                <div className={styles.text}>
                    <span className={styles.des}>Faculty Coordinator</span>
                    <span className={styles.des}>Dr. Monika Arora</span>
                    <span className={styles.des}>Associate Professor - IT</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faculty
