'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loadingContainer}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.loaderContent}>
            <motion.h1
              className={styles.logo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              RISHIVERSE
            </motion.h1>
            
            <div className={styles.progressContainer}>
              <motion.div 
                className={styles.progressBar}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
            
            <motion.p
              className={styles.loadingText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              INITIALIZING EXPERIENCE...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
