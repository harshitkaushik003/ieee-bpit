import React, { useEffect, useState } from 'react';
import styles from "../styles/TeamHeader/TeamHeader.module.css";

const TeamHeader = () => {
    const [heading, setHeading] = useState('');

    useEffect(() => {
        const text = "MEET THE TEAM";
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setHeading(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 200); 
        
        
        return () => clearInterval(interval);
    }, []); 

    return (
        <div className={styles.header}>
            <div className={styles.heading}>
                <span>{heading}</span>
            </div>
        </div>
    );
};

export default TeamHeader;
