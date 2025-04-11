import React from 'react';
import { contacts } from '../../Data/ContactData';
import styles from './contact.module.css';
import { motion } from 'framer-motion';

export default function ContactCards() {
  return (
    <div className={styles.cardWrapper}>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          hidden: { opacity: 0 }
        }}
        className='flex flex-wrap gap-8 justify-center'
      >
        {contacts.map(({ href, Icon, name, userName }) => (
          <motion.div
            className={styles.card}
            href={href}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -20 }
            }}
          >
            <a href={href} target='__blank'>
              <span>
                <Icon />
              </span>
              <h1>{name}</h1>
              <p className='font-bold'>{userName}</p>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
