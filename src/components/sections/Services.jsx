import { motion } from "framer-motion";
import { Search, MapPin, Globe, CreditCard, Layers, BarChart } from "lucide-react";

const SERVICES = [
  {
    title: "Google Maps SEO",
    desc: "Dominating local search results by optimizing your Google Business Profile (GBP) and improving your proximity-based ranking.",
    icon: <MapPin className="w-8 h-8" />,
    color: "from-foreground/20 to-foreground/5",
  },
  {
    title: "Custom Web Apps",
    desc: "End-to-end development of high-performance websites built with React and Vite for a seamless and responsive user experience.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-foreground/15 to-foreground/5",
  },
  {
    title: "Lead Gen Systems",
    desc: "Building internal tools and forms that automate your lead capture and follow-up process, powered by Supabase. No lead left behind.",
    icon: <Layers className="w-8 h-8" />,
    color: "from-foreground/20 to-foreground/10",
  },
  {
    title: "Brand Strategy",
    desc: "Crafting a visual and technical strategy that aligns with your business goals and helps you stand out from the competition.",
    icon: <Search className="w-8 h-8" />,
    color: "from-foreground/10 to-foreground/5",
  },
  {
    title: "Payment Systems",
    desc: "Integrating secure payment gateways and subscription models for your business to streamline revenue and growth.",
    icon: <CreditCard className="w-8 h-8" />,
    color: "from-foreground/25 to-foreground/5",
  },
  {
    title: "Growth Analytics",
    desc: "Providing deep insights into your business growth and customer behavior through integrated data tools and custom dashboards.",
    icon: <BarChart className="w-8 h-8" />,
    color: "from-foreground/15 to-foreground/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tighter"
          >
            PRECISION <br />
            <span className="text-primary italic">SERVICES</span>
          </motion.h2>
          <p className="max-w-xl mx-auto text-foreground/50">
            We offer bespoke digital solutions designed to help your business
            thrive in the modern competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass group relative p-6 md:p-10 rounded-[3rem] border-foreground/5 transition-all duration-500 overflow-hidden"
    >
      {/* Background Gradient Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      <div className={`mb-8 p-6 inline-flex rounded-[2rem] glass border-foreground/5 shadow-2xl transition-all duration-500 group-hover:scale-110`}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-foreground/50 leading-relaxed group-hover:text-foreground/70 transition-colors">
        {service.desc}
      </p>
    </motion.div>
  );
}
