'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CMO, TechFlow',
    content: 'RishiVerse completely transformed our acquisition strategy. We saw a 3x increase in qualified leads within the first 60 days.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Founder, Lumina',
    content: 'The branding and web development they delivered was lightyears ahead of what we expected. Truly a futuristic approach to digital presence.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 3,
    name: 'Emily Ross',
    role: 'VP Marketing, Nexa',
    content: 'Their AI-driven performance marketing strategies are unmatched. They scaled our ROAS seamlessly while lowering our CPA.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 4,
    name: 'Michael Torres',
    role: 'CEO, Elevate E-com',
    content: 'If you want a team that understands Gen-Z culture and cutting-edge tech, look no further. Best agency we have ever worked with.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonialsSection}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Client <span className="text-gradient">Success</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from the brands we've scaled.
          </p>
        </motion.div>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {/* First Set */}
          {testimonials.map((test) => (
            <div key={`test-1-${test.id}`} className={`${styles.card} glass`}>
              <Quote className={styles.quoteIcon} size={40} />
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#00f0ff" color="#00f0ff" />
                ))}
              </div>
              <p className={styles.content}>"{test.content}"</p>
              <div className={styles.author}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={test.image} alt={test.name} className={styles.avatar} />
                <div>
                  <h4 className={styles.name}>{test.name}</h4>
                  <p className={styles.role}>{test.role}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Second Set for infinite loop */}
          {testimonials.map((test) => (
            <div key={`test-2-${test.id}`} className={`${styles.card} glass`}>
              <Quote className={styles.quoteIcon} size={40} />
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#00f0ff" color="#00f0ff" />
                ))}
              </div>
              <p className={styles.content}>"{test.content}"</p>
              <div className={styles.author}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={test.image} alt={test.name} className={styles.avatar} />
                <div>
                  <h4 className={styles.name}>{test.name}</h4>
                  <p className={styles.role}>{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
