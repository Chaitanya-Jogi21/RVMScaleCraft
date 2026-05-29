'use client';

import styles from './LogoMarquee.module.css';

const clients = [
  "Tea & Talk", "Damahe Construction", "Blue Sapphire", "Tender Singh", "Tanyy Studios", "Rishiverse", "Elevate E-com", "Nexa"
];

export default function LogoMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {/* First set */}
        {clients.map((client, index) => (
          <div key={`client-1-${index}`} className={styles.logoItem}>
            {client}
          </div>
        ))}
        {/* Second set for infinite loop */}
        {clients.map((client, index) => (
          <div key={`client-2-${index}`} className={styles.logoItem}>
            {client}
          </div>
        ))}
        {/* Third set to ensure smooth continuous scrolling on ultra-wide screens */}
        {clients.map((client, index) => (
          <div key={`client-3-${index}`} className={styles.logoItem}>
            {client}
          </div>
        ))}
      </div>
    </div>
  );
}
