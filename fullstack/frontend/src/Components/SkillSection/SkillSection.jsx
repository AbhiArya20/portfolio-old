import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./SkillSection.module.css";
import SkillCard from "./SkillCard";
import { skills } from "../../Data/AllData";


export default function SkillSection() {
    return (
        <div className={styles.skillSectionWrapper}>
            <SectionHeader value={"Skills"} />
            <div className={styles.container}>
                {skills.map((skillSet, idx) => (
                    <div key={idx}>
                        <div className={styles.skillSet}>
                            {skillSet.section}
                        </div>
                        <div className={styles.skillsCards}>
                            {skillSet?.subSkills.map((skill, idx) => (
                                <SkillCard
                                    key={skill.skillName}
                                    skill={skill}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <ul>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
                <li
                    style={{
                        "--size": `${Math.random() * 100}px`,
                        "--delay": `${Math.random() * 10}s`,
                        "--duration": `${Math.random() * 50}s`,
                        "--left": `${Math.random() * 100}%`,
                        "--rotate": `${Math.random() * 720}deg`,
                    }}
                ></li>
            </ul>
        </div>
    );
}
