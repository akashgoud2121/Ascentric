import { motion } from "framer-motion";
import { Code2, MessageSquare, User, Briefcase } from "lucide-react";

const TEAM = [
  {
    name: "Akash",
    role: "Growth & Strategy",
    bio: "Focuses on high-impact business growth, client outreach, and digital strategy. Expert in scaling local businesses from Google Maps to global brands.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Akash",
  },
  {
    name: "Prithvee",
    role: "Design & Development",
    bio: "The technical architect behind our high-performance web ecosystems. Specializes in building modular, stunning, and responsive digital products.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prithvee",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tighter"
          >
            THE <span className="text-primary italic">DUO</span>
          </motion.h2>
          <p className="max-w-xl mx-auto text-foreground/50">
            Meet the two minds behind the growth. We combine strategy and
            technical design to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {TEAM.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass p-12 rounded-[4rem] group border-white/5 relative bg-white/5 overflow-hidden transition-all duration-700 hover:bg-white/10"
    >
      {/* Decorative Blob */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full transition-all duration-700 group-hover:scale-125`} />
      
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-8 w-40 h-40 rounded-[2.5rem] p-4 glass border-white/10 bg-white/5 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
          <img
             src={member.image}
             alt={member.name}
             className="w-full h-full object-cover filter brightness-110 drop-shadow-2xl"
          />
        </div>
        <h3 className="text-3xl font-black mb-2 tracking-tight">{member.name}</h3>
        <p className="text-primary font-bold mb-6 italic tracking-wide">{member.role}</p>
        <p className="text-foreground/50 leading-relaxed max-w-sm mb-10 group-hover:text-foreground/70 transition-colors">
          {member.bio}
        </p>

        <div className="flex gap-4">
          <SocialIcon icon={<MessageSquare className="w-5 h-5" />} />
          <SocialIcon icon={<User className="w-5 h-5" />} />
          <SocialIcon icon={<Code2 className="w-5 h-5" />} />
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({ icon }) {
  return (
    <motion.a
      whileHover={{ y: -5, scale: 1.1 }}
      className="p-4 glass rounded-2xl border-white/5 text-foreground/40 hover:text-primary hover:border-primary/30 transition-all duration-300"
      href="#"
    >
      {icon}
    </motion.a>
  );
}
