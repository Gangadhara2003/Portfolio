import { CheckCircle2, XCircle, Server, Smartphone, Layout, ArrowRight, Zap, Shield, Gauge } from "lucide-react";
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const VCNITIExperience = () => {
  const oldWayItems = [
    { text: "Monolithic architecture, slow page loads", icon: "🐌" },
    { text: "Limited SEO, poor mobile experience", icon: "📉" },
    { text: "Rigid platform locked to templates", icon: "🔒" },
    { text: "Manual order processing, no automation", icon: "⚙️" },
  ];

  const newWayItems = [
    { text: "Next.js for superior SEO & Performance", metric: "3x faster" },
    { text: "Node.js middleware for complex logic", metric: "Scalable" },
    { text: "Custom Shopify Data Bridge", metric: "Real-time" },
    { text: "Firebase Auth & Security Rules", metric: "Secure" },
  ];

  return (
    <section className="relative overflow-hidden" id="vcniti-experience">
      {/* ────────── Comparison Section ────────── */}
      <div className="relative min-h-[700px] bg-charcoal">
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />

        {/* Section Header */}
        <div className="relative z-20 pt-20 pb-10 text-center">
          <ScrollAnimation direction="down">
            <span className="font-anton text-xs uppercase tracking-[0.4em] text-golden/60 mb-4 block">
              Architecture Evolution
            </span>
            <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.9]">
              Why{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Headless</span>
                <span className="absolute inset-y-0 -inset-x-3 bg-golden -rotate-1 z-0" style={{ top: '15%', bottom: '10%' }}></span>
              </span>
              ?
            </h2>
          </ScrollAnimation>
        </div>

        {/* Comparison Grid */}
        <div className="container mx-auto container-padding relative z-10 pb-20">
          <div className="grid md:grid-cols-2 gap-0 relative">

            {/* VS Divider - Desktop */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="relative">
                <div className="w-20 h-20 bg-golden flex items-center justify-center rotate-45">
                  <span className="font-anton text-2xl text-charcoal -rotate-45 tracking-tight">VS</span>
                </div>
              </div>
            </div>

            {/* LEFT — The Old Way */}
            <ScrollAnimation direction="right">
              <div className="relative p-8 md:p-12 border border-white/5 bg-white/[0.02] group">
                {/* Strikethrough decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/40 to-transparent" />

                <div className="mb-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-satoshi font-medium uppercase tracking-widest text-red-400/80 border border-red-400/20 bg-red-400/5 mb-4">
                    <span className="w-1.5 h-1.5 bg-red-400/60 rounded-full" />
                    Legacy Approach
                  </span>
                  <h3 className="font-anton text-3xl md:text-4xl lg:text-5xl uppercase text-white/40 leading-[0.9] relative">
                    Traditional
                    <br />
                    Commerce
                    {/* Strikethrough line */}
                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-red-400/30 -rotate-2" />
                  </h3>
                </div>

                <div className="space-y-0">
                  {oldWayItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 py-4 border-b border-white/5 last:border-b-0 group/item"
                    >
                      <div className="shrink-0 mt-0.5">
                        <div className="w-8 h-8 flex items-center justify-center border border-red-400/20 bg-red-400/5 text-sm">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-satoshi text-sm md:text-base text-sage/50 leading-relaxed line-through decoration-red-400/30">
                          {item.text}
                        </p>
                      </div>
                      <XCircle className="w-4 h-4 text-red-400/40 shrink-0 mt-1" />
                    </div>
                  ))}
                </div>

                {/* Faded corner number */}
                <div className="absolute bottom-4 right-6 font-anton text-[120px] leading-none text-white/[0.02] select-none pointer-events-none">
                  01
                </div>
              </div>
            </ScrollAnimation>

            {/* VS Divider - Mobile */}
            <div className="flex md:hidden items-center justify-center py-4 relative">
              <div className="w-full h-px bg-white/10 absolute" />
              <div className="w-14 h-14 bg-golden flex items-center justify-center rotate-45 relative z-10">
                <span className="font-anton text-lg text-charcoal -rotate-45 tracking-tight">VS</span>
              </div>
            </div>

            {/* RIGHT — The VCNITI Way */}
            <ScrollAnimation direction="left">
              <div className="relative p-8 md:p-12 border border-golden/10 bg-golden/[0.02] group">
                {/* Golden top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-golden to-golden/20" />

                <div className="mb-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-satoshi font-medium uppercase tracking-widest text-golden/90 border border-golden/20 bg-golden/5 mb-4">
                    <span className="w-1.5 h-1.5 bg-golden rounded-full animate-pulse" />
                    Modern Approach
                  </span>
                  <h3 className="font-anton text-3xl md:text-4xl lg:text-5xl uppercase text-white leading-[0.9]">
                    Headless
                    <br />
                    <span className="text-golden">Commerce</span>
                  </h3>
                </div>

                <div className="space-y-0">
                  {newWayItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 py-4 border-b border-golden/5 last:border-b-0 group/item hover:bg-golden/[0.02] transition-colors duration-300"
                    >
                      <div className="shrink-0 mt-0.5">
                        <div className="w-8 h-8 flex items-center justify-center border border-golden/20 bg-golden/5">
                          <CheckCircle2 className="w-4 h-4 text-golden" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-satoshi text-sm md:text-base text-white/80 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs font-satoshi font-medium text-golden/60 bg-golden/5 px-2 py-0.5 border border-golden/10 mt-0.5">
                        {item.metric}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Faded corner number */}
                <div className="absolute bottom-4 right-6 font-anton text-[120px] leading-none text-golden/[0.03] select-none pointer-events-none">
                  02
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* ────────── Architecture Deep Dive ────────── */}
      <div className="section-padding bg-charcoal border-t border-white/5">
        <div className="container mx-auto container-padding">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <span className="font-anton text-sm uppercase tracking-[0.3em] text-golden/70 mb-4 block">Current Focus</span>
              <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.9]">
                Revolutionizing<br />
                <span className="relative inline-block">
                  <span className="relative z-10">Construction</span>
                  <span className="absolute inset-y-0 -inset-x-3 bg-golden -rotate-1 z-0" style={{ top: '15%', bottom: '10%' }}></span>
                </span>{' '}
                with Tech
              </h2>
              <p className="font-satoshi text-lg text-sage/70 mt-6 max-w-2xl mx-auto">
                Led the architectural transition to a high-performance headless commerce platform at{' '}
                <a href="https://vcniti.com" target="_blank" rel="noopener noreferrer" className="text-golden font-medium underline underline-offset-4 hover:text-golden/80 transition-colors">
                  VCNITI
                </a>.
              </p>
            </div>
          </ScrollAnimation>

          {/* Architecture Cards - New editorial layout */}
          <div className="grid md:grid-cols-3 gap-0 border border-white/10">
            {/* Frontend */}
            <ScrollAnimation direction="up" delay={0}>
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-all duration-500 group relative h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 flex items-center justify-center bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-anton text-xs uppercase tracking-[0.2em] text-blue-400/60 block">Layer 01</span>
                    <h3 className="font-anton text-xl uppercase text-white">Frontend</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Next.js for superior SEO & Performance",
                    "Framer Motion for fluid interactions",
                    "Smart UX with dynamic lazy-loading"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-sage/60 font-satoshi group-hover:text-sage/80 transition-colors">
                      <ArrowRight className="w-3 h-3 text-blue-400/60 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-4 right-6 font-anton text-6xl text-white/[0.02] select-none pointer-events-none">01</div>
              </div>
            </ScrollAnimation>

            {/* Backend */}
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-all duration-500 group relative h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 flex items-center justify-center bg-green-500/10 text-green-400 border border-green-500/20">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-anton text-xs uppercase tracking-[0.2em] text-green-400/60 block">Layer 02</span>
                    <h3 className="font-anton text-xl uppercase text-white">Backend</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Node.js middleware for complex logic",
                    "Custom Shopify Data Bridge",
                    "Firebase Auth & Security Rules"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-sage/60 font-satoshi group-hover:text-sage/80 transition-colors">
                      <ArrowRight className="w-3 h-3 text-green-400/60 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-4 right-6 font-anton text-6xl text-white/[0.02] select-none pointer-events-none">02</div>
              </div>
            </ScrollAnimation>

            {/* Mobile */}
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="p-8 md:p-10 hover:bg-white/[0.02] transition-all duration-500 group relative h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 flex items-center justify-center bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-anton text-xs uppercase tracking-[0.2em] text-purple-400/60 block">Layer 03</span>
                    <h3 className="font-anton text-xl uppercase text-white">Native</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Optimized Android WebView",
                    "Native Payment Gateway triggers",
                    "Deep linking & seamless nav"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-sage/60 font-satoshi group-hover:text-sage/80 transition-colors">
                      <ArrowRight className="w-3 h-3 text-purple-400/60 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-4 right-6 font-anton text-6xl text-white/[0.02] select-none pointer-events-none">03</div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Key Metrics Strip */}
          <ScrollAnimation direction="up" delay={0.15}>
            <div className="grid grid-cols-3 border border-white/10 border-t-0">
              {[
                { icon: <Zap className="w-4 h-4" />, label: "Performance", value: "95+", sublabel: "Lighthouse" },
                { icon: <Shield className="w-4 h-4" />, label: "Security", value: "A+", sublabel: "Grade" },
                { icon: <Gauge className="w-4 h-4" />, label: "Load Time", value: "<2s", sublabel: "Average" },
              ].map((stat, i) => (
                <div key={i} className="p-6 text-center border-r border-white/10 last:border-r-0 hover:bg-golden/[0.02] transition-colors duration-300 group">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-golden/60 group-hover:text-golden transition-colors">{stat.icon}</span>
                    <span className="font-satoshi text-xs uppercase tracking-wider text-sage/40">{stat.label}</span>
                  </div>
                  <div className="font-anton text-2xl md:text-3xl text-white group-hover:text-golden transition-colors duration-300">{stat.value}</div>
                  <span className="font-satoshi text-xs text-sage/30">{stat.sublabel}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Tech Stack Strip */}
          <ScrollAnimation direction="up" delay={0.3}>
            <div className="pt-10 mt-10 border-t border-white/5 flex flex-wrap justify-center gap-3">
              {["Next.js", "React", "TypeScript", "Node.js", "Shopify Headless", "Firebase", "Razorpay"].map((tech) => (
                <span key={tech} className="px-4 py-1.5 text-xs font-satoshi font-medium uppercase tracking-wider border border-golden/20 text-golden/70 bg-golden/5">
                  {tech}
                </span>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default VCNITIExperience;
