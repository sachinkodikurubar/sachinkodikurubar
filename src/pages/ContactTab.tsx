import PageHeader from "@/components/PageHeader";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const reveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/SachinKodikurubar", value: "SachinKodikurubar" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sachin-kodikurubar-20291333b/", value: "Sachin Kodikurubar" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sachinsk30", value: "@sachinsk30" },
];

const ContactTab = () => {
  return (
    <div>
      <PageHeader title="Contact Sachin" />

      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Info side */}
        <div className="space-y-6">
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            I'm always excited to collaborate on innovative AI projects, internship
            opportunities, or just have a conversation about the future of technology.
            Feel free to reach out! 📌 Let's Build Something Amazing Together!
          </p>

          <div className="space-y-4">
            <ContactInfo
              icon={<Mail className="w-4 h-4 text-primary" />}
              label="Email"
              value="sachinsiddappakodikurubar@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="w-4 h-4 text-primary" />}
              label="Phone"
              value="6363418533"
            />
            <ContactInfo
              icon={<MapPin className="w-4 h-4 text-primary" />}
              label="Location"
              value="Hanagal, Karnataka, India"
            />
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Connect With Me</p>
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 glass-card neon-border p-3 hover:border-primary/30 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm text-foreground">{s.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Form side */}
        <motion.form
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ ease, duration: 0.6, delay: 0.15 }}
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 transition-all duration-200"
          />
          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 transition-all duration-200 resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_hsl(42_90%_52%/0.3)]"
          >
            <Send className="w-4 h-4" />
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

const ContactInfo = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <motion.div className="flex items-center gap-3" whileHover={{ x: 4 }}>
    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">{label}</p>
      <p className="text-sm text-foreground">{value}</p>
    </div>
  </motion.div>
);

export default ContactTab;
