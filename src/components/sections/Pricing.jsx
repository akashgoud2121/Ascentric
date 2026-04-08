import { motion } from "framer-motion";
import { Check, Zap, Shield, Rocket, Clock, MessageSquare, Phone, BarChart3, Globe } from "lucide-react";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

const PRICING_PLANS = [
  {
    name: "Essential",
    subtitle: "Best for Startups",
    price: "₹2,000 – ₹3,000",
    description: "Solid foundation for small businesses getting started.",
    features: [
      "3-Page Core Website",
      "2 Rounds of Revisions",
      "Monthly Email Support",
      "End-to-End Delivery",
      "Basic SEO Setup"
    ],
    turnaround: "5–6 Business Days",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500/20 to-cyan-500/20",
    buttonVariant: "primary"
  },
  {
    name: "Growth",
    subtitle: "Strategic Advancement",
    price: "₹3,000 – ₹6,000",
    description: "For growing brands aiming for a strong online presence.",
    features: [
      "5 Social Posts + 2 Reels OR 5-Page Dynamic Site",
      "Competitor Analysis",
      "Advanced SEO Optimization",
      "3 Rounds of Revisions",
      "Priority WhatsApp / Call Support",
      "Monthly Performance Report"
    ],
    turnaround: "10–15 Business Days",
    icon: <Zap className="w-6 h-6" />,
    color: "from-primary/20 to-primary/5",
    buttonVariant: "primary",
    recommended: true
  },
  {
    name: "Authority",
    subtitle: "Market Leadership",
    price: "₹8,000 /mo",
    description: "Full-scale growth for established businesses.",
    features: [
      "Daily Content + Ad Management",
      "Advanced Strategy & Integrations",
      "Unlimited Revisions",
      "24/7 Dedicated Support",
      "Weekly Strategy Calls",
      "ROI Tracking & Analytics Dashboard"
    ],
    turnaround: "19+ Days (Ongoing)",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-purple-500/20 to-pink-500/20",
    buttonVariant: "primary"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            INVESTMENT <br />
            <span className="text-primary italic uppercase">FOR GROWTH</span>
          </motion.h2>
          <p className="text-foreground/50 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Flexible, scalable solutions designed to match your business stage — from startup to authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative flex flex-col p-8 md:p-10 rounded-[3rem] glass border-border transition-all duration-500 hover:scale-[1.02]",
                plan.recommended && "border-primary/30 shadow-2xl shadow-primary/5 scale-[1.05] z-10 bg-primary/[0.02]"
              )}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                  Most Popular
                </div>
              )}

              {/* Plan Icon & Header */}
              <div className="mb-8">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br",
                  plan.color
                )}>
                  <div className="text-primary">{plan.icon}</div>
                </div>
                <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="text-3xl font-black text-primary mb-2">{plan.price}</div>
                <p className="text-xs text-foreground/50 leading-relaxed">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-foreground/70">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Turnaround & CTA */}
              <div className="pt-8 border-t border-border mt-auto">
                <div className="flex items-center gap-2 mb-6 text-foreground/40">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Turnaround: {plan.turnaround}</span>
                </div>
                
                <Button 
                  as="a"
                  href="#contact"
                  variant="primary" 
                  className="w-full bg-primary text-primary-foreground font-black tracking-widest text-xs flex items-center justify-center gap-2 group py-6 rounded-2xl shadow-xl hover:shadow-primary/20 transition-all"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <Rocket className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Support Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full glass border-border flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest">End-to-End mastery</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full glass border-border flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest">Agile execution</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full glass border-border flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest">ROI Focused Strategy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
