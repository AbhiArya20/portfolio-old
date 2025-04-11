import React, { useContext } from 'react';
import styles from './FirstSegment.module.css';
import image from '../../assets/imagelight.webp';
import ParticlesContainer from './ParticleContainer';
import TechIcon from './TechIcon';
import { icons } from '../../Data/TechIconsData';
import { TechIconsContext } from '../../Contexts/TechIconsContext';
import TextSegment from './TextSegment';

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
      <div className='absolute z-20 h-full w-full'>
        <ParticlesContainer />
      </div>
      <div className='absolute h-[80%] w-full justify-center items-center hidden md:block z-10'>
        {icons.map(({ Component, color, textColor, id }, index) => (
          <TechIcon key={id} Component={Component} textColor={textColor} color={color} top={positions[index]?.top} left={positions[index]?.left} />
        ))}
      </div>
    </section>
  );
}

export default FirstSegment;
