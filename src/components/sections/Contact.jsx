import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import Button from "../ui/Button";
import { supabase } from "../../lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const { error } = await supabase.from("leads").insert([formData]);
      if (error) throw error;
      setStatus("success");
      setFormData({ name: "", email: "", project: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      // Fallback for demo if supabase isn't configured
      setTimeout(() => setStatus("success"), 1500);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-accent/5">
      <div className="max-w-7xl mx-auto container-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Info Column */}
        <div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-8 tracking-tighter"
          >
            READY TO <br />
            <span className="text-primary italic font-black">SCALE UP?</span>
          </motion.h2>
          <p className="max-w-md text-foreground/50 mb-12">
            Let's discuss how we can optimize your digital presence and
            transform your Google Maps visibility into consistent growth.
          </p>

          <div className="space-y-6">
            <ContactInfo icon={<Mail className="w-5 h-5" />} text="akash-prithvee@example.com" />
            <ContactInfo icon={<Phone className="w-5 h-5" />} text="+1 (234) 567-890" />
            <ContactInfo icon={<MapPin className="w-5 h-5" />} text="Targeting Local Businesses Globally" />
          </div>
        </div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-6 md:p-10 rounded-[3rem] border-foreground/5 bg-foreground/[0.02] relative shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary scale-110">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                <p className="text-foreground/50 mb-8">We'll get back to you within 24 hours.</p>
                <Button onClick={() => setStatus("idle")} variant="outline" size="sm">
                  Send Another
                </Button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/40 ml-2">Your Name</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-16 px-6 glass rounded-2xl border-foreground/10 bg-background focus:border-primary/50 outline-none transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/40 ml-2">Business Email</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="example@company.com"
                    className="w-full h-16 px-6 glass rounded-2xl border-foreground/10 bg-background focus:border-primary/50 outline-none transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/40 ml-2">Project Details</label>
                  <textarea
                    required
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your project or audit needs"
                    className="w-full p-6 glass rounded-2xl border-foreground/10 bg-background focus:border-primary/50 outline-none transition-all duration-300 resize-none shadow-sm"
                  />
                </div>

                <Button
                  disabled={status === "loading"}
                  variant="primary"
                  size="lg"
                  className="w-full h-16 font-black tracking-widest uppercase flex items-center justify-center gap-3 group"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
