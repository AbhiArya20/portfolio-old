import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./ProjectSection.module.css";
import ProjectCard from "./ProjectCard";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ProjectSection({ projects, isPortFolio }) {
    const [opened, setOpened] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const setPopUpProperties = (idx) => {
        setShowPopup(true);
        setOpened(idx);
    };

    return (
        <div>
            {!isPortFolio && (
                <div style={{ margin: "2rem 0rem" }}>
                    <SectionHeader value={"Projects"} />
                </div>
            )}
            <div className={styles.projectLargeWrapper}>
                {showPopup && (
                    <div
                        className={styles.popUp}
                        onMouseLeave={() => setShowPopup(false)}
                    >
                        <div
                            className={styles.iframeWrapper}
                            style={{
                                width: `${100 * projects.length}%`,
                                transform: `translate(-${
                                    (100 / projects.length) * opened
                                }%,0)`,
                            }}
                        >
                            {projects.map((project, idx) => (
                                <div className={styles.singleIframe}>
                                    <iframe
                                        className={styles.iframe}
                                        key={idx}
                                        src={project.link}
                                        title={project.name}
                                        frameborder="0"
                                    ></iframe>
                                    <div className={styles.links}>
                                        <a href={project.link} target="__blank">
                                            <div className={styles.btn}>
                                                <span>Visit</span>
                                                <FaArrowUpRightFromSquare />
                                            </div>
                                        </a>
                                        <a
                                            href={project.github}
                                            target="__blank"
                                        >
                                            <div className={styles.btn}>
                                                <span>Github</span>
                                                <span>
                                                    <FaGithub />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={styles.closePopUp}>
                                        <div
                                            onClick={() => setShowPopup(false)}
                                            className={styles.hamburgerWrapper}
                                        >
                                            {" "}
                                            <div
                                                className={
                                                    styles.closeHamburger
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.projectsWrapper}>
                            <div className={styles.arrowIcon}>
                                <span>
                                    <MdOutlineArrowBackIos />
                                </span>
                            </div>
                            <div className={styles.projects}>
                                {projects.map((project, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.oneProjectWrapper}
                                        onClick={() => setOpened(idx)}
                                    >
                                        <ProjectCard
                                            key={project.link}
                                            project={project}
                                            setPopUpProperties={
                                                setPopUpProperties
                                            }
                                            idx={idx}
                                            isPopUp={false}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={project.link}
                        project={project}
                        setPopUpProperties={setPopUpProperties}
                        idx={idx}
                        isPopUp={true}
                    />
                ))}

                {!isPortFolio && (
                    <ul style={{zIndex: -1}}>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                        <li
                            style={{
                                "--size": `${Math.random() * 100}px`,
                                "--delay": `${Math.random() * 10}s`,
                                "--duration": `${Math.random() * 50}s`,
                                "--top": `${Math.random() * 95}%`,
                                "--rotate": `${Math.random() * 720}deg`,
                            }}
                        >
                            Projects
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}
