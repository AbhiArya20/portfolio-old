import React from "react";
import styles from "./SkillSection.module.css";
import { TbBrandCpp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SkillCard({ skill }) {
    return (
        <div className={styles.card}>
            <Link to={skill.blogLink}>
                <div
                    className={`${styles.face} ${styles.face1}`}
                    style={{ background: skill.color }}
                >
                    <div className={styles.content}>
                        <span>
                            {skill.skillIcon && (
                                <skill.skillIcon className={styles.iconStyle} />
                            )}
                        </span>
                        <p>{skill.skillName}</p>
                    </div>
                </div>
            </Link>
            <div className={`${styles.face} ${styles.face2}`}>
                <a
                    href={skill.githubLink}
                    target="__blank"
                    style={{ color: skill.color }}
                    className={styles.github}
                >
                    <span>
                        <FaGithub />
                    </span>
                    <p>Github</p>
                </a>
            </div>
        </div>
    );
}
