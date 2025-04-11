import React from "react";
import styles from './SectionHeader.module.css'
export default function SectionHeader({ value }) {
    return (
        <header className={styles.header}>
            <div className={styles.textValue}>{value}</div>
            <div className={styles.backGroundValue}>{value}</div>
        </header>
    );
}   
