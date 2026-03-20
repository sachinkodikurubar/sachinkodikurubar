import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const transition = { ease, duration: 0.8 };

const Nav = () => {
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      style={{
        backgroundColor: useTransform(navBg, (v) =>
          `hsl(220 14% 6% / ${v * 0.9})`
        ),
        backdropFilter: useTransform(navBg, (v) =>
          `blur(${v * 16}px)`
        ),
      }}
    >
      <motion.a
        href="#"
        className="font-display text-lg font-semibold tracking-tight text-foreground"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...transition, delay: 0.1 }}
      >
        SK<span className="text-gradient-accent">.</span>
      </motion.a>

      <motion.div
        className="hidden md:flex items-center gap-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
      >
        {["About", "Projects", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
          >
            {item}
          </a>
        ))}
      </motion.div>

      <motion.a
        href="#contact"
        className="text-sm font-medium text-primary-foreground bg-primary px-5 py-2.5 rounded-lg hover:opacity-90 active:scale-[0.97] transition-all duration-200"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...transition, delay: 0.3 }}
      >
        Let's Talk
      </motion.a>
    </motion.nav>
  );
};

export default Nav;
