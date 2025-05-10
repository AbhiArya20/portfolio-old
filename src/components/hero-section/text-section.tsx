import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from '@/components/hero-section/hero-section.module.css';

const items = ['Performance', 'Scalability', 'Security', 'Latest Tech', 'Best UI', 'Modern UX'];

const socialMedias = [
  {
    link: 'https://twitter.com/abhiarya200',
    Icon: FaXTwitter,
  },
  {
    link: 'https://github.com/abhiarya20',
    Icon: FaGithub,
  }
];

function TextSegment() {
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
      <h1>I'm a Web & Software Developer from India.</h1>
      <div className={styles.animatedTextWrapper}>
        <h1>Currently making softwares having</h1>
        <div className={styles.animatedTextInnerWrapper}>
          <span className={styles.typedOut} style={{ width: `${width}%` }}>
            {currentText}
          </span>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <a
          href='https://x.com/abhiarya200'
          className={styles.hireMe}
          target='__blank'
        >
          Hire Me
        </a>
        <a
        // TODO: add resume link
        href='https://x.com/abhiarya200'
          className={styles.resumes}
          target='__blank'>
          Resume
        </a>
      </div>
      <div className={styles.socialWrapper}>
        {socialMedias.map(({ link, Icon }) => (
          <a key={link} href={link} target='__blank'>
            <div className={styles.socialMedia}>
              <Icon />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TextSegment;
