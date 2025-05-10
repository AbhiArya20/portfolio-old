import styles from '@/components/contact-form/contact.module.css';
import { contacts } from '@/data/contact-data';
import { motion } from 'motion/react';

export default function ContactCards() {
  return (
    <div className={styles.cardWrapper} id='contact'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          hidden: { opacity: 0 }
        }}
        className={styles.motionCard}
      >
        {contacts.map(({ href, Icon, name, userName }) => (
          <motion.div
          key={name}
            className={styles.card}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -20 }
            }}
          >
            <a href={href} style={{ textDecoration: 'none' }} target='__blank'>
              <span>
                <Icon />
              </span>
              <h1>{name}</h1>
              <p style={{ fontWeight: 'bold' }}>{userName}</p>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}