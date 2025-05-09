import  { useState } from 'react';
import styles from '@/components/header/header.module.css';
import links from '@/data/links';
import { ReactComponent as DarkModeSvg } from "@/assets/dark-mode.svg";
import { ReactComponent as LightModeSvg } from '@/assets/light-mode.svg';
import useActive from '@/hooks/use-active';

function Header({ isDarkMode, toggleDarkMode }) {
  const [showMenu, setShowMenu] = useState(false);
  const { active } = useActive();
  const toggleMenuBar = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div
        className={styles.headingWrapper}
        style={{
          background: active !== 0 ? 'var(--color-background)' : 'transparent',
          boxShadow: active !== 0 ? (isDarkMode ? '0 0 100px black' : '0 0 20px var(--color-gray-100)') : '',
          position: active !== 0 ? 'sticky' : 'fixed',
          top: 0
        }}
      >
        <a href='/contact' style={{ textDecoration: 'none' }}>
          <div className={styles.gap}>
            <p>Like my work? Click here to connect with me!</p>
          </div>
        </a>
        <header className={styles.header}>
          <nav className={styles.nav} style={{ padding: '1rem 2rem' }}>
            <div className={styles.nameWrapper}>
              <a className={styles.nameAnchor} href='/'>
                <span>Abhi</span>
                <div className={styles.logo}></div>
                <span>Arya</span>
              </a>
              <ul className={styles.upperUl}>
                {links.map((a, idx) => (
                  <li key={idx} className={`${styles.upperLi} ${idx === active ? styles.active : ''}`}>
                    <a href={a.route} className={styles.linkTag}>
                      <span>{a.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div onClick={toggleDarkMode} className={styles.toggleDarkMode}>
              <span>{isDarkMode ? <DarkModeSvg /> : <LightModeSvg />}</span>
            </div>
            <div onClick={toggleMenuBar} className={styles.hamburgerWrapper}>
              <div className={`${showMenu ? styles.closeHamburger : styles.hamburger}`}></div>
            </div>
          </nav>
        </header>
      </div>
      <div onClick={toggleMenuBar} className={`${styles.phoneModal} ${!showMenu && styles.phoneModalShow}`}>
        <ul className={styles.upperUl_modal}>
          <>
            {links.map((a, idx) => (
              <li key={idx} className={`${styles.upperLi} ${idx === active ? styles.active : ''}`}>
                <a href={a.route} className={styles.linkTag_modal}>
                  <span>{a.name}</span>
                </a>
              </li>
            ))}

            <div onClick={toggleDarkMode} className={`${styles.toggleDarkMode_modal} ${isDarkMode && styles.cutSvg}`}>
              {isDarkMode ? <DarkModeSvg /> : <LightModeSvg />}
            </div>
          </>
        </ul>
      </div>
    </>
  );
}

export default Header;
