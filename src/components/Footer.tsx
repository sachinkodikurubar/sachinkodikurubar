import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <footer ref={ref} className="border-t border-border py-12 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p className="text-sm text-muted-foreground font-body">
          © 2026 Sachin K. Crafted with precision.
        </p>
        <p className="text-sm text-muted-foreground font-body">
          Built with React & Framer Motion
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
