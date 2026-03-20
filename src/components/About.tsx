import { ease } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: "3+", label: "Years of Experience" },
    { value: "12+", label: "Projects Completed" },
    { value: "5+", label: "ML Models Deployed" },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ease: ease, duration: 0.7 }}
        >
          <span className="text-sm font-medium text-primary font-body tracking-wider uppercase">About</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Turning raw data into
            <br />
            <span className="text-gradient-accent">meaningful impact</span>
          </h2>
        </motion.div>

        <motion.p
          variants={reveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ease: ease, duration: 0.7, delay: 0.15 }}
          className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-2xl font-body"
        >
          I'm Sachin K, an AI and Data Science enthusiast passionate about creating
          intelligent solutions that solve real-world problems. From predictive models
          to full-stack ML pipelines, I love building systems that make data actionable
          and decisions smarter.
        </motion.p>

        <div className="grid grid-cols-3 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={reveal}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ ease: ease, duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="p-6 rounded-xl border-glow surface-elevated"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-accent tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2 font-body">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
