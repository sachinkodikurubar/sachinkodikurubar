import { ease } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "React", level: 75 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    title: "Data & ML",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 82 },
      { name: "NLP", level: 85 },
      { name: "Computer Vision", level: 72 },
      { name: "Data Visualization", level: 88 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Docker", level: 78 },
      { name: "AWS", level: 70 },
      { name: "Git", level: 90 },
      { name: "Jupyter", level: 95 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="skills" className="py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ease: ease, duration: 0.7 }}
        >
          <span className="text-sm font-medium text-primary font-body tracking-wider uppercase">Expertise</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Technical <span className="text-gradient-accent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              variants={reveal}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ ease: ease, duration: 0.6, delay: 0.15 + ci * 0.12 }}
              className="p-6 rounded-2xl border-glow surface-elevated"
            >
              <h3 className="font-display text-sm font-semibold text-primary mb-6 tracking-wide uppercase">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5 font-body">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          ease: ease,
                          duration: 1,
                          delay: 0.4 + ci * 0.12 + si * 0.06,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
