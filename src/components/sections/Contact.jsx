import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Loader2 } from "lucide-react";
import Button from "../ui/Button";
import { supabase } from "../../lib/supabase";
import { cn } from "../../lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    project: "",
    projectType: "Portfolio"
  });
  const [status, setStatus] = useState("idle");

  const PROJECT_TYPES = [
    "Portfolio", "E-commerce", "Landing Page", "Corporate", "SaaS", "Redesign"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const { error } = await supabase.from("leads").insert([{
        name: formData.name,
        email: formData.email,
        project_type: formData.projectType,
        notes: formData.project,
        status: 'new'
      }]);

      if (error) throw error;
      
      setStatus("success");
      setFormData({ 
        name: "", 
        email: "", 
        project: "", 
        projectType: "Portfolio"
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      // Keep error state visible so user knows it failed
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-accent/5">
      <div className="max-w-7xl mx-auto container-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info Column */}
        <div className="lg:sticky lg:top-32 h-fit">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-8 tracking-tighter"
          >
            TELL US ABOUT <br />
            <span className="text-primary italic font-black uppercase">YOUR PROJECT</span>
          </motion.h2>
          <p className="max-w-md text-foreground/50 mb-12">
            Let's build something extraordinary. Select your requirements below and we'll get back to you with a personalized strategy.
          </p>

          <div className="space-y-6">
            <ContactInfo icon={<Mail className="w-5 h-5" />} text="motivebuilders@gmail.com" />
            <div className="pt-8 opacity-40">
               <span className="text-[10px] font-black uppercase tracking-[0.3em]">Direct Inquiry Form</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-6 md:p-10 rounded-[3rem] border border-border bg-background relative shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary scale-110">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black mb-2">Inquiry Received!</h3>
                <p className="text-foreground/50 mb-8">We'll analyze your requirements and reach out within 24 hours.</p>
                <Button onClick={() => setStatus("idle")} variant="glass" size="sm">
                  Send Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-2">Name</label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full h-14 px-6 glass rounded-2xl border-border bg-background focus:border-primary/50 outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-2">Email</label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full h-14 px-6 glass rounded-2xl border-border bg-background focus:border-primary/50 outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-2">Project Type</label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={cn(
                          "px-4 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all",
                          formData.projectType === type 
                            ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                            : "glass bg-background/50 hover:bg-foreground/5 text-foreground/60 border-border"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-2">Ideas / Notes</label>
                  <textarea
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us more about what you want to build..."
                    className="w-full p-5 glass rounded-2xl border-border bg-background focus:border-primary/50 outline-none transition-all resize-none shadow-sm"
                  />
                </div>

                <Button
                  disabled={status === "loading"}
                  variant="primary"
                  size="lg"
                  className="w-full h-16 font-black tracking-widest uppercase flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <span className="relative z-10 flex items-center gap-2">
                        Get a Free Quote
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="p-4 glass rounded-[1.5rem] bg-foreground/[0.03] border-foreground/5 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <p className="text-foreground/70 font-semibold group-hover:text-foreground transition-colors">
        {text}
      </p>
    </div>
  );
}
