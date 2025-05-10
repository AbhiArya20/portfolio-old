import { useContext } from 'react';
import styles from "@/components/hero-section/hero-section.module.css";
import image from '@/assets/image-light.webp';
import { TechIconsContext } from '@/context/tech-icon-context';
import TechIcon from '@components/hero-section/tech-icon';
import ParticlesContainer from '@components/hero-section/particle-container';
import { icons } from '@/data/tech-icons-data';
import TextSegment from '@/components/hero-section/text-section';

function HeroSection() {
  const { positions } = useContext(TechIconsContext);

  return (
    <section className={styles.section} id='home'>
      <div className={styles.heroMessageWrapper}>
        <TextSegment />
      </div>
      <div className={styles.wave}></div>
      <div className={styles.imageWrapper}>
        <img src={image} alt='profile' />
      </div>
      <ParticlesContainer />
      <div className={styles.techIconContainer}>
        {icons.map(({ Component, color, id }, index) => (
          <TechIcon key={id} Component={Component} color={color} top={positions[index]?.top} left={positions[index]?.left} />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
