import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import links from '../../Constants/Links.js';
import { ReactComponent as DarkModeSvg } from '../../assets/darkMode.svg';
import { ReactComponent as LightModeSvg } from '../../assets/lightMode.svg';
import useActive from '../../Hooks/useActive.js';

function Header({ isDarkMode, toggleDarkMode, isVisible }) {
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
          top: !isVisible ? '-10rem' : 0
        }}
      >
        <Link to='/contact' style={{ textDecoration: 'none' }}>
          <div className={styles.gap}>
            <p>Like my work? Click here to connect with me!</p>
          </div>
        </Link>
        <header className={styles.header}>
          <nav className={styles.nav} style={{ padding: '1rem 2rem' }}>
            <div className={styles.nameWrapper}>
              <Link className={styles.nameAnchor} to='/'>
                <span>Abhi</span>
                <div className={styles.logo}></div>
                <span>Arya</span>
              </Link>
              <ul className={styles.upperUl}>
                {links.map((link, idx) => (
                  <li key={idx} className={`${styles.upperLi} ${idx === active ? styles.active : ''}`}>
                    <Link to={link.route} className={styles.linkTag}>
                      <span>{link.name}</span>
                    </Link>
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
            {links.map((link, idx) => (
              <li key={idx} className={`${styles.upperLi} ${idx === active ? styles.active : ''}`}>
                <Link to={link.route} className={styles.linkTag_modal}>
                  <span>{link.name}</span>
                </Link>
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
