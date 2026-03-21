import PageHeader from "@/components/PageHeader";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import { useState } from "react";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/SachinKodikurubar", value: "SachinKodikurubar", color: "from-gray-500/20 to-gray-600/10" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sachin-kodikurubar-20291333b/", value: "Sachin Kodikurubar", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sachinsk30", value: "@sachinsk30", color: "from-pink-500/20 to-purple-600/10" },
];

const ContactTab = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div>
      <PageHeader title="Contact Sachin" />

      {/* Header message */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6 }}
        className="glass-card neon-border p-6 mb-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">Let's Connect!</h3>
            <p className="text-xs text-muted-foreground">Always open to new opportunities</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
          I'm always excited to collaborate on innovative AI projects, internship
          opportunities, or just have a conversation about the future of technology.
          Feel free to reach out! 📌 Let's Build Something Amazing Together!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Info side */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ ease, duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          {/* Contact cards */}
          <div className="space-y-3">
            {[
              { icon: <Mail className="w-4 h-4 text-primary" />, label: "Email", value: "sachinsiddappakodikurubar@gmail.com", href: "mailto:sachinsiddappakodikurubar@gmail.com" },
              { icon: <Phone className="w-4 h-4 text-primary" />, label: "Phone", value: "6363418533", href: "tel:6363418533" },
              { icon: <MapPin className="w-4 h-4 text-primary" />, label: "Location", value: "Hanagal, Karnataka, India" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, ease }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="glass-card neon-border p-4 flex items-center gap-3 hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors truncate block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">Connect With Me</p>
            <div className="space-y-3">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, ease }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className={`flex items-center gap-3 glass-card neon-border p-4 hover:border-primary/40 transition-all duration-300 bg-gradient-to-r ${s.color}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-sm text-foreground font-medium">{s.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form side */}
        <motion.form
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ ease, duration: 0.6, delay: 0.2 }}
          className="glass-card neon-border p-6 space-y-4 h-fit"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="font-display text-sm font-semibold text-foreground">Send a Message</h3>
          </div>

          {["name", "email", "subject"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                onFocus={() => setFocused(field)}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 rounded-xl bg-secondary border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none transition-all duration-300 ${
                  focused === field
                    ? "border-primary/50 ring-2 ring-primary/20 shadow-[0_0_15px_hsl(42_90%_52%/0.1)]"
                    : "border-border"
                }`}
              />
            </div>
          ))}
          
          <div className="relative">
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`w-full px-4 py-3 rounded-xl bg-secondary border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none transition-all duration-300 resize-none ${
                focused === "message"
                  ? "border-primary/50 ring-2 ring-primary/20 shadow-[0_0_15px_hsl(42_90%_52%/0.1)]"
                  : "border-border"
              }`}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(42 90% 52% / 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_hsl(42_90%_52%/0.3)]"
          >
            <Send className="w-4 h-4" />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactTab;
