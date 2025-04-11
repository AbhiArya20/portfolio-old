import { createContext, useEffect, useState } from 'react';
import { icons } from '../Data/TechIconsData';

const generatePosition = () => {
  const top = Math.random() * 80 + 15;
  const left = Math.random() * 90 + 15;
  return { top, left };
};

const isOverlapping = (pos1, pos2) => {
  const distance = Math.sqrt(Math.pow(pos1.top - pos2.top, 2) + Math.pow(pos1.left - pos2.left, 2));
  return distance < 25;
};
export const TechIconsContext = createContext();

export default function TechIconsProvider({ children }) {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const randomPositions = [];
    const maxAttempts = 100;
    const occupied = [];

    icons.forEach(() => {
      let position = generatePosition();
      let attempts = 0;

      while (occupied.some((pos) => isOverlapping(pos, position)) && attempts < maxAttempts) {
        position = generatePosition();
        attempts++;
      }

      randomPositions.push(position);
      occupied.push(position);
    });

    setPositions(randomPositions);
  }, []);

  return <TechIconsContext.Provider value={{ positions }}>{children}</TechIconsContext.Provider>;
}
