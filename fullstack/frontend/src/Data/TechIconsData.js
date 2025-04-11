import { FaAngular, FaAws, FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiCss3, SiDocker, SiFirebase, SiFlutter, SiLeetcode, SiMongodb, SiNextdotjs, SiRedis, SiSwift, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';
import { ImHtmlFive, ImStackoverflow } from 'react-icons/im';
import { BiLogoPostgresql } from 'react-icons/bi';
import { nanoid } from '@reduxjs/toolkit';

export const icons = [
  { Component: IoLogoJavascript, textColor: 'text-yellow-500', color: 'yellow', id: nanoid() },
  { Component: SiMongodb, textColor: 'text-green-500', color: 'green', id: nanoid() },
  { Component: SiTailwindcss, textColor: 'text-blue-400', color: '#00c3ff', id: nanoid() },
  { Component: FaAws, textColor: 'text-black', color: 'darkgray', id: nanoid() },
  { Component: SiRedis, textColor: 'text-red-700', color: 'red', id: nanoid() },
  { Component: FaReact, textColor: 'text-sky-400', color: '#00a2ff', id: nanoid() },
  { Component: SiFirebase, textColor: 'text-yellow-500', color: 'orange', id: nanoid() },
  { Component: SiFlutter, textColor: 'text-blue-400', color: 'blue', id: nanoid() },
  { Component: SiDocker, textColor: 'text-blue-400', color: '#1D63ED', id: nanoid() },
  { Component: SiVisualstudiocode, textColor: 'text-sky-600', color: '#11b3fd', id: nanoid() },
  { Component: ImStackoverflow, textColor: 'text-orange-600', color: 'orange', id: nanoid() },
  { Component: ImHtmlFive, textColor: 'text-orange-600', color: 'orange', id: nanoid() },
  { Component: SiCss3, textColor: 'text-blue-600', color: 'blue', id: nanoid() },
  { Component: BiLogoPostgresql, textColor: 'text-sky-800', color: 'darkblue', id: nanoid() },
  { Component: SiTypescript, textColor: 'text-blue-500', color: 'blue', id: nanoid() },
  { Component: TbBrandGolang, textColor: 'text-blue-500', color: '#11b3fd', id: nanoid() },
  { Component: SiSwift, textColor: 'text-orange-600', color: 'orange', id: nanoid() },
  { Component: SiNextdotjs, textColor: 'text-black', color: 'darkgray', id: nanoid() },
  { Component: FaGithub, textColor: 'text-black', color: 'darkgray', id: nanoid() },
  { Component: FaAngular, textColor: 'text-red-500', color: 'red', id: nanoid() }
];
