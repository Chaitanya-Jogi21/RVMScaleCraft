'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Briefcase, Camera, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.glowBg} />
      
      <div className="container">
        <div className={styles.topSection}>
          <motion.div 
            className={styles.newsletter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.title}>
              Stay ahead of the <span className="text-gradient">Curve</span>
            </h2>
            <p className={styles.subtitle}>
              Get weekly insights on performance marketing and digital growth.
            </p>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              RISHI<span className="text-gradient">VERSE</span>
            </Link>
            <p className={styles.brandDesc}>
              A world-class futuristic digital marketing and performance marketing agency building the next generation of growth engines.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <MessageCircle size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Briefcase size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <Camera size={20} />
              </a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Services</h4>
              <ul>
                <li><Link href="#">Performance Marketing</Link></li>
                <li><Link href="#">Meta & Google Ads</Link></li>
                <li><Link href="#">SEO Optimization</Link></li>
                <li><Link href="#">Brand Identity</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <ul>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Case Studies</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Blog</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Legal</h4>
              <ul>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} RishiVerse Agency. All rights reserved.</p>
          <div className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top <ArrowRight size={16} className={styles.upArrow} />
          </div>
        </div>
      </div>
    </footer>
  );
}
