'use client';

import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.infoContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Let's Build The <br />
            <span className="text-gradient">Future Together</span>
          </h2>
          <p className="section-subtitle">
            Ready to scale your brand? Drop us a line and our growth experts will get back to you within 24 hours.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Mail size={20} />
              </div>
              <div>
                <h4>Email Us</h4>
                <p>hello@rishiverse.com</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Phone size={20} />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+1 (800) 123-4567</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={20} />
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>100 Cybernetic Way, Neo City, TX 75001</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.formContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form className={`${styles.form} glass`}>
            <div className={styles.inputGroup}>
              <input type="text" id="name" required placeholder=" " />
              <label htmlFor="name">Full Name</label>
              <div className={styles.inputBorder} />
            </div>
            
            <div className={styles.inputGroup}>
              <input type="email" id="email" required placeholder=" " />
              <label htmlFor="email">Email Address</label>
              <div className={styles.inputBorder} />
            </div>

            <div className={styles.inputGroup}>
              <input type="text" id="company" required placeholder=" " />
              <label htmlFor="company">Company Name</label>
              <div className={styles.inputBorder} />
            </div>
            
            <div className={styles.inputGroup}>
              <textarea id="message" rows={4} required placeholder=" "></textarea>
              <label htmlFor="message">Project Details</label>
              <div className={styles.inputBorder} />
            </div>

            <button type="button" className={`${styles.submitBtn} magnetic-btn`}>
              Send Message <Send size={18} />
            </button>
          </form>
          
          <div className={styles.glowBg} />
        </motion.div>
      </div>
    </section>
  );
}
