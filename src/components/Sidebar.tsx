import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const socialIcons = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-[300px] lg:sticky lg:top-8 lg:self-start shrink-0">
      <div className="sidebar-card p-6 flex flex-col items-center">
        {/* Avatar */}
        <div className="w-36 h-36 rounded-2xl overflow-hidden mb-5 ring-2 ring-border">
          <img
            src={profileAvatar}
            alt="Sachin K"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Role */}
        <h2 className="font-display text-xl font-bold text-foreground">Sachin K</h2>
        <span className="mt-2 px-4 py-1.5 rounded-lg bg-secondary text-xs font-medium text-secondary-foreground tracking-wide">
          AI & Data Science Engineer
        </span>

        {/* Divider */}
        <div className="w-full h-px bg-border my-6" />

        {/* Info items */}
        <div className="w-full space-y-5">
          <InfoItem
            icon={<MapPin className="w-4 h-4 text-primary" />}
            label="LOCATION"
            value="Bangalore, India"
          />
          <InfoItem
            icon={<Mail className="w-4 h-4 text-primary" />}
            label="EMAIL"
            value="sachin.k@example.com"
          />
          <InfoItem
            icon={<Github className="w-4 h-4 text-primary" />}
            label="GITHUB"
            value="sachin-k"
          />
          <InfoItem
            icon={<Linkedin className="w-4 h-4 text-primary" />}
            label="LINKEDIN"
            value="Sachin K"
          />
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mt-6">
          {socialIcons.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={s.label}
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground mt-5">
          © 2026 <span className="text-primary">Sachin K</span>
        </p>
      </div>
    </aside>
  );
};

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">
        {label}
      </p>
      <p className="text-sm text-foreground truncate">{value}</p>
    </div>
  </div>
);

export default Sidebar;
