import React, { useEffect, useState } from 'react'
import styles from "../styles/About/About.module.css";

const About = () => {
    const [style, setStyle] = useState({opacity: 0, transform: 'translateY(100px)'});
    function handleScroll(){
        const scrollPosition = window.scrollY;
        if(scrollPosition > 450){
            setStyle({
                opacity: '1',
                transform: 'translateY(0)'
            })
        } 
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    }, [])
  return (
    <div className={styles.about}>
        <div className={styles.left}>
            <div className={styles.heading}>
                <span>About</span>
            </div>
            <div className={styles.content} style={style}>
                <p>
                IEEE BPIT is a Dynamic Technical Society affiliated with Bhagwan Parshuram Institute of Technology. Our mission is to provide students with invaluable technical knowledge to prepare them for future endeavors. We encourage participation in various technical and non-technical events to hone their skills and expand their knowledge.
                </p>
                <p>
                Our Primary Objective is to bridge the gap between academia and industry through our Industry-Institute programs, instilling technical competency and a corporate culture among our students. We promote collaborative learning and provide a platform for students to enhance their problem-solving abilities through shared knowledge and experiences.
                At IEEE BPIT, we aim to create awareness about the importance of technology and its impact on society. We equip our students with the necessary skills and knowledge to excel in their fields and contribute positively to the world. By fostering a culture of innovation and creativity, we encourage our students to become the next generation of leaders and pioneers in their respective domains.
                </p>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.rightContent}>
                <span className={styles.rightHeading}>Our Vision</span>
                <p>
                IEEE BPIT aims to make the students aware about the recent advances in technology and recognizes the contribution of technology and technical professionals in the global world
                </p>
                
            </div>
            <div className={styles.rightContent}>
                <span className={styles.rightHeading}>Our Mission</span>
                <p>
                1. To develop technical skills among the students.
                2. To conduct Industry-Institute interaction for developing technical competency and imbibing corporate culture among the students.
                3. To promote collaborative learning among the students.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
