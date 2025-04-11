import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const getRandomDirection = () => {
  const directions = ['-30px', '30px', '-15px', '15px'];
  return directions[Math.floor(Math.random() * directions.length)];
};

const TechIcon = ({ Component, textColor, color, top = 50, left = 50 }) => {
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
      className={`absolute w-10 h-10 rounded-full flex justify-center items-center icons-drop-shadow opacity-75 bg-gray-200`}
      style={{
        '--color': color,
        left: `${top}%`,
        top: `${left}%`
      }}
    >
      <Component className={`text-2xl ${textColor}`} />
    </motion.div>
  );
};

export default TechIcon;
