import { FaAngular, FaAws, FaGithub, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiCss3, SiDocker, SiFirebase, SiFlutter, SiMongodb, SiNextdotjs, SiRedis, SiSwift, SiTailwindcss, SiTypescript, } from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';
import { ImHtmlFive, ImStackoverflow } from 'react-icons/im';
import { BiLogoPostgresql } from 'react-icons/bi';
import { nanoid } from 'nanoid';
import { DiVisualstudio } from 'react-icons/di';

export const icons = [
  { Component: IoLogoJavascript, color: 'orange', id: nanoid() },
  { Component: SiMongodb, color: 'green', id: nanoid() },
  { Component: SiTailwindcss, color: '#00c3ff', id: nanoid() },
  { Component: FaAws, color: 'black', id: nanoid() },
  { Component: SiRedis, color: 'red', id: nanoid() },
  { Component: FaReact, color: '#00a2ff', id: nanoid() },
  { Component: SiFirebase, color: 'orange', id: nanoid() },
  { Component: SiFlutter, color: 'skyblue', id: nanoid() },
  { Component: SiDocker, color: '#1D63ED', id: nanoid() },
  { Component: DiVisualstudio, color: '#11b3fd', id: nanoid() },
  { Component: ImStackoverflow, color: 'orange', id: nanoid() },
  { Component: ImHtmlFive, color: 'orange', id: nanoid() },
  { Component: SiCss3, color: 'blue', id: nanoid() },
  { Component: BiLogoPostgresql, color: 'darkblue', id: nanoid() },
  { Component: SiTypescript, color: '#11b3fd', id: nanoid() },
  { Component: TbBrandGolang, color: '#11b3fd', id: nanoid() },
  { Component: SiSwift, color: 'orange', id: nanoid() },
  { Component: SiNextdotjs, color: 'black', id: nanoid() },
  { Component: FaGithub, color: 'black', id: nanoid() },
  { Component: FaAngular, color: 'red', id: nanoid() }
];