'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address');
      return;
    }
    
    setStatus('loading');
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          email,
          _subject: "New Website Subscription Lead",
          Message: `Hello Team,\n\nYou have received a new newsletter/service inquiry subscriber from the website.\n\nSubscriber Email:\n${email}\n\nInterested In:\nDigital Marketing & Performance Marketing Services\n\nSource:\nWebsite Newsletter Subscription Form\n\nPlease connect with this potential client for further communication.\n\nRegards,\nWebsite System`
        })
      });
      
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        throw new Error(data.error || 'Failed to subscribe');
      }
    } catch (error: any) {
      setStatus('error');
      setErrorMsg(error.message || 'An unexpected error occurred. Please try again.');
    }
  };

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
            <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                disabled={status === 'loading'}
              />
              <button type="submit" className={styles.subscribeBtn} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Subscribe'} <ArrowRight size={16} />
              </button>
            </form>
            {status === 'success' && <p style={{ color: '#4ade80', marginTop: '0.5rem', fontSize: '0.9rem' }}>Thank you for subscribing! Our team will connect with you soon.</p>}
            {status === 'error' && <p style={{ color: '#f87171', marginTop: '0.5rem', fontSize: '0.9rem' }}>{errorMsg}</p>}
          </motion.div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.png" alt="RVM Scale Craft" style={{ height: '60px', objectFit: 'contain' }} />
            </Link>
            <p className={styles.brandDesc}>
              A growth-focused agency helping brands scale with strategy, content, and performance marketing. We Don't Create, We Scale.
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Contact</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <Mail size={18} className={styles.contactIcon} />
                  <span>rishiversemedia@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={18} className={styles.contactIcon} />
                  <span>+91 90219 43080</span>
                </div>
                <div className={styles.contactItem}>
                  <Globe size={18} className={styles.contactIcon} />
                  <span>rishiverse.co.in</span>
                </div>
                <div className={styles.contactItem}>
                  <MapPin size={18} className={styles.contactIcon} />
                  <span>Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Follow</h4>
              <a href="https://instagram.com/rishiversemedia5" target="_blank" rel="noopener noreferrer" className={styles.followBtn}>
                <span className={styles.contactIcon}>@</span>
                <span>@rishiversemedia5</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} RVM Scale Craft. All rights reserved.</p>
          <div className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top <ArrowRight size={16} className={styles.upArrow} />
          </div>
        </div>
      </div>
    </footer>
  );
}
