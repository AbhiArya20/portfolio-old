import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const handleToolTip = (e) => {
    const toolTipArray = document.getElementsByClassName(styles.tooltip);
    const footerArray = document.getElementsByClassName(styles.footer);
    if (toolTipArray.length && footerArray.length) {
      const toolTip = toolTipArray[0];
      const footer = footerArray[0];
      const xPos = e.pageX;
      const yPos = -40;
      toolTip.style.left = xPos + 'px';
      toolTip.style.top = yPos + 'px';
    }
  };
  return (
    <footer onMouseMove={handleToolTip} className={styles.footer}>
      <p>{'</> and crafted with 💛 by Abhi Arya'}</p>
      <span className={styles.tooltip}>&#169; 2024, Abhi Arya</span>
    </footer>
  );
}
