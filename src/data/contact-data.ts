import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiPhoneCallFill } from 'react-icons/pi';
import { SiLeetcode } from 'react-icons/si';

export const contacts = [
  {
    Icon: MdEmail,
    name: 'Email',
    userName: 'career.abhiarya@gmail.com',
    href: 'mailto:career.abhiarya@gmail.com'
  },
  {
    Icon: PiPhoneCallFill,
    name: 'Phone',
    userName: '+91 9162388695',
    href: 'tel:+91 9162388695'
  },
  {
    Icon: FaXTwitter,
    name: 'X/Twitter',
    userName: '@abhiarya200',
    href: 'https://twitter.com/abhiarya200'
  },
  {
    Icon: FaGithub,
    name: 'Github',
    userName: '@abhiarya20',
    href: 'https://github.com/abhiarya20'
  },
  {
    Icon: SiLeetcode,
    name: 'Leetcode',
    userName: '@abhiarya20',
    href: 'https://leetcode.com/u/abhiarya20/'
  }
];
