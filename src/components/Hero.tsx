'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className={styles.heroSection}>
      {/* Background Elements */}
      <div className={styles.glowBg} />
      <div className={styles.gridOverlay} />
      
      <motion.div 
        className={`container ${styles.heroContainer}`}
        style={{ opacity }}
      >
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.badge}
          >
            <Sparkles size={16} className={styles.badgeIcon} />
            <span>Premium Performance Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.title}
          >
            We Don't Just Post, <br />
            <span className="text-gradient">We Grow Brands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.description}
          >
            We help brands generate leads, increase sales, and build authority with content and performance marketing. Strategy, Brand, Growth, Results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.actions}
          >
            <Link href="#contact" className={`${styles.primaryBtn} magnetic-btn`}>
              Get Started <ArrowRight size={18} />
            </Link>
            <a href="tel:+919021943080" className={`${styles.secondaryBtn} magnetic-btn`}>
              Book Free Consultation
            </a>
          </motion.div>
        </div>

        {/* Floating UI Elements */}
        <div className={styles.floatingElements}>
          <motion.div 
            className={`${styles.floatingCard} glass animate-float`}
            style={{ y: y1 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.circle} style={{ background: '#ff0b1a' }} />
              <span>ROAS</span>
            </div>
            <div className={styles.cardValue}>+340%</div>
            <div className={styles.cardChart}>
              <div className={styles.bar} style={{ height: '40%' }} />
              <div className={styles.bar} style={{ height: '60%' }} />
              <div className={styles.bar} style={{ height: '80%' }} />
              <div className={styles.bar} style={{ height: '100%', background: 'var(--accent-gradient)' }} />
            </div>
          </motion.div>

          <motion.div 
            className={`${styles.floatingCard} glass animate-float-delayed ${styles.cardRight}`}
            style={{ y: y2 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.circle} style={{ background: '#900000' }} />
              <span>Leads Generated</span>
            </div>
            <div className={styles.cardValue}>12,500+</div>
            <div className={styles.cardTrend}>+24% this month</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
