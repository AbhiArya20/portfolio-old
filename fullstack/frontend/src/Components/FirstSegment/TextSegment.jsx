import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import AnimatedText from './AnimatedText';
import styles from './FirstSegment.module.css';

const items = ['Performance', 'Scalability', 'Security', 'Latest Tech', 'Best UI', 'Modern UX'];

const socialMedias = [
  {
    link: 'https://leetcode.com/u/aky8507049610/',
    Icon: SiLeetcode,
    bgColor: 'white',
    iconColor: 'text-orange-500'
  },
  {
    link: 'https://www.linkedin.com/in/abhyarya/',
    Icon: FaLinkedin,
    bgColor: 'var(--color-primary)'
  },
  {
    link: 'https://twitter.com/aky8507049610',
    Icon: FaXTwitter,
    bgColor: 'black'
  },
  {
    link: 'https://github.com/AbhyArya',
    Icon: FaGithub,
    bgColor: 'black'
  }
];

function TextSegment() {
  const navigate = useNavigate();
  const goto = (path) => {
    console.log(path);
    navigate(path);
  };

  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentText, setCurrentText] = useState([...items[currentIdx]]);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setWidth(0);
      setTimeout(() => {
        const nextIdx = (currentIdx + 1) % items.length;
        const nextText = [...items[nextIdx]];
        setCurrentText(nextText);
        setCurrentIdx(nextIdx);
        setWidth(100);
      }, 2000);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIdx]);

  return (
    <div>
      <AnimatedText text="I'm a Web & Software Developer from India." />
      <div className={styles.animatedTextWrapper}>
        <AnimatedText text='Currently making softwares having' />
        <div className={styles.animatedTextInnerWrapper}>
          <span className={styles.typedOut} style={{ width: `${width}%` }}>
            {currentText}
          </span>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <div onClick={() => goto('/contact')} className={styles.hireMe}>
          Hire Me
        </div>
        <div onClick={() => goto('/resumes')} className={styles.resumes}>
          Resume
        </div>
      </div>
      <div className={styles.socialWrapper}>
        {socialMedias.map(({ link, Icon, bgColor, iconColor }) => (
          <a key={link} href={link} target='__blank' style={{ '--color': bgColor }}>
            <div className={styles.socialMedia}>
              <Icon className={`${iconColor} text-base`} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TextSegment;
