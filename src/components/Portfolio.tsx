'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, MapPin, Building2, Target, CheckCircle2, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import styles from './Portfolio.module.css';

const categories = ['All', 'Performance Marketing', 'Content Production', 'Social Media Management'];

interface Project {
  id: number;
  title: string;
  category: string;
  stats: string;
  image?: string;
  logo?: string;
  isLogoCard?: boolean;
  caseStudy?: {
    client: string;
    industry: string;
    location: string;
    overview: string;
    challenge: string;
    solution: string[];
    goal: string;
    results: string[];
    notes?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Tea & Talk',
    category: 'Performance Marketing',
    stats: '2x Footfall',
    isLogoCard: true,
    logo: '/tea-talk-logo.png',
    caseStudy: {
      client: 'Tea & Talk',
      industry: 'Cafe & Food Business',
      location: 'Dighori, Nagpur',
      overview: 'Tea & Talk is a budget-friendly cafe located in Dighori, Nagpur and is a franchise branch of Tea & Talk. The cafe offers a comfortable atmosphere with affordable food and beverages, making it a popular destination for local customers.',
      challenge: 'The cafe had limited social media presence, low brand awareness, and needed increased footfall from genuine local customers.',
      solution: [
        'Instagram page management and optimization',
        'Social media branding and content strategy',
        'Profile polishing and professional presentation',
        'Local audience targeting',
        'Brand awareness campaigns',
        'Customer engagement campaigns',
        'Footfall-focused marketing strategy',
      ],
      goal: 'Establish Tea & Talk as the most recognized and preferred cafe in Dighori through digital marketing, social media branding, and increased customer engagement.',
      results: [
        'Improved social media presence',
        'Better local brand recognition',
        'Increased engagement and followers',
        'Higher customer footfall',
        'Stronger brand positioning in the Dighori area',
      ],
    },
  },
  {
    id: 2,
    title: 'Damahe Construction',
    category: 'Social Media Management',
    stats: 'Consistent Lead Generation',
    isLogoCard: true,
    logo: '/damahe-logo.png',
    caseStudy: {
      client: 'Damahe Construction',
      industry: 'Construction & Infrastructure',
      location: 'Nagpur, Maharashtra',
      overview: 'Damahe Construction is a Nagpur-based construction company that specializes in building residential and commercial structures through contract-based projects across Nagpur and nearby areas. Their focus is delivering quality construction at affordable budgets.',
      challenge: 'The brand had limited social media presence, low online visibility, and was not generating consistent leads through digital channels.',
      solution: [
        'Instagram page management and optimization',
        'Professional brand positioning',
        'Content creation and page polishing',
        'Social media growth strategy',
        'Lead generation campaigns',
        'Meta Ads campaign management',
        'Brand awareness and local visibility campaigns',
      ],
      goal: 'Position Damahe Construction as a recognized builder brand in Nagpur, increase social presence, generate genuine leads, and scale the business through digital marketing.',
      results: [
        'Improved brand identity',
        'Increased local visibility',
        'Better engagement and audience growth',
        'Consistent lead generation through social media and ads',
        'Stronger positioning as a trusted builder in Nagpur',
      ],
    },
  },
  {
    id: 3,
    title: 'Blue Sapphire',
    category: 'Content Production',
    stats: 'Increased Bookings',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Jai Malhar Human Capital',
    category: 'Performance Marketing',
    stats: 'Predictable Leads',
    isLogoCard: true,
    logo: '/jai-malhar-logo.png',
    caseStudy: {
      client: 'Jai Malhar Human Capital',
      industry: 'Recruitment & Human Resource Services',
      location: 'Nagpur, Maharashtra',
      overview: 'Jai Malhar Human Capital is a recruitment and staffing agency based in Nagpur. They connect companies with skilled candidates and help unemployed and job-seeking individuals find suitable opportunities. They provide both blue-collar and white-collar job opportunities across various industries.',
      challenge: 'The company had limited social media presence and needed a professional online identity to build trust and attract both job seekers and employers.',
      solution: [
        'Instagram page setup and optimization',
        'Professional social media branding',
        'Content creation and page polishing',
        'Lead generation campaigns',
        'Social media growth strategy',
        'Brand awareness campaigns',
        'Audience targeting and engagement',
      ],
      goal: 'Build a strong social identity, increase brand credibility, generate genuine leads, and establish Jai Malhar Human Capital as a trusted recruitment partner in Nagpur.',
      results: [
        'Professional social media presence established within 15 days',
        'Improved brand credibility and visibility',
        'Increased audience engagement',
        'Generated genuine leads through social media and lead campaigns',
        'Enhanced awareness among employers and job seekers',
      ],
    },
  },
  {
    id: 5,
    title: 'RRR Restaurant',
    category: 'Performance Marketing',
    stats: 'Increased Footfall & Profitability',
    isLogoCard: true,
    logo: '/rrr-restaurant-logo.png',
    caseStudy: {
      client: 'RRR Restaurant',
      industry: 'Restaurant & Hospitality',
      location: 'Umred, Maharashtra',
      overview: 'RRR Restaurant is a popular restaurant based in Umred, known for its good ambience, quality food, great taste, and affordable pricing. Despite offering a good customer experience, the business was struggling with profitability and had very limited social media presence.',
      challenge: 'Low online visibility, weak social media presence, limited customer reach, lack of consistent branding and marketing, and difficulty attracting new customers regularly.',
      solution: [
        'Instagram page management and optimization',
        'Professional social media branding',
        'Content creation and engagement strategy',
        'Local awareness campaigns',
        'Customer acquisition campaigns',
        'Restaurant-focused marketing strategy',
        'Performance marketing and audience targeting',
      ],
      goal: 'Position RRR Restaurant as one of the most recognized and preferred restaurants in Umred, increase customer footfall, build a loyal customer base, and strengthen brand visibility through digital marketing and social media branding.',
      results: [
        'Improved social media presence',
        'Increased local brand awareness',
        'Better audience engagement',
        'Growth in customer inquiries and footfall',
        'Stronger positioning as a leading restaurant in Umred',
      ],
    },
  },
  {
    id: 6,
    title: 'Metro Arch Studio',
    category: 'Performance Marketing',
    stats: 'Qualified Lead Generation',
    isLogoCard: true,
    logo: '/metro-arch-logo.png',
    caseStudy: {
      client: 'Metro Arch Studio',
      industry: 'Architecture & Interior Design',
      location: 'Nagpur, Maharashtra',
      overview: 'Metro Arch Studio is a Nagpur-based architecture and design firm known for its premium architectural concepts, creative planning, and modern design solutions. They have a strong client base and deliver high-quality residential and commercial design projects.',
      challenge: 'Despite having quality work and satisfied clients, the company had limited social media presence and low online visibility. Their expertise was not being effectively showcased to potential customers online.',
      solution: [
        'Social media branding and positioning',
        'Instagram page optimization',
        'Premium content strategy',
        'Creative design showcase campaigns',
        'Lead generation campaigns',
        'Performance marketing',
        'Audience targeting and awareness campaigns',
      ],
      goal: 'Generate genuine leads, strengthen online presence, showcase premium projects, and demonstrate the effectiveness of our marketing services during the trial period.',
      results: [
        'Improved professional online presence',
        'Better audience engagement',
        'Increased brand visibility',
        'Qualified lead generation through ad campaigns',
        'Strong foundation for long-term digital growth',
      ],
      notes: 'Metro Arch Studio joined for a short trial period to evaluate our creative capabilities and lead generation performance. The objective was to demonstrate measurable results and establish confidence for a long-term partnership.',
    },
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  const displayedProjects = activeCategory === 'All' && !isExpanded
    ? filteredProjects.slice(0, 4)
    : filteredProjects;

  const handleCardClick = (project: Project) => {
    if (project.caseStudy) {
      setSelectedProject(project);
    }
  };

  return (
    <>
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
              {displayedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`${styles.projectCard} ${project.isLogoCard ? styles.logoCard : ''} ${project.caseStudy ? styles.clickable : ''}`}
                  onClick={() => handleCardClick(project)}
                  role={project.caseStudy ? 'button' : undefined}
                  tabIndex={project.caseStudy ? 0 : undefined}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(project)}
                >
                  <div className={styles.imageWrapper}>
                    {project.isLogoCard ? (
                      <div className={styles.logoWrapper}>
                        {/* Animated background grid */}
                        <div className={styles.gridBg} />
                        {/* Glow orbs */}
                        <div className={styles.glowOrb1} />
                        <div className={styles.glowOrb2} />
                        {/* Logo */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.logo}
                          alt={`${project.title} Logo`}
                          className={styles.clientLogo}
                        />
                        {/* Hover overlay */}
                        <div className={styles.overlay}>
                          <span className={styles.viewBtn}>
                            View Case Study <ArrowUpRight size={20} />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.image} alt={project.title} className={styles.projectImage} />
                        <div className={styles.overlay}>
                          <span className={styles.viewBtn}>
                            View Case Study <ArrowUpRight size={20} />
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className={styles.projectInfo}>
                    <div>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectCategory}>{project.category}</p>
                    </div>
                    <div className={styles.projectStats}>{project.stats}</div>
                  </div>
                  {project.caseStudy && (
                    <div className={styles.clickHint}>
                      <span>Click to read full case study</span>
                      <ArrowUpRight size={14} />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {activeCategory === 'All' && filteredProjects.length > 4 && !isExpanded && (
            <div className={styles.loadMoreContainer}>
              <motion.button
                whileHover="hover"
                className={styles.loadMoreBtn}
                onClick={() => setIsExpanded(true)}
              >
                Load More
                <motion.span
                  className={styles.arrowWrapper}
                  variants={{
                    hover: { x: 5 }
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.caseStudy && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={styles.modalHeader}>
                <div className={styles.modalLogoArea}>
                  {selectedProject.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={selectedProject.logo} alt={selectedProject.title} className={styles.modalLogo} />
                  ) : (
                    <h3 className={styles.modalHeaderTitle}>{selectedProject.title}</h3>
                  )}
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close case study"
                >
                  <X size={22} />
                </button>
              </div>

              <div className={styles.modalBody}>
                {/* Meta info */}
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <Building2 size={16} className={styles.metaIcon} />
                    <div>
                      <span className={styles.metaLabel}>Industry</span>
                      <span className={styles.metaValue}>{selectedProject.caseStudy.industry}</span>
                    </div>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={16} className={styles.metaIcon} />
                    <div>
                      <span className={styles.metaLabel}>Location</span>
                      <span className={styles.metaValue}>{selectedProject.caseStudy.location}</span>
                    </div>
                  </div>
                  <div className={styles.metaItem}>
                    <Target size={16} className={styles.metaIcon} />
                    <div>
                      <span className={styles.metaLabel}>Service</span>
                      <span className={styles.metaValue}>{selectedProject.category}</span>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Overview</h3>
                  <p className={styles.sectionText}>{selectedProject.caseStudy.overview}</p>
                </div>

                {/* Challenge */}
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <span className={styles.titleIcon}>⚡</span> The Challenge
                  </h3>
                  <p className={styles.sectionText}>{selectedProject.caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <Lightbulb size={18} className={styles.titleIconEl} /> Our Solution
                  </h3>
                  <ul className={styles.solutionList}>
                    {selectedProject.caseStudy.solution.map((item, i) => (
                      <motion.li
                        key={i}
                        className={styles.solutionItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Goal */}
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <span className={styles.titleIcon}>🎯</span> Goal
                  </h3>
                  <p className={styles.sectionText}>{selectedProject.caseStudy.goal}</p>
                </div>

                {/* Results */}
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <TrendingUp size={18} className={styles.titleIconEl} /> Results
                  </h3>
                  <div className={styles.resultsGrid}>
                    {selectedProject.caseStudy.results.map((result, i) => (
                      <motion.div
                        key={i}
                        className={styles.resultCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <span className={styles.resultCheck}>✓</span>
                        {result}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                {selectedProject.caseStudy.notes && (
                  <div className={styles.notesBlock}>
                    <h4 className={styles.notesTitle}>Additional Notes</h4>
                    <p className={styles.notesText}>{selectedProject.caseStudy.notes}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
