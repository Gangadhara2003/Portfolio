import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Server, Smartphone, Layout, ArrowRight, Database, ShoppingCart, Lock } from "lucide-react";
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
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Badge variant="outline" className="px-4 py-1 border-primary/50 text-primary">
                        Internship Highlight
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Building the Future of <span className="text-primary">Construction Tech</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        As a <span className="text-foreground font-medium">Tech, AI, & Platform Development Intern</span> at <a href="https://vcniti.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">VCNITI</a>, I led the transition from a restricted Shopify theme to a <strong>custom High-Performance Headless Architecture</strong>.
                    </p>
                </div>

                {/* Company Overview */}
                <Card className="p-8 bg-card/50 border-primary/10 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                            <Layout className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">About VCNITI</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                VCNITI is a smart platform enabling ultra-fast delivery of construction and interior materials directly to homes and sites. It simplifies procurement through real-time tracking, verified manufacturers, transparent pricing, and instant order fulfillment.
                            </p>
                        </div>
                    </div>
                </Card>

                {/* The Headless Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Frontend */}
                    <Card className="p-6 hover-lift border-primary/20 bg-gradient-to-br from-card to-card/50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                <Layout className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold">The "Head" (Frontend)</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Next.js Framework:</strong> Built for speed, SEO, and smooth transitions.</span>
                            </li>
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Modern UI:</strong>Framer Motion animations, and responsive design.</span>
                            </li>
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Advanced Product UX:</strong> Smart "New Arrivals" badges, dynamic pricing, and lazyl-loaded media.</span>
                            </li>
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Custom Logic:</strong> Auto-hiding paint dropdowns and enforcing quantity limits.</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Backend */}
                    <Card className="p-6 hover-lift border-primary/20 bg-gradient-to-br from-card to-card/50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold">The "Body" (Backend)</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Node.js/Express Server:</strong> Handles complex logic beyond Shopify's limits.</span>
                            </li>
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Shopify Bridge:</strong> Fetches and cleans product data, including hidden "Metafields".</span>
                            </li>
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Secure Orders:</strong> Processes orders with custom details (Size, Thickness) as line properties.</span>
                            </li>
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Security:</strong> Firebase Auth token verification for all requests.</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Mobile & Integrations */}
                    <Card className="p-6 hover-lift border-primary/20 bg-gradient-to-br from-card to-card/50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold">Mobile & Integrations</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Android WebView Optimization:</strong> Seamless integration inside the native app.</span>
                            </li>
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Native Payments:</strong> Triggers native Android payment flows (Razorpay) instead of web popups.</span>
                            </li>
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Deep Linking Fixes:</strong> Solved issues with <code>tel:</code>, <code>mailto:</code>, and <code>whatsapp:</code> links.</span>
                            </li>
                            <li className="flex gap-2">
                                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span><strong>Auth & Deletion:</strong> Global location detection and compliant account deletion flow.</span>
                            </li>
                        </ul>
                    </Card>
                </div>

                {/* Technologies Used */}
                <div className="flex flex-wrap justify-center gap-4 pt-8">
                    {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Shopify API", "Firebase Auth", "Razorpay"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm bg-secondary/50 hover:bg-secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>

            </motion.div>
        </section>
    );
};

export default VCNITIExperience;
