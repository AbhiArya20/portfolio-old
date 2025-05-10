import { FaGithub, FaArrowRight } from "react-icons/fa6";
import styles from "@components/projects-section/project-section.module.css";
import type { ProjectData } from "@data/project-data";


const Card = ({ title, description, link, github }: ProjectData) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.actions}>
          <a href={link} className={`${styles.actionButton} ${styles.shareButton}`}>
            <FaArrowRight />
          </a>
          <a href={github} className={`${styles.actionButton} `}>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
