import React from "react";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";
import ProjectSection from "../../Components/ProjectsSection/ProjectSection";
import { projects } from "../../Data/AllData";
export default function Portfolio() {
    return (
        <>
            <SectionWrapper>
                <ProjectSection isPortFolio={true} projects={projects} />
            </SectionWrapper>
        </>
    );
}
