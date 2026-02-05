import { Badge } from "@/components/ui/badge";
import { Server, Smartphone, Layout, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const VCNITIExperience = () => {
    return (
        <section className="section-padding container mx-auto container-padding" id="vcniti-experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span>Current Focus</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight text-foreground">
                        Revolutionizing <br />
                        <span className="text-primary">Construction with Tech</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Leading the architectural transition to a high-performance headless commerce platform at <a href="https://vcniti.com" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors">VCNITI</a>.
                    </p>
                </div>

                {/* Architecture Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Frontend */}
                    <div className="p-8 rounded-2xl glass-panel group hover:border-primary/30 transition-colors">
                        <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                            <Layout className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold font-display mb-4">Frontend Architecture</h3>
                        <ul className="space-y-4">
                            {[
                                "Next.js for superior SEO & Performance",
                                "Framer Motion for fluid interactions",
                                "Smart UX with dynamic lazy-loading"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="p-8 rounded-2xl glass-panel group hover:border-primary/30 transition-colors">
                        <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                            <Server className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold font-display mb-4">Backend Logic</h3>
                        <ul className="space-y-4">
                            {[
                                "Node.js middleware for complex logic",
                                "Custom Shopify Data Bridge",
                                "Firebase Auth & Security Rules"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile */}
                    <div className="p-8 rounded-2xl glass-panel group hover:border-primary/30 transition-colors">
                        <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold font-display mb-4">Native Integration</h3>
                        <ul className="space-y-4">
                            {[
                                "Optimized Android WebView",
                                "Native Payment Gateway triggers",
                                "Deep linking & seamless nav"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tech Stack Strip */}
                <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center gap-3">
                    {["Next.js", "React", "TypeScript", "Node.js", "Shopify Headless", "Firebase", "Razorpay"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 border border-white/5 text-muted-foreground">
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default VCNITIExperience;
