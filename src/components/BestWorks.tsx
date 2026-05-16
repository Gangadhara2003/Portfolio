import { useState, useRef, useCallback } from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Server,
  Smartphone,
  ShieldCheck,
  CreditCard,
  Bell,
  Users,
  FileSpreadsheet,
  BarChart3,
  Truck,
  AlertTriangle,
  Headset,
  Package,
  ClipboardList,
  BadgeDollarSign,
  MessageSquare,
  ChevronDown,
  Brain,
  FileText,
  Gauge,
  ShieldAlert,
  Wand2,
} from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import vcnitiMockup from '@/assets/vcniti.png';
import adminDashboardMockup from '@/assets/admin dashboard.png';
import supplierDashboardMockup from '@/assets/supplier dashboard.png';
import myResumeMockup from '@/assets/my-resume.png';

const BestWorks = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = useCallback((index: number, isExpanded: boolean) => {
    if (isExpanded) {
      setExpandedProject(null);
      return;
    }
    setExpandedProject(index);
    // Wait for max-h transition to finish, refresh ScrollSmoother's measurements, then scroll
    setTimeout(() => {
      ScrollTrigger.refresh();
      requestAnimationFrame(() => {
        const el = itemRefs.current[index];
        if (!el) return;
        const headerOffset = 100;
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo(el, true, `top ${headerOffset}px`);
        } else {
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    }, 550);
  }, []);

  const projects = [
    {
      number: '01',
      category: 'AI SaaS Platform',
      title: 'My-Resume Tool',
      image: myResumeMockup,
      liveUrl: 'https://my-resume.in',
      overview:
        'A full-stack, production-grade AI resume builder that parses resumes, analyses job descriptions, rewrites bullet points with missing ATS keywords, and compiles pixel-perfect LaTeX PDFs in real time. Architected end-to-end — REST API + WebSocket + async job queue + React frontend — with a multi-provider AI layer and a Docker-sandboxed TeX Live compilation pipeline.',
      accentColor: 'golden',
      features: [
        {
          icon: <Brain className="w-4 h-4" />,
          title: 'Multi-Provider AI Layer',
          description:
            'Resilient AI orchestration with smart task-aware routing and automatic failover, so the product keeps working even when a single provider rate-limits or goes down.',
        },
        {
          icon: <FileText className="w-4 h-4" />,
          title: 'LaTeX Compile Pipeline',
          description:
            'Dockerised TeX Live worker (--network none, 512m, 1 CPU) driven by BullMQ + Redis. Compile progress streamed live to the client via Redis Pub/Sub → WebSocket. Warm-up routine pre-compiles a dummy .tex on boot.',
        },
        {
          icon: <Gauge className="w-4 h-4" />,
          title: 'ATS Match Engine',
          description:
            'Computes a keyword-match percentage between resume and JD with a present/missing breakdown. Surgical bullet rewriter injects missing keywords as JSON diffs without mutating LaTeX structure.',
        },
        {
          icon: <ShieldAlert className="w-4 h-4" />,
          title: 'Honesty Guard',
          description:
            'A small verifier model audits AI output to flag any fabricated skills or achievements before they ship — preventing hallucinated experience from leaking into the final resume.',
        },
        {
          icon: <Wand2 className="w-4 h-4" />,
          title: 'LaTeX Sanitizer',
          description:
            'Post-processor that auto-corrects brace imbalance, unclosed environments, and preamble drift introduced by AI generation, plus an AI-powered fix-errors endpoint for compile failures.',
        },
        {
          icon: <ShieldCheck className="w-4 h-4" />,
          title: 'Production Hardening',
          description:
            'Helmet headers, CORS allowlist, JWT auth, bcrypt hashing, AI rate limits (20 req / 15 min / IP), graceful SIGTERM/SIGINT drain of in-flight BullMQ jobs, and a health endpoint covering DB, Redis, AI, and Docker.',
        },
      ],
      techStack: {
        frontend: ['React 19', 'Vite', 'Tailwind CSS', 'Monaco Editor', 'pdfjs-dist'],
        backend: ['Node.js', 'Express.js', 'PostgreSQL', 'BullMQ', 'WebSocket'],
        services: ['Multi-Provider AI Layer', 'Cloud Storage (S3)'],
        infra: ['Docker', 'TeX Live', 'Redis Pub/Sub'],
      },
    },
    {
      number: '02',
      category: 'Headless Commerce',
      title: 'VCNITI Platform',
      image: vcnitiMockup,
      overview:
        'Designed and engineered a complete Headless Commerce ecosystem from the ground up. This project decouples the user experience from the core commerce engine, utilizing a custom-built API Gateway (Express.js) that bridges highly performant custom frontends (Next.js & React Native) with external SaaS platforms.',
      accentColor: 'blue',
      features: [
        {
          icon: <Globe className="w-4 h-4" />,
          title: 'The Frontend Layer',
          description:
            'Multi-platform client ecosystem with a dynamically rendered Next.js web app (SSR/SSG) and a React Native (Expo) mobile app. Bold UIs engineered with Tailwind CSS and Framer Motion for premium interactions.',
        },
        {
          icon: <Server className="w-4 h-4" />,
          title: 'API Gateway / BFF',
          description:
            'Robust Express.js "Backend-for-Frontend" middleware that routes, transforms, and secures data traffic. Cleanly formats complex GraphQL payloads from commerce engines before they reach the client.',
        },
        {
          icon: <Smartphone className="w-4 h-4" />,
          title: 'Headless Storefront',
          description:
            'Fully integrated with Shopify Headless APIs (REST & GraphQL) for product catalog, global search, inventory management, and shopping cart operations.',
        },
        {
          icon: <ShieldCheck className="w-4 h-4" />,
          title: 'Security & Data Flow',
          description:
            'Firebase Authentication (firebase-admin SDK) for secure, scalable user sessions including OTP phone auth. All API keys handled strictly server-side.',
        },
        {
          icon: <CreditCard className="w-4 h-4" />,
          title: 'Checkout & Notifications',
          description:
            'End-to-end checkout flows with Razorpay Node.js SDK for secure payment capture, plus automated Nodemailer (SMTP) transactional alerts and support tracking.',
        },
      ],
      techStack: {
        frontend: ['Next.js', 'React Native (Expo)', 'Tailwind CSS', 'Framer Motion'],
        backend: ['Node.js', 'Express.js'],
        services: ['Shopify Headless', 'Firebase', 'Razorpay'],
        infra: ['Vercel (Edge CDN)'],
      },
    },
    {
      number: '03',
      category: 'Operations Platform',
      title: 'VCNITI Admin Dashboard',
      image: adminDashboardMockup,
      overview:
        "Built the central administrative portal for VCNITI's commerce ecosystem. This platform handles high-level orchestration of the logistics network, giving administrators total control over supplier onboarding, master product catalogs, platform-wide financial reconciliation, and logistics tracking.",
      accentColor: 'green',
      features: [
        {
          icon: <Users className="w-4 h-4" />,
          title: 'Supplier & User Orchestration',
          description:
            'Complete control over vendor onboarding, automated GST request validation, and internal system user permissions management.',
        },
        {
          icon: <FileSpreadsheet className="w-4 h-4" />,
          title: 'Master Catalog Management',
          description:
            'Advanced toolset for the global product catalog with automated bulk Excel/CSV uploads and an algorithmic matching system to sync products with the main Shopify storefront.',
        },
        {
          icon: <AlertTriangle className="w-4 h-4" />,
          title: 'Global Logistics & SLA Tracking',
          description:
            "Real-time visibility into the entire network's order fulfillment lifecycle. Active tracking of supplier order acceptance, automated SLA breach alerts, and returns processing.",
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: 'Centralized Finance',
          description:
            'Dedicated modules for platform revenue tracking, supplier payout calculations, and comprehensive financial reporting.',
        },
        {
          icon: <Headset className="w-4 h-4" />,
          title: 'Support & Interventions',
          description:
            'Centralized ticketing system for managing supplier feedback, help requests, and system interventions.',
        },
      ],
      techStack: {
        frontend: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        backend: ['Node.js', 'Express.js'],
        services: ['Firebase', 'Shopify API'],
        infra: ['Vercel'],
      },
    },
    {
      number: '04',
      category: 'Vendor Management',
      title: 'VCNITI Supplier Portal',
      image: supplierDashboardMockup,
      overview:
        'Designed and developed a streamlined, secure, and highly focused vendor portal. Gives individual suppliers the autonomy to manage their specific inventory, process distinct orders, and track payouts without being overwhelmed by broader platform data.',
      accentColor: 'purple',
      features: [
        {
          icon: <Package className="w-4 h-4" />,
          title: 'Autonomous Inventory Management',
          description:
            'Dedicated space for vendors to update product listings, execute inventory syncs, and manage dynamic pricing metrics like MRP.',
        },
        {
          icon: <ClipboardList className="w-4 h-4" />,
          title: 'Real-Time Order Fulfillment',
          description:
            'Intuitive interface for suppliers to receive, accept, or reject newly assigned orders instantly.',
        },
        {
          icon: <Truck className="w-4 h-4" />,
          title: 'Dispatch & Logistics Visibility',
          description:
            'Integrated real-time tracking for dispatch status updates and logistics monitoring including live delivery notifications.',
        },
        {
          icon: <BadgeDollarSign className="w-4 h-4" />,
          title: 'Transparent Financial Tracking',
          description:
            'Analytics and payouts section empowering suppliers to verify revenue, track pending settlements, and analyze granular sales performance.',
        },
        {
          icon: <MessageSquare className="w-4 h-4" />,
          title: 'Direct Support Channel',
          description:
            'Built-in communication pipelines for vendors to process customer returns or raise feedback/support tickets directly to the admin team.',
        },
      ],
      techStack: {
        frontend: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        backend: ['Node.js', 'Express.js'],
        services: ['Firebase', 'REST API'],
        infra: ['Vercel'],
      },
    },
  ];

  const colorMap: Record<string, { accent: string; accentBg: string; accentBorder: string; accentText: string }> = {
    golden: {
      accent: 'text-golden',
      accentBg: 'bg-golden/10',
      accentBorder: 'border-golden/30',
      accentText: 'text-golden/60',
    },
    blue: {
      accent: 'text-blue-400',
      accentBg: 'bg-blue-500/10',
      accentBorder: 'border-blue-500/20',
      accentText: 'text-blue-400/60',
    },
    green: {
      accent: 'text-green-400',
      accentBg: 'bg-green-500/10',
      accentBorder: 'border-green-500/20',
      accentText: 'text-green-400/60',
    },
    purple: {
      accent: 'text-purple-400',
      accentBg: 'bg-purple-500/10',
      accentBorder: 'border-purple-500/20',
      accentText: 'text-purple-400/60',
    },
  };

  return (
    <section id="best-works" className="section-padding bg-dark-gray relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dense opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-full h-px bg-golden/10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-golden/10" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-20">
            <span className="font-anton text-sm uppercase tracking-[0.3em] text-golden/70 mb-4 block">
              Deep Dives
            </span>
            <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.9]">
              Best{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Works</span>
                <span
                  className="absolute inset-y-0 -inset-x-3 bg-golden -rotate-1 z-0"
                  style={{ top: '15%', bottom: '10%' }}
                />
              </span>
            </h2>
            <p className="font-satoshi text-lg text-sage/50 mt-6 max-w-2xl mx-auto">
              A detailed look at the projects I've architected and built end-to-end during my internship at VCNITI.
            </p>
          </div>
        </ScrollAnimation>

        {/* Project Deep Dives */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const colors = colorMap[project.accentColor];
            const isExpanded = expandedProject === index;

            return (
              <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                <div
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className={`border transition-all duration-500 ${
                    isExpanded ? 'border-golden/20 bg-golden/[0.01]' : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => handleToggle(index, isExpanded)}
                    className="w-full text-left p-6 md:p-8 flex items-center gap-6 md:gap-8 group"
                  >
                    {/* Number */}
                    <span
                      className={`font-anton text-5xl md:text-6xl leading-none transition-colors duration-500 ${
                        isExpanded ? 'text-golden/60' : 'text-white/10 group-hover:text-white/20'
                      }`}
                    >
                      {project.number}
                    </span>

                    {/* Title Block */}
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-xs font-satoshi font-medium uppercase tracking-widest mb-1 block ${
                          isExpanded ? 'text-golden/70' : 'text-sage/40'
                        }`}
                      >
                        {project.category}
                      </span>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3
                          className={`font-anton text-2xl md:text-3xl lg:text-4xl uppercase leading-[0.9] transition-colors duration-300 ${
                            isExpanded ? 'text-golden' : 'text-white group-hover:text-white/80'
                          }`}
                        >
                          {project.title}
                        </h3>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-anton text-[10px] uppercase tracking-widest hover:bg-emerald-500/20 transition-colors"
                          >
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                            </span>
                            Live
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <ChevronDown
                      className={`w-6 h-6 shrink-0 transition-all duration-300 ${
                        isExpanded ? 'text-golden rotate-180' : 'text-white/20 group-hover:text-white/40'
                      }`}
                    />
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-8 md:pb-10">
                      {/* Divider */}
                      <div className="w-full h-px bg-white/5 mb-8" />

                      {/* Image + Overview */}
                      <div className="grid lg:grid-cols-2 gap-8 mb-10">
                        {/* Image */}
                        <div className={`relative overflow-hidden border ${project.liveUrl ? 'border-emerald-500/20' : 'border-white/5'}`}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain bg-dark-gray"
                          />
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-golden to-transparent" />

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-emerald-500 text-white font-anton text-xs uppercase tracking-widest hover:bg-emerald-600 transition-colors"
                            >
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                              </span>
                              Live
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>

                        {/* Overview */}
                        <div className="flex flex-col justify-center">
                          <span className="font-anton text-xs uppercase tracking-[0.2em] text-golden/50 mb-3 block">
                            Project Overview
                          </span>
                          <p className="font-satoshi text-base md:text-lg text-sage/70 leading-relaxed">
                            {project.overview}
                          </p>

                          {/* Quick Tech Tags */}
                          <div className="flex flex-wrap gap-2 mt-6">
                            {Object.values(project.techStack)
                              .flat()
                              .slice(0, 6)
                              .map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-xs font-satoshi font-medium uppercase tracking-wider border border-golden/20 text-golden/70 bg-golden/5"
                                >
                                  {tech}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="mb-10">
                        <span className="font-anton text-xs uppercase tracking-[0.2em] text-golden/50 mb-6 block">
                          Core Architecture & Features
                        </span>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
                          {project.features.map((feature, i) => (
                            <div
                              key={i}
                              className={`p-6 hover:bg-white/[0.02] transition-all duration-300 group/feature relative ${
                                i < project.features.length - 1 ? 'border-b md:border-b border-white/10' : ''
                              } ${(i + 1) % 3 !== 0 ? 'lg:border-r border-white/10' : ''} ${
                                (i + 1) % 2 !== 0 ? 'md:border-r' : ''
                              }`}
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <div
                                  className={`h-8 w-8 flex items-center justify-center ${colors.accentBg} ${colors.accent} ${colors.accentBorder} border`}
                                >
                                  {feature.icon}
                                </div>
                                <h4 className="font-anton text-sm uppercase text-white tracking-wide">
                                  {feature.title}
                                </h4>
                              </div>
                              <p className="font-satoshi text-sm text-sage/50 leading-relaxed group-hover/feature:text-sage/70 transition-colors">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Full Tech Stack Breakdown */}
                      <div>
                        <span className="font-anton text-xs uppercase tracking-[0.2em] text-golden/50 mb-6 block">
                          Technical Stack
                        </span>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10">
                          {Object.entries(project.techStack).map(([layer, techs], i) => {
                            const labels: Record<string, string> = {
                              frontend: 'Frontend',
                              backend: 'Backend',
                              services: 'Services',
                              infra: 'Infrastructure',
                            };
                            return (
                              <div
                                key={layer}
                                className={`p-5 ${
                                  i < Object.keys(project.techStack).length - 1
                                    ? 'border-b md:border-b-0 md:border-r border-white/10'
                                    : ''
                                }`}
                              >
                                <span className="font-anton text-xs uppercase tracking-wider text-sage/30 mb-3 block">
                                  {labels[layer] || layer}
                                </span>
                                <div className="space-y-2">
                                  {techs.map((tech) => (
                                    <div key={tech} className="flex items-center gap-2">
                                      <ArrowRight className={`w-3 h-3 ${colors.accentText} shrink-0`} />
                                      <span className="font-satoshi text-sm text-white/70">{tech}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestWorks;
