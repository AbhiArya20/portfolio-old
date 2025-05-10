import { createContext, useEffect, useState } from 'react';
import { icons } from '@/data/tech-icons-data';

type TechIconPosition = {
  top: number;
  left: number;
};

type TechIconsContextType = {
  positions: TechIconPosition[];
};

const generatePosition = (): TechIconPosition => {
  const top = Math.random() * 80 + 15;
  const left = Math.random() * 90 + 15;
  return { top, left };
};

const isOverlapping = (pos1: TechIconPosition, pos2: TechIconPosition): boolean => {
  const distance = Math.sqrt(Math.pow(pos1.top - pos2.top, 2) + Math.pow(pos1.left - pos2.left, 2));
  return distance < 25;
};

export const TechIconsContext = createContext<TechIconsContextType>({ positions: [] });

export default function TechIconsProvider({ children }: { children: React.ReactNode }) {
  const [positions, setPositions] = useState<TechIconPosition[]>([]);

  useEffect(() => {
    const randomPositions: TechIconPosition[] = [];
    const maxAttempts = 100;

    icons.forEach(() => {
      let position = generatePosition();
      let attempts = 0;

      while (randomPositions.some((pos) => isOverlapping(pos, position)) && attempts < maxAttempts) {
        position = generatePosition();
        attempts++;
      }

      randomPositions.push(position);
    });

    setPositions(randomPositions);
  }, []);

  return <TechIconsContext.Provider value={{ positions }}>{children}</TechIconsContext.Provider>;
}