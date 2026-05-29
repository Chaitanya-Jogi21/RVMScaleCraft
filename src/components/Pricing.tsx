'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState, MouseEvent } from 'react';
import styles from './Pricing.module.css';

type Duration = '3months' | '6months' | '12months';

const plans = [
  {
    name: 'Basic',
    desc: 'Startup package to establish your digital presence.',
    features: [
      '8 High-Quality Reels / Month',
      'Social Media Management',
      'Basic Branding & Design',
      'Community Management',
      'Basic Analytics',
      'Monthly Performance Report'
    ],
    pricing: {
      '3months': { main: '₹12,000', period: '/ month', sub: '' },
      '6months': { main: '₹10,000', period: '/ month', sub: '(₹60,000 Total)' },
      '12months': { main: '₹96,000', period: 'Total', sub: 'Best Value' }
    }
  },
  {
    name: 'Growth',
    desc: 'Scaling and performance marketing package.',
    popular: true,
    features: [
      'Meta + Google Ads Campaigns',
      'Lead Generation System',
      'Funnel Setup & Optimization',
      '12 Premium Reels / Month',
      'Advanced Analytics Tracking',
      'Weekly Reports & Optimization'
    ],
    pricing: {
      '3months': { main: '₹22,000', period: '/ month', sub: '' },
      '6months': { main: '₹20,000', period: '/ month', sub: '(₹1,20,000 Total)' },
      '12months': { main: '₹1,80,000', period: 'Total', sub: 'Best Value' }
    }
  },
  {
    name: 'Premium',
    desc: 'Advanced full-service agency package.',
    features: [
      'Full-Scale Branding & Design',
      'SEO & Content Strategy',
      'Advanced CRM Automation',
      'Weekly Consulting Calls',
      'Priority 24/7 Support',
      'Advanced Campaign Optimization',
      'Multi-platform Dominance'
    ],
    pricing: {
      '3months': { main: '₹45,000', period: '/ month', sub: '' },
      '6months': { main: '₹40,000', period: '/ month', sub: '(₹2,40,000 Total)' },
      '12months': { main: '₹3,60,000', period: 'Total', sub: 'Best Value' }
    }
  }
];

export default function Pricing() {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });
  const [duration, setDuration] = useState<Duration>('3months');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <section id="pricing" className={`section ${styles.pricingSection}`}>
      <div className={styles.glowBg} />
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Premium delivery. Pick monthly or save up to 20% annually.
          </p>
        </motion.div>

        <div className={styles.toggleWrapper}>
          <div className={styles.toggleContainer}>
            <div 
              className={styles.toggleIndicator} 
              style={{
                transform: duration === '3months' ? 'translateX(0%)' : duration === '6months' ? 'translateX(100%)' : 'translateX(200%)'
              }}
            />
            <button 
              className={`${styles.toggleBtn} ${duration === '3months' ? styles.active : ''}`}
              onClick={() => setDuration('3months')}
            >
              3 months
            </button>
            <button 
              className={`${styles.toggleBtn} ${duration === '6months' ? styles.active : ''}`}
              onClick={() => setDuration('6months')}
            >
              6 months <span className={styles.discountBadge}>10% off</span>
            </button>
            <button 
              className={`${styles.toggleBtn} ${duration === '12months' ? styles.active : ''}`}
              onClick={() => setDuration('12months')}
            >
              12 months <span className={styles.discountBadge}>20% off</span>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => {
            const currentPricing = plan.pricing[duration];
            
            return (
              <motion.div
                key={plan.name}
                className={styles.cardWrapper}
                onMouseMove={handleMouseMove}
                style={{
                  '--mouse-x': mousePosition.x,
                  '--mouse-y': mousePosition.y,
                } as any}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={styles.card}>
                  <div className={styles.glowBorder} />
                  {plan.popular && <span className={styles.popularBadge}>Most Popular</span>}
                  
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planDesc}>{plan.desc}</p>
                  
                  <div className={styles.price}>
                    {currentPricing.main} <span className={styles.period}>{currentPricing.period}</span>
                  </div>
                  {currentPricing.sub && (
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', marginTop: '-0.5rem' }}>
                      {currentPricing.sub}
                    </div>
                  )}

                  <ul className={styles.featuresList}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <Check size={18} className={styles.checkIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="tel:+919021943080" className={styles.ctaBtn}>
                    Book Call
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
