import { FaAngular, FaAws, FaGithub, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiCss3, SiDocker, SiFirebase, SiFlutter,  SiMongodb, SiNextdotjs, SiRedis, SiSwift, SiTailwindcss, SiTypescript, } from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';
import { ImHtmlFive, ImStackoverflow } from 'react-icons/im';
import { BiLogoPostgresql } from 'react-icons/bi';
import { nanoid } from 'nanoid';
import { DiVisualstudio } from 'react-icons/di';

export const icons = [
  { Component: IoLogoJavascript, textColor: '#facc15', color: 'orange', id: nanoid() }, // text-yellow-500
  { Component: SiMongodb, textColor: '#22c55e', color: 'green', id: nanoid() },         // text-green-500
  { Component: SiTailwindcss, textColor: '#38bdf8', color: '#00c3ff', id: nanoid() },   // text-blue-400
  { Component: FaAws, textColor: '#000000', color: 'black', id: nanoid() },          // text-black
  { Component: SiRedis, textColor: '#b91c1c', color: 'red', id: nanoid() },             // text-red-700
  { Component: FaReact, textColor: '#38bdf8', color: '#00a2ff', id: nanoid() },         // text-sky-400
  { Component: SiFirebase, textColor: '#facc15', color: 'orange', id: nanoid() },       // text-yellow-500
  { Component: SiFlutter, textColor: '#38bdf8', color: 'skyblue', id: nanoid() },          // text-blue-400
  { Component: SiDocker, textColor: '#1D63ED', color: '#1D63ED', id: nanoid() },
  { Component: DiVisualstudio, textColor: '#0284c7', color: '#11b3fd', id: nanoid() },  // text-sky-600
  { Component: ImStackoverflow, textColor: '#ea580c', color: 'orange', id: nanoid() },  // text-orange-600
  { Component: ImHtmlFive, textColor: '#ea580c', color: 'orange', id: nanoid() },       // text-orange-600
  { Component: SiCss3, textColor: '#2563eb', color: 'blue', id: nanoid() },             // text-blue-600
  { Component: BiLogoPostgresql, textColor: '#1e40af', color: 'darkblue', id: nanoid() }, // text-sky-800
  { Component: SiTypescript, textColor: '#3b82f6', color: '#11b3fd', id: nanoid() },       // text-blue-500
  { Component: TbBrandGolang, textColor: '#3b82f6', color: '#11b3fd', id: nanoid() },   // text-blue-500
  { Component: SiSwift, textColor: '#ea580c', color: 'orange', id: nanoid() },          // text-orange-600
  { Component: SiNextdotjs, textColor: '#000000', color: 'black', id: nanoid() },    // text-black
  { Component: FaGithub, textColor: '#000000', color: 'black', id: nanoid() },       // text-black
  { Component: FaAngular, textColor: '#ef4444', color: 'red', id: nanoid() }            // text-red-500
];