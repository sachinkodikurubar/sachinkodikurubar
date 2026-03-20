import { ease } from "@/lib/motion";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const transition = { ease: ease as unknown as [number, number, number, number] };

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow pointer-events-none" />

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...transition, duration: 0.7, delay: 0.3 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground font-body surface-glass">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...transition, duration: 1, delay: 0.5 }}
        className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tight"
      >
        Sachin
        <br />
        <span className="text-gradient-accent">K</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...transition, duration: 0.8, delay: 0.8 }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md font-body leading-relaxed"
      >
        Building intelligent systems at the intersection of
        <span className="text-foreground font-medium"> AI</span> &
        <span className="text-foreground font-medium"> Data Science</span>
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...transition, duration: 0.7, delay: 1.1 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-200"
        >
          View Projects
        </a>
        <a
          href="#about"
          className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary active:scale-[0.97] transition-all duration-200"
        >
          About Me
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
