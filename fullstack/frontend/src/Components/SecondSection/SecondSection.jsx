import React from "react";
import styles from "./SecondSection.module.css";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import SkillSection from "../SkillSection/SkillSection";
import ProjectSection from "../ProjectsSection/ProjectSection";
import Motivation from "../Motivation/Motivation";
import { projects } from "../../Data/AllData";

function SecondSection({ children }) {
    return (
        <main className={styles.main}>
            <SectionWrapper>
                <SkillSection />
            </SectionWrapper>
            <SectionWrapper>
                <ProjectSection projects={projects} />
            </SectionWrapper>
            <SectionWrapper>
                <Motivation />
            </SectionWrapper>
        </main>
    );
}

export default SecondSection;
