'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Megaphone, Search, Share2, PenTool, Layout, Cpu, FileText, Zap } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  { id: 1, title: 'Performance Marketing', desc: 'Data-driven campaigns to maximize your ROI.', icon: Target },
  { id: 2, title: 'Meta & Google Ads', desc: 'High-converting ad creatives and media buying.', icon: Megaphone },
  { id: 3, title: 'Search Engine Optimization', desc: 'Dominate search results with advanced SEO strategies.', icon: Search },
  { id: 4, title: 'Social Media Management', desc: 'Build a loyal community around your brand.', icon: Share2 },
  { id: 5, title: 'Brand Identity', desc: 'Stand out with premium, futuristic branding.', icon: PenTool },
  { id: 6, title: 'Web Development', desc: 'High-performance, interactive websites.', icon: Layout },
  { id: 7, title: 'AI Marketing', desc: 'Leverage AI to automate and scale growth.', icon: Cpu },
  { id: 8, title: 'Content Strategy', desc: 'Engaging content that converts viewers into customers.', icon: FileText },
  { id: 9, title: 'Lead Generation', desc: 'High-quality lead funnels for B2B and B2C.', icon: Zap },
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
