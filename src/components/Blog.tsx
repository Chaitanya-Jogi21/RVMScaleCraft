'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, X, Clock, Share2, Copy, Check, Target, HelpCircle, Award, CheckCircle2 } from 'lucide-react';
import styles from './Blog.module.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  author: string;
  content: {
    introduction: string;
    problemStatement: string;
    strategy: string[];
    results: string[];
    conclusion: string;
  };
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'How Performance Marketing Helps Businesses Generate Consistent Leads',
    excerpt: 'Discover how shifting from vanity metrics to key business outcomes helps convert digital advertising spend into a predictable lead-generation engine.',
    date: 'Jun 12, 2026',
    category: 'Performance Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    author: 'RVM SCALECRAFT TEAM',
    content: {
      introduction: 'Traditional branding campaigns promise visibility, but in a tight economy, businesses need measurable results. Performance marketing shifts the paradigm, focusing exclusively on concrete outcomes like cost-per-lead (CPL) and return on ad spend (ROAS). By aligning budgets directly with conversion milestones, companies can stop guessing which half of their advertising budget is wasted and start scaling with precision.',
      problemStatement: 'Many businesses invest thousands of dollars monthly in digital ads only to receive high traffic volumes but zero real inquiries. Without proper conversion tracking, pixel integrations, and granular funnel analytics, they remain blind to which creative assets, copy variations, or audience channels are driving real business value.',
      strategy: [
        'Deploying Meta Conversions API (CAPI) and Google Tag Manager server-side tracking to bypass browser restrictions and accurately attribute every lead.',
        'Creating custom, high-converting direct-response landing pages tailored to specific search keywords and target demographics.',
        'Conducting daily creative testing loops to iterate on video structures, ad copywriting, and visual scroll-stoppers.',
        'Utilizing value-based lookalike audiences and intent-focused remarketing campaigns to guide prospects from initial awareness to booking.'
      ],
      results: [
        '3.5x average increase in monthly qualified leads within 60 days of campaign activation.',
        '42% reduction in overall Cost Per Lead (CPL) by trimming wasted budget on underperforming ad sets.',
        '100% transparency on marketing attribution, linking closed deals directly back to specific ad creatives.'
      ],
      conclusion: 'Transitioning to a data-backed performance marketing framework removes ambiguity from business growth. By tracking the metrics that actually impact the bottom line, businesses can treat marketing as a profitable, predictable investment rather than an overhead cost.'
    }
  },
  {
    id: 2,
    title: 'Meta Ads vs Google Ads: Which Platform Delivers Better ROI?',
    excerpt: 'The ultimate advertising showdown. Learn how consumer psychology dictates where and how to allocate your digital budget for maximum returns.',
    date: 'May 28, 2026',
    category: 'Paid Advertising',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read',
    author: 'RVM SCALECRAFT TEAM',
    content: {
      introduction: "The debate between Meta Ads and Google Ads is as old as digital marketing itself. However, the question shouldn't be 'which platform is better?', but rather 'which platform aligns with your customer's current state of mind?'. Google captures existing high-intent demand, whereas Meta creates brand new demand by visually disrupting the social scroll. Understanding this psychological divide is the key to maximizing ROI.",
      problemStatement: 'Businesses often burn budgets by expecting immediate search-style conversions on Meta, or attempting to build general audience awareness through expensive Google Search terms, leading to high cost-per-click and low conversion rates.',
      strategy: [
        'Allocating Google Search budgets strictly for high-intent keywords where users are actively looking for immediate services or solutions.',
        'Leveraging Meta\'s rich visual storytelling format to educate audiences, trigger impulse interest, and generate leads for lifestyle, food, and apps.',
        'Implementing cross-channel retargeting, where Meta Ads remarket visually to users who originally visited the site via Google Search.',
        'Aligning ad creative formats (long-form search vs dynamic social video reels) with the user mindset on each platform.'
      ],
      results: [
        '28% reduction in overall customer acquisition cost (CAC) through structured cross-channel retargeting.',
        'Highly stabilized ad performance, ensuring immediate inquiries via Google while scaling long-term volume via Meta.',
        'Optimized return on ad spend (ROAS) across the entire digital ecosystem.'
      ],
      conclusion: "A high-performing marketing ecosystem doesn't choose between Meta and Google; it uses them in tandem. Harnessing Google's intent-driven search capability alongside Meta's audience discovery engine delivers the ultimate ROI."
    }
  },
  {
    id: 3,
    title: 'Building a Strong Brand Identity Through Social Media Marketing',
    excerpt: 'Moving beyond static grids and aesthetic patterns. Explore the frameworks for establishing consistency, credibility, and brand authority online.',
    date: 'May 10, 2026',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read',
    author: 'RVM SCALECRAFT TEAM',
    content: {
      introduction: "In an era where consumers research businesses on social media before making a purchase, your digital presence is your storefront. A weak, inconsistent, or inactive social profile immediately casts doubt on your brand's credibility. Building a strong brand identity on social media requires going beyond pretty layouts to project authority, consistency, and value.",
      problemStatement: 'Many businesses post inconsistent graphics, switch style directions randomly, or output generic stock content that fails to capture user interest or project a professional corporate image.',
      strategy: [
        'Developing a strict visual style system, including modern typography, harmonized HSL colors, and custom glassmorphism template designs.',
        'Structuring content around three core pillars: Authority-Building (case studies/tips), Culture & People (behind-the-scenes), and Direct-Response (calls to action).',
        'Executing a video-first content plan using high-quality Instagram Reels and YouTube Shorts focusing on real human interactions.',
        'Optimizing bio profiles and messaging structure to ensure visitors instantly understand the unique value proposition within three seconds.'
      ],
      results: [
        '4.2x organic follower growth rate across client channels in under 90 days.',
        'Significant boost in direct-message (DM) inquiries, shifting social media from a vanity channel to a primary lead source.',
        'Enhanced client trust, leading to shorter sales cycles and higher average deal sizes.'
      ],
      conclusion: 'Social media is more than just a publishing tool—it is the ultimate vehicle for trust-building. A premium, polished social presence acts as a silent closer, establishing your brand as a professional market leader before a sales call even starts.'
    }
  },
  {
    id: 4,
    title: 'From Visibility to Revenue: How Digital Marketing Drives Business Growth',
    excerpt: 'Web traffic and clicks are meaningless if they don\'t impact your bank balance. Discover how to build funnels that turn eyeballs into cash flow.',
    date: 'Apr 18, 2026',
    category: 'Business Growth',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    author: 'RVM SCALECRAFT TEAM',
    content: {
      introduction: "Many marketing agencies pride themselves on generating millions of 'impressions'. However, impressions don't pay the bills. The gap between initial brand visibility and recurring revenue is bridged by a structured conversion funnel. Transforming traffic into cash flow requires optimizing user experience, capturing intent, and executing rapid lead follow-up workflows.",
      problemStatement: 'Businesses often generate steady web traffic but fail to capture lead data or close deals, leaving money on the table due to poor conversion design and slow lead response times.',
      strategy: [
        'Implementing streamlined, zero-friction lead capture forms that require minimal clicks for the user.',
        'Designing dedicated landing pages centered around a single, highly compelling call-to-action (CTA).',
        'Integrating automated email and WhatsApp response triggers that message leads within 5 minutes of form submission.',
        'Deploying behavioral retargeting campaigns that display high-social-proof testimonials to users who drop off during checkout.'
      ],
      results: [
        'Conversion rates increased from a baseline of 1.5% to over 6.2% on optimized landing pages.',
        'Lead response times reduced to under 3 minutes, leading to a 45% increase in lead-to-booking conversion rates.',
        'Scalable, predictable revenue growth directly attributed to paid campaigns.'
      ],
      conclusion: 'Digital marketing is a math problem, not a creative guessing game. By engineering clear paths from attention to action and automating the follow-up process, visibility is reliably transformed into net profit.'
    }
  },
  {
    id: 5,
    title: 'Lead Generation Strategies That Actually Work for Local Businesses',
    excerpt: 'Local advertising requires unique geographical and creative strategies. Learn how to attract nearby customers and patients to your clinic or storefront.',
    date: 'Mar 29, 2026',
    category: 'Local Lead Gen',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    author: 'RVM SCALECRAFT TEAM',
    content: {
      introduction: "Local business marketing is fundamentally different from e-commerce or SaaS. You don't need a global audience; you need the right people within a 5 to 15-kilometer radius of your storefront or clinic. Capturing local lead volume requires precise geo-targeting, highly localized ad creative, and trust-oriented offers that encourage people to visit in person.",
      problemStatement: 'Local dental clinics, cafes, or builders waste ad budgets targeting too broad of a territory, resulting in leads that are too far away to convert, coupled with generic creatives that don\'t appeal to local communities.',
      strategy: [
        'Utilizing radial geographic targeting and postcode profiling to limit ad display to realistic drive-time buffers.',
        'Creating localized ad imagery and video hooks that feature recognizable streets, landmarks, and community-specific pain points.',
        'Crafting high-value, low-friction entry offers (like free consults, seasonal menus, or free site evaluations) to lower the barrier to entry.',
        'Optimizing Google Maps presence and running local search ads that display when customers are nearby and looking to buy.'
      ],
      results: [
        '80% reduction in out-of-area lead waste, ensuring every dollar is spent on prospective customers who can actually visit.',
        'Significant increases in local booking rates and walk-in footfall during historically quiet weekday periods.',
        'Establishment of dominant local market share within target postcodes.'
      ],
      conclusion: 'Local market dominance isn\'t about the size of your budget, but the precision of your targeting and localization. By serving the right offer to the right neighborhood, local businesses can build highly profitable customer streams.'
    }
  },
  {
    id: 6,
    title: 'Why Every Modern Business Needs a Performance Marketing Partner',
    excerpt: 'Ad algorithms, tracking APIs, dynamic creative testing, and CRO are too complex to manage internally. Discover how the right partnership scales operations.',
    date: 'Mar 05, 2026',
    category: 'Growth Partnerships',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read',
    author: 'RVM SCALECRAFT TEAM',
    content: {
      introduction: "In today's digital landscape, running ads is no longer as simple as pressing the 'Boost Post' button. The tools, policies, and algorithms change weekly. For a growing business, trying to build, manage, and optimize an in-house advertising department takes massive focus away from what you do best: serving your clients. Partnering with a dedicated growth team is the ultimate shortcut to scaling.",
      problemStatement: 'In-house generalist marketers or busy business owners quickly get overwhelmed by complex pixel issues, declining ROAS, script setups, graphic design demands, and constant video editing.',
      strategy: [
        'Delegating the entire performance pipeline to specialized growth experts (copywriters, media buyers, designers, and web developers).',
        'Implementing real-time dashboard analytics that track exact pipeline health and lead quality.',
        'Maintaining a continuous creative production engine that produces fresh ad assets weekly to prevent ad fatigue.',
        'Conducting daily monitoring and micro-optimizations of budgets, bid strategies, and audience exclusions.'
      ],
      results: [
        'Operational freedom for business owners, allowing them to focus entirely on scale and customer service.',
        'Elimination of the overhead costs associated with hiring and training full-time, in-house advertising specialists.',
        'Stabilized scaling, ensuring ad accounts perform efficiently even at double or triple the previous daily spend levels.'
      ],
      conclusion: 'A performance marketing partner isn\'t just an expense; they are a leverage point. By aligning with a team whose entire day revolves around optimizing cost-per-lead and creative performance, you unlock consistent, reliable growth.'
    }
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const modalBodyRef = useRef<HTMLDivElement>(null);

  // Track scroll position inside the modal body
  const handleModalScroll = () => {
    if (modalBodyRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = modalBodyRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  useEffect(() => {
    if (selectedPost) {
      // Lock page body scroll
      document.body.style.overflow = 'hidden';
      // Reset scroll progress
      setScrollProgress(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  const handleShareCopy = (postId: number) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#insight-${postId}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getRelatedPosts = (currentId: number): BlogPost[] => {
    return posts.filter(post => post.id !== currentId).slice(0, 2);
  };

  const switchPostInModal = (post: BlogPost) => {
    setSelectedPost(post);
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
    setScrollProgress(0);
  };

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
          <motion.p
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Growth strategies, direct-response advertising guides, and conversion analytics written by our media buyers and branding strategists.
          </motion.p>
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
              onClick={() => setSelectedPost(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedPost(post)}
            >
              <div className={styles.imageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className={styles.blogImage} />
                <div className={styles.categoryBadge}>{post.category}</div>
              </div>
              <div className={styles.content}>
                <div className={styles.metaRow}>
                  <div className={styles.metaItem}>
                    <Calendar size={13} />
                    <span>{post.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.readMore}>
                  Read Full Article <ArrowRight size={14} className={styles.readMoreArrow} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Premium Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dynamic Reading Progress Bar */}
              <div className={styles.progressBarContainer}>
                <div 
                  className={styles.progressBar} 
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              {/* Modal Header Actions */}
              <div className={styles.modalHeader}>
                <div className={styles.modalHeaderMeta}>
                  <span className={styles.modalCategory}>{selectedPost.category}</span>
                  <span className={styles.modalMetaDivider}>•</span>
                  <span className={styles.modalReadTime}>{selectedPost.readTime}</span>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setSelectedPost(null)}
                  aria-label="Close article"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div 
                className={styles.modalBody} 
                ref={modalBodyRef} 
                onScroll={handleModalScroll}
              >
                {/* Article Top Banner */}
                <div className={styles.bannerWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedPost.image} alt={selectedPost.title} className={styles.bannerImage} />
                  <div className={styles.bannerOverlay} />
                  <div className={styles.bannerContent}>
                    <h1 className={styles.articleTitle}>{selectedPost.title}</h1>
                    <div className={styles.authorRow}>
                      <span className={styles.authorLabel}>WRITTEN BY</span>
                      <span className={styles.authorName}>{selectedPost.author}</span>
                      <span className={styles.dateLabel}>PUBLISHED</span>
                      <span className={styles.publishedDate}>{selectedPost.date}</span>
                    </div>
                  </div>
                </div>

                {/* Article Read Area */}
                <div className={styles.articleLayout}>
                  <div className={styles.articleMain}>
                    
                    {/* Introduction */}
                    <div className={styles.articleSection}>
                      <p className={styles.introText}>
                        {selectedPost.content.introduction}
                      </p>
                    </div>

                    {/* Problem Statement */}
                    <div className={styles.articleSection}>
                      <h3 className={styles.articleSectionHeading}>
                        <HelpCircle size={18} className={styles.headingIcon} /> The Challenge & Problem
                      </h3>
                      <p className={styles.bodyText}>
                        {selectedPost.content.problemStatement}
                      </p>
                    </div>

                    {/* Strategy & Approach */}
                    <div className={styles.articleSection}>
                      <h3 className={styles.articleSectionHeading}>
                        <Target size={18} className={styles.headingIcon} /> Strategic Solution
                      </h3>
                      <ul className={styles.strategyList}>
                        {selectedPost.content.strategy.map((item, index) => (
                          <li key={index} className={styles.strategyItem}>
                            <CheckCircle2 size={16} className={styles.bulletIcon} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className={styles.articleSection}>
                      <h3 className={styles.articleSectionHeading}>
                        <Award size={18} className={styles.headingIcon} /> Key Takeaways & Results
                      </h3>
                      <div className={styles.takeawaysGrid}>
                        {selectedPost.content.results.map((result, index) => (
                          <div key={index} className={styles.takeawayCard}>
                            <span className={styles.takeawayCheck}>✓</span>
                            <span className={styles.takeawayText}>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className={styles.articleSection}>
                      <h3 className={styles.articleSectionHeading}>Conclusion</h3>
                      <p className={styles.bodyText}>
                        {selectedPost.content.conclusion}
                      </p>
                    </div>

                    {/* Modal Bottom Share Panel */}
                    <div className={styles.sharePanel}>
                      <span className={styles.shareLabel}>Share this article:</span>
                      <div className={styles.shareButtons}>
                        <button 
                          className={styles.shareBtn} 
                          onClick={() => handleShareCopy(selectedPost.id)}
                          title="Copy Link"
                        >
                          {copied ? <Check size={16} className={styles.checkIconColor} /> : <Copy size={16} />}
                          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                        </button>
                        <a 
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.shareBtn}
                          title="Share on LinkedIn"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin" style={{ flexShrink: 0 }}>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                        <a 
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedPost.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.shareBtn}
                          title="Share on Twitter"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter" style={{ flexShrink: 0 }}>
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                          <span>Twitter</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar with Related Articles */}
                  <div className={styles.articleSidebar}>
                    <div className={styles.sidebarSticky}>
                      <h4 className={styles.sidebarTitle}>Related Insights</h4>
                      <div className={styles.relatedGrid}>
                        {getRelatedPosts(selectedPost.id).map(post => (
                          <div 
                            key={post.id} 
                            className={styles.relatedCard}
                            onClick={() => switchPostInModal(post)}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={post.image} alt={post.title} className={styles.relatedImage} />
                            <div className={styles.relatedInfo}>
                              <span className={styles.relatedCategory}>{post.category}</span>
                              <h5 className={styles.relatedTitle}>{post.title}</h5>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button 
                        className={styles.sidebarCloseBtn} 
                        onClick={() => setSelectedPost(null)}
                      >
                        Back to Hub
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
