import React from "react";
import styles from "./SectionWrapper.module.css";

export default function SectionWrapper({ children }) {
    return <section className={styles.section} >{children}</section>
}
