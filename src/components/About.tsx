'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './About.module.css';

const stats = [
  { label: 'Global Clients', value: 250, suffix: '+' },
  { label: 'Revenue Generated', value: 50, suffix: 'M+' },
  { label: 'Team Experts', value: 45, suffix: '' },
  { label: 'Awards Won', value: 12, suffix: '' },
];

function Counter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function: easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Redefining <br />
            <span className="text-gradient">Digital Growth</span>
          </h2>
          <p className={styles.description}>
            RishiVerse is a premier digital marketing agency that merges high-end creative design with ruthless performance marketing. We don't just run ads; we engineer predictable growth engines for ambitious brands.
          </p>
          <p className={styles.description}>
            Our team of elite strategists, designers, and media buyers use AI-driven insights to stay lightyears ahead of the competition.
          </p>
          <button className={`${styles.ctaBtn} magnetic-btn`}>
            Discover Our Story
          </button>
        </motion.div>

        <motion.div 
          className={styles.statsGrid}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className={`${styles.statCard} glass`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={styles.statValue}>
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
          
          {/* Decorative Elements */}
          <div className={styles.glowOrb} />
        </motion.div>
      </div>
    </section>
  );
}
