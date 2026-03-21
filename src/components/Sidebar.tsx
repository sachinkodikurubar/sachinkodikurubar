import { MapPin, Mail, Github, Linkedin, Instagram, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import profileAvatar from "@/assets/profile-avatar.png";

const socialIcons = [
  { icon: Github, href: "https://github.com/SachinKodikurubar", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sachin-kodikurubar-20291333b/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sachinsk30", label: "Instagram" },
];

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-[300px] lg:sticky lg:top-8 lg:self-start shrink-0">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease, duration: 0.7 }}
        className="sidebar-card neon-border p-6 flex flex-col items-center relative overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease, duration: 0.6, delay: 0.2 }}
          className="w-36 h-36 rounded-2xl overflow-hidden mb-5 ring-2 ring-primary/30 relative group"
        >
          <img
            src={profileAvatar}
            alt="Sachin Kodikurubar"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Name & Role */}
        <h2 className="font-display text-xl font-bold text-foreground glow-text">
          Sachin Kodikurubar
        </h2>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease, duration: 0.5, delay: 0.3 }}
          className="mt-2 px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium text-primary tracking-wide"
        >
          AI & Data Science Student
        </motion.span>

        {/* Divider */}
        <div className="w-full h-px bg-border my-6" />

        {/* Info items */}
        <div className="w-full space-y-5">
          <InfoItem
            icon={<MapPin className="w-4 h-4 text-primary" />}
            label="LOCATION"
            value="Hanagal, Karnataka, India"
          />
          <InfoItem
            icon={<Mail className="w-4 h-4 text-primary" />}
            label="EMAIL"
            value="sachinsiddappakodikurubar@gmail.com"
            truncate
          />
          <InfoItem
            icon={<Phone className="w-4 h-4 text-primary" />}
            label="PHONE"
            value="6363418533"
          />
          <InfoItem
            icon={<Github className="w-4 h-4 text-primary" />}
            label="GITHUB"
            value="SachinKodikurubar"
          />
          <InfoItem
            icon={<Linkedin className="w-4 h-4 text-primary" />}
            label="LINKEDIN"
            value="Sachin Kodikurubar"
          />
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mt-6">
          {socialIcons.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
              aria-label={s.label}
            >
              <s.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground mt-5">
          © 2026 <span className="text-primary">Sachin Kodikurubar</span>
        </p>
      </motion.div>
    </aside>
  );
};

const InfoItem = ({
  icon,
  label,
  value,
  truncate,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  truncate?: boolean;
}) => (
  <motion.div
    className="flex items-center gap-3 group"
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
  >
    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-200">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">
        {label}
      </p>
      <p className={`text-sm text-foreground ${truncate ? "truncate" : ""}`}>{value}</p>
    </div>
  </motion.div>
);

export default Sidebar;
