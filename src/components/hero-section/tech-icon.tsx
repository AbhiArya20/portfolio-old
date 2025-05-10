import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import styles from '@/components/hero-section/hero-section.module.css';

const getRandomDirection = () => {
  const directions = ['-30px', '30px', '-15px', '15px'];
  return directions[Math.floor(Math.random() * directions.length)];
};

type TechIconProps = {
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  top?: number;
  left?: number;
};

const TechIcon = ({ Component, color, top = 50, left = 50 }: TechIconProps) => {
  const [shakeX, setShakeX] = useState(getRandomDirection());
  const [shakeY, setShakeY] = useState(getRandomDirection());
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setShakeX(getRandomDirection());
      setShakeY(getRandomDirection());
      setScale((prev) => (prev < 1 ? 1 : 0.8));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: scale }}
      animate={{ x: shakeX, y: shakeY, scale: scale }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className={`${styles.techIcon} ${styles.iconDropShadow}`}

      style={{
        '--color': color,
        left: `${top}%`,
        top: `${left}%`
      } as React.CSSProperties}
    >
      <Component style={{ color: color }} />
    </motion.div>
  );
};

export default TechIcon;
