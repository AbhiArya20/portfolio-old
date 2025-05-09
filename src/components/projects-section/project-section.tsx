// import { useState } from "react";
// import SectionHeader from "@/components/section-header/section-header";
// import styles from "./project-section.module.css";
// import ProjectCard from "./project-card";
// import { MdOutlineArrowBackIos } from "react-icons/md";
// import { FaGithub } from "react-icons/fa";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// export default function ProjectSection({ projects }) {
//     const [opened, setOpened] = useState(0);
//     const [showPopup, setShowPopup] = useState(false);

//     const setPopUpProperties = (idx) => {
//         setShowPopup(true);
//         setOpened(idx);
//     };

//     return (
//         <div>

//             <div style={{ margin: "2rem 0rem" }}>
//                 <SectionHeader value={"Projects"} />
//             </div>

//             <div className={styles.projectLargeWrapper}>
//                 {showPopup && (
//                     <div
//                         className={styles.popUp}
//                         onMouseLeave={() => setShowPopup(false)}
//                     >
//                         <div
//                             className={styles.iframeWrapper}
//                             style={{
//                                 width: `${100 * projects.length}%`,
//                                 transform: `translate(-${(100 / projects.length) * opened
//                                     }%,0)`,
//                             }}
//                         >
//                             {projects.map((project, idx) => (
//                                 <div className={styles.singleIframe}>
//                                     <iframe
//                                         className={styles.iframe}
//                                         key={idx}
//                                         src={project.link}
//                                         title={project.name}
//                                         frameborder="0"
//                                     ></iframe>
//                                     <div className={styles.links}>
//                                         <a href={project.link} target="__blank">
//                                             <div className={styles.btn}>
//                                                 <span>Visit</span>
//                                                 <FaArrowUpRightFromSquare />
//                                             </div>
//                                         </a>
//                                         <a
//                                             href={project.github}
//                                             target="__blank"
//                                         >
//                                             <div className={styles.btn}>
//                                                 <span>Github</span>
//                                                 <span>
//                                                     <FaGithub />
//                                                 </span>
//                                             </div>
//                                         </a>
//                                     </div>
//                                     <div className={styles.closePopUp}>
//                                         <div
//                                             onClick={() => setShowPopup(false)}
//                                             className={styles.hamburgerWrapper}
//                                         >
//                                             {" "}
//                                             <div
//                                                 className={
//                                                     styles.closeHamburger
//                                                 }
//                                             ></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className={styles.projectsWrapper}>
//                             <div className={styles.arrowIcon}>
//                                 <span>
//                                     <MdOutlineArrowBackIos />
//                                 </span>
//                             </div>
//                             <div className={styles.projects}>
//                                 {projects.map((project, idx) => (
//                                     <div
//                                         key={idx}
//                                         className={styles.oneProjectWrapper}
//                                         onClick={() => setOpened(idx)}
//                                     >
//                                         <ProjectCard
//                                             key={project.link}
//                                             project={project}
//                                             setPopUpProperties={
//                                                 setPopUpProperties
//                                             }
//                                             idx={idx}
//                                             isPopUp={false}
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {projects.map((project, idx) => (
//                     <ProjectCard
//                         key={project.link}
//                         project={project}
//                         setPopUpProperties={setPopUpProperties}
//                         idx={idx}
//                         isPopUp={true}
//                     />
//                 ))}


//                 <ul style={{ zIndex: -1 }}>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         style={{
//                             "--size": `${Math.random() * 100}px`,
//                             "--delay": `${Math.random() * 10}s`,
//                             "--duration": `${Math.random() * 50}s`,
//                             "--top": `${Math.random() * 95}%`,
//                             "--rotate": `${Math.random() * 720}deg`,
//                         }}
//                     >
//                         Projects
//                     </li>
//                 </ul>

//             </div>
//         </div>
//     );
// }


import styles from '@/components/projects-section/project-section.module.css';
import Card from './project-card';

const projects = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zPJA81k7VuodnK3w4LaZqMJGjVuvedNKU365l2xQQQ&s',
    name: 'Project Name',
    description:
      'Project Description1 ksjdfh kajsdf dkasj k sakjfh askjf sdakjhsdkaj fksadjf dskajfh ksdjafhadskjf hksdajhfsdkjfhdsakjf skljfhsdk jkajsdf hdskja hsdkajf djksahjdksahjkdsah kjdshf kjsafhj sfkah dakjahsdfkjdsahkjashdf kjdsah ksajdh kjsadh kjsfh skjfh dafh',
    link: 'https://itsvg.in/',
    github: 'https://www.github.com',
    color: 'red',
    alt: 'project Alt'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zPJA81k7VuodnK3w4LaZqMJGjVuvedNKU365l2xQQQ&s',
    name: 'Project Name',
    description: 'Project Description1 ksjdfh dakjahsdfkjdsahkjashdf kjdsah ksajdh kjsadh kjsfh skjfh dafh',
    link: 'https://itsvg.in/',
    github: 'https://www.github.com',
    color: 'green',
    alt: 'project Alt'
  }
];
  // Sample data for the cards
  const cardData = Array(8).fill({
    title: "Poker",
    description: "Easily document and view your poker hands.",
    stats: {
      stars: "3.6k",
      forks: "1.2k",
      go: "Go",
    },
    user: {
      name: "James DiGioia",
      username: "@jamesdigioia",
      avatar: "/avatar.png",
    },
  })

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {cardData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
    // <div className={styles.container}>
    //   {projects.map((project, idx) => (
    //     <div className={styles.card} key={idx}>
    //       <div className={styles.imageWrapper}>
    //         <img src={project.image} alt={project.alt} />
    //       </div>
    //       <div className={styles.content}>
    //         <div className={styles.title}>{project.name}</div>
    //         <div className={styles.description}>{project.description}</div>
    //         <div className={styles.buttons}>
    //           <a
    //             href={project.link}
    //             className={`${styles.button} ${styles[project.color]}`}
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             Visit
    //           </a>
    //           <a
    //             href={project.github}
    //             className={`${styles.button} ${styles[project.color]}`}
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             GitHub
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Portfolio;
