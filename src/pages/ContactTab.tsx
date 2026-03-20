import PageHeader from "@/components/PageHeader";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const reveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

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
            I'm always excited to collaborate on innovative AI projects, research
            opportunities, or just have a conversation about the future of technology.
            Feel free to reach out!
          </p>

          <div className="space-y-4">
            <ContactInfo
              icon={<Mail className="w-4 h-4 text-primary" />}
              label="Email"
              value="sachin.k@example.com"
            />
            <ContactInfo
              icon={<Phone className="w-4 h-4 text-primary" />}
              label="Phone"
              value="+91 98765 43210"
            />
            <ContactInfo
              icon={<MapPin className="w-4 h-4 text-primary" />}
              label="Location"
              value="Bangalore, India"
            />
          </div>

          {/* Map placeholder */}
          <div className="info-card h-48 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Bangalore, Karnataka, India</p>
            </div>
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
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
          />
          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
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
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">{label}</p>
      <p className="text-sm text-foreground">{value}</p>
    </div>
  </div>
);

export default ContactTab;
