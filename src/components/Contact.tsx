import { ease } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const links = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Kaggle", href: "#" },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ease: ease, duration: 0.7 }}
        >
          <span className="text-sm font-medium text-primary font-body tracking-wider uppercase">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Let's build something
            <br />
            <span className="text-gradient-accent">extraordinary</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ ease: ease, duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              I'm always excited to collaborate on innovative AI projects, research
              opportunities, or just have a conversation about the future of technology.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground font-body">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">sachin.k@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground font-body">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Bangalore, India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            variants={reveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ ease: ease, duration: 0.6, delay: 0.25 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
            />
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
