import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import styles from "./ProjectSection.module.css";

export default function ProjectCard({
    project,
    idx,
    setPopUpProperties,
    isPopUp,
}) {
    return (
        <div className="flex group max-w-[90vw] relative cursor-pointer mb-2 mx-2">
            <div
                id="card-0"
                className={`changeBgColor flex flex-col justify-between w-full sm:w-96 ${project.color} z-[1] border-2 border-zinc-600 p-6 rounded-2xl shadow-xl gradient-border transition-all ease-in-out  group-hover:translate-x-2 group-hover:translate-y-2 `}
            >
                <div className="">
                    <div className="flex justify-between">
                        <div className="flex items-center justify-center w-16 h-16">
                            <span>
                                <img alt={project.alt} src={project.image} />
                            </span>
                        </div>
                        {isPopUp && (
                            <span
                                className="text-white"
                                onClick={() => setPopUpProperties(idx)}
                            >
                                <FaEye />
                            </span>
                        )}
                    </div>
                    <div className="my-4">
                        <h2 className="text-lg font-semibold text-white">
                            {project.name}
                        </h2>
                        <p className="mt-3 text-base text-zinc-200">
                            {project.description}
                        </p>
                    </div>
                </div>
                {isPopUp && (
                    <div
                        className={styles.links}
                        style={{ position: "static" }}
                    >
                        <a href={project.link} target="__blank">
                            <div className={styles.btn}>
                                <span>Visit</span>
                                <FaArrowUpRightFromSquare />
                            </div>
                        </a>
                        <a href={project.github} target="__blank">
                            <div className={styles.btn}>
                                <span>Github</span>
                                <span>
                                    <FaGithub />
                                </span>
                            </div>
                        </a>
                    </div>
                )}
            </div>
            {isPopUp && (
                <div
                    id="card-bg-0"
                    className={`w-full sm:w-96 absolute h-full left-2 top-2 border-2 group-hover:border-0 border-zinc-600 bg-transparent rounded-2xl card-bg overflow-hidden transition-all`}
                ></div>
            )}
        </div>
    );
}
