'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import styles from './Blog.module.css';

const posts = [
  {
    id: 1,
    title: 'The Future of AI in Performance Marketing',
    excerpt: 'How machine learning algorithms are revolutionizing ad targeting and dynamic creative optimization.',
    date: 'Oct 15, 2026',
    category: 'AI & Tech',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Web3 and the New Digital Identity',
    excerpt: 'Preparing your brand for the decentralized web and understanding NFT-based loyalty programs.',
    date: 'Sep 28, 2026',
    category: 'Web3',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4eccd4?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'Designing for the Gen-Z Attention Span',
    excerpt: 'Why micro-interactions and scroll-stopping visuals are critical for modern web design.',
    date: 'Sep 10, 2026',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600',
  },
];

export default function Blog() {
  return (
    <section id="blog" className={`section ${styles.blogSection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Insights & <span className="text-gradient">Intelligence</span>
          </motion.h2>
          <motion.button 
            className={styles.viewAllBtn}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            View All Articles <ArrowRight size={16} />
          </motion.button>
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              className={styles.blogCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.imageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className={styles.blogImage} />
                <div className={styles.categoryBadge}>{post.category}</div>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.readMore}>
                  Read Article <span className={styles.readMoreLine} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
