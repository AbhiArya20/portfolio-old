import { useContext } from 'react';
import styles from "@/components/first-section/first-section.module.css";
import image from '@/assets/image-light.webp';
import { TechIconsContext } from '@/context/tech-icon-context';
import TechIcon from '@/components/first-section/tech-icon';
import ParticlesContainer from '@/components/first-section/particle-container';
import { icons } from '@/data/tech-icons-data';
import TextSegment from './text-section';

function FirstSegment() {
  const { positions } = useContext(TechIconsContext);

  return (
    <section className={styles.section}>
      <div className={styles.heroMessageWrapper}>
        <TextSegment />
      </div>
      <div className={styles.wave}></div>
      <div className={styles.imageWrapper}>
        <img src={image} alt='profile' />
      </div>
      <div className={styles.textBg}></div>
      <div className={styles.particlesContainer}>
        <ParticlesContainer />
      </div>
      <div className={styles.techIconContainer}>
        {icons.map(({ Component, color, textColor, id }, index) => (
          <TechIcon key={id} Component={Component} textColor={textColor} color={color} top={positions[index]?.top} left={positions[index]?.left} />
        ))}
      </div>
    </section>
  );
}

export default FirstSegment;
