'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Ashit Thul',
    role: 'Owner, Tea & Talk',
    content: 'Our footfall doubled within 2 months. The reels they created actually brought real customers walking in — not just likes.',
    image: 'https://ui-avatars.com/api/?name=Ashit+Thul&background=ff0b1a&color=fff',
  },
  {
    id: 2,
    name: 'Dev Damahe',
    role: 'Founder, Damahe Construction',
    content: 'We started getting consistent project inquiries from Instagram for the first time. Their content positioned us as a premium brand.',
    image: 'https://ui-avatars.com/api/?name=Dev+Damahe&background=ff0b1a&color=fff',
  },
  {
    id: 3,
    name: 'Shubham Londhe',
    role: 'Founder, Blue Sapphire',
    content: 'Bookings jumped noticeably after their content strategy kicked in. Quality of shoots and edits is genuinely top-tier.',
    image: 'https://ui-avatars.com/api/?name=Shubham+Londhe&background=ff0b1a&color=fff',
  },
  {
    id: 4,
    name: 'Priyanshu Singh',
    role: 'Founder, Tender Singh',
    content: 'Lead flow became predictable. Their performance marketing setup brought us qualified leads at a much lower cost.',
    image: 'https://ui-avatars.com/api/?name=Priyanshu+Singh&background=ff0b1a&color=fff',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={`section ${styles.testimonialsSection}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Brands growing with <span className="text-gradient">RVM Scale Craft</span>
          </h2>
          <p className="section-subtitle">
            Real founders. Real outcomes. Here's what they say.
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
                  <Star key={i} size={16} fill="#ff0b1a" color="#ff0b1a" />
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
                  <Star key={i} size={16} fill="#ff0b1a" color="#ff0b1a" />
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
