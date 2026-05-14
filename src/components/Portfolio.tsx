'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Portfolio.module.css';

const categories = ['All', 'Performance Marketing', 'Branding', 'Web Development'];

const projects = [
  {
    id: 1,
    title: 'NeonX Growth Engine',
    category: 'Performance Marketing',
    stats: '+450% ROAS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Aura Fintech Branding',
    category: 'Branding',
    stats: 'Award Winning',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Nexus SaaS Platform',
    category: 'Web Development',
    stats: '1M+ Users',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Vortex Ad Campaigns',
    category: 'Performance Marketing',
    stats: '10k Leads',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className={`section ${styles.portfolioSection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-gradient">Case Studies</span>
          </motion.h2>

          <motion.div 
            className={styles.filters}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={styles.projectCard}
              >
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.overlay}>
                    <button className={styles.viewBtn}>
                      View Case Study <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectCategory}>{project.category}</p>
                  </div>
                  <div className={styles.projectStats}>{project.stats}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
