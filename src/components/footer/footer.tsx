import styles from '@/components/footer/footer.module.css';
import type { MouseEvent as ReactMouseEvent } from 'react';

export default function Footer() {
  const handleToolTip = (e: ReactMouseEvent<HTMLElement>) => {
    const toolTipArray = document.getElementsByClassName(styles.tooltip);
    const footerArray = document.getElementsByClassName(styles.footer);
    if (toolTipArray.length && footerArray.length) {
      const toolTip = toolTipArray[0] as HTMLElement;
      const xPos = e.pageX - 8;
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
