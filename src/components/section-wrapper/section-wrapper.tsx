import styles from "./section-wrapper.module.css";

export default function SectionWrapper({ children }) {
    return <section className={styles.section} >{children}</section>
}
