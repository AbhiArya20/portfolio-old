
import styles from "@/components/second-section/second-section.module.css";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";
import ProjectSection from "@/components/projects-section/project-section";
import Motivation from "@/components/motivation/motivation";
import { projects } from "@data/all-data";


function SecondSection() {
    return (
        <main className={styles.main}>
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
