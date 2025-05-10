import { useState } from 'react';
import styles from '@/components/header/header.module.css';
import links from '@/data/links';
import { ReactComponent as DarkModeSvg } from '@/assets/dark-mode.svg';
import { ReactComponent as LightModeSvg } from '@/assets/light-mode.svg';
import useActive from '@/hooks/use-active';
import type { DarkModeHook } from '@hooks/use-dark-mode';

function Header({ isDarkMode, toggleDarkMode }: DarkModeHook) {
  const [showMenu, setShowMenu] = useState(false);
  const { active } = useActive();
  const toggleMenuBar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.left}>
            <a className={styles.logoWrapper} href='#home'>
              <span>Abhi</span>
              <div className={styles.logo}></div>
              <span>Arya</span>
            </a>
            <ul className={styles.navList}>
              {links.map((a, idx) => (
                <li key={idx} className={`${styles.navItem} ${idx === active ? styles.active : ''}`}>
                  <a href={a.route} className={styles.link}>
                    <span>{a.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* This is a hack to make the svg in half-moon in phone header */}
          <DarkModeSvg style={{opacity:0}}/>
          <div onClick={toggleDarkMode} className={styles.theme}>
            <span>{isDarkMode ? <DarkModeSvg /> : <LightModeSvg />}</span>
          </div>
          <div onClick={toggleMenuBar} className={styles.hamburger}>
            <div className={`${showMenu ? styles.closeHamburger : styles.openHamburger}`}></div>
          </div>
        </nav>
      </header>
      <header className={`${styles.phoneHeader} ${!showMenu && styles.phoneHeaderShow}`}>
        <ul className={styles.phoneNavList}>
          <>
            {links.map((a, idx) => (
              <li key={idx} className={`${styles.navItem} ${idx === active ? styles.active : ''}`}>
                <a href={a.route} className={styles.phoneLink}>
                  <span>{a.name}</span>
                </a>
              </li>
            ))}
            <div onClick={toggleDarkMode} className={`${styles.phoneTheme}`}>
              <span>{isDarkMode ? <DarkModeSvg /> : <LightModeSvg />}</span>
            </div>
          </>
        </ul>
      </header>
    </>
  );
}

export default Header;
