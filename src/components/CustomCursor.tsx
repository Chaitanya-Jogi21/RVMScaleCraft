'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(0, 240, 255, 0.5)',
      border: '1px solid rgba(0, 240, 255, 0.8)',
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: 'rgba(139, 0, 255, 0.2)',
      border: '1px solid rgba(139, 0, 255, 0.8)',
      mixBlendMode: 'screen' as any,
    }
  };

  return (
    <>
      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      <div 
        className={styles.dot}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
    </>
  );
}
