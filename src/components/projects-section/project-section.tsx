import styles from '@/components/projects-section/project-section.module.css';
import Card from './project-card';
import { projects, type ProjectData } from '@/data/project-data';

const Portfolio = () => {
  return (
    <div className={styles.grid} id='project'>
      {projects.map((project:ProjectData, index) => (
        <Card key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          github={project.github}
        />
      ))}
    </div>
  )
};

export default Portfolio;
