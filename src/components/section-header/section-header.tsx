import styles from './section-header.module.css'
export default function SectionHeader({ value }) {
    return (
        <header className={styles.header}>
            <div className={styles.textValue}>{value}</div>
            <div className={styles.backGroundValue}>{value}</div>
        </header>
    );
}   
