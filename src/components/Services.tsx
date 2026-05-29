'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Megaphone, Search, Share2, PenTool, Layout, Cpu, FileText, Zap, Camera } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  { id: 1, title: 'Performance Marketing', desc: 'Predictable lead flow at lower CPL via Meta Ads & Funnels.', icon: Target },
  { id: 2, title: 'Content Production', desc: 'Hook-driven reels and scroll-stopping ad creatives.', icon: Layout },
  { id: 3, title: 'Professional Shoots', desc: 'Cinematic brand and product shoots optimized for social.', icon: Camera },
  { id: 4, title: 'Social Media Management', desc: 'Content calendars, daily posting & active community building.', icon: Share2 },
  { id: 5, title: 'YouTube Management', desc: 'End-to-end channel strategy, SEO & retention editing.', icon: Search },
  { id: 6, title: 'Influencer Collabs', desc: 'Vetted creator selection and measurable campaign tracking.', icon: Megaphone },
  { id: 7, title: 'Branding & Strategy', desc: 'Sharp positioning, visual identity & premium messaging frameworks.', icon: PenTool },
  { id: 8, title: 'Google Business Optimization', desc: 'Full GMB optimization for top-3 map rankings and walk-ins.', icon: Zap },
  { id: 9, title: 'Analytics & Optimization', desc: 'Full tracking setup, weekly insights & continuous CRO testing.', icon: Cpu },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-gradient">Capabilities</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We deploy full-funnel marketing strategies designed to scale your business aggressively in the digital landscape.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants} className={styles.cardWrapper}>
                <div className={`${styles.card} glass`}>
                  <div className={styles.iconWrapper}>
                    <Icon size={24} className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  
                  <div className={styles.glowBorder} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
