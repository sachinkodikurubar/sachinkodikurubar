import { ease } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const projects = [
  {
    title: "Smart Career Advisor",
    desc: "AI-based career guidance system using NLP and collaborative filtering to recommend personalized career paths based on skills, interests, and market trends.",
    tags: ["Python", "NLP", "Scikit-learn", "Flask"],
  },
  {
    title: "Sentiment Analysis Engine",
    desc: "Real-time social media sentiment classifier processing tweets with transformer-based models, achieving 94% accuracy on benchmark datasets.",
    tags: ["PyTorch", "Transformers", "FastAPI", "Redis"],
  },
  {
    title: "Predictive Maintenance System",
    desc: "IoT sensor data pipeline with anomaly detection models that predict equipment failures 48 hours ahead, reducing downtime by 37%.",
    tags: ["TensorFlow", "Time Series", "AWS", "Docker"],
  },
  {
    title: "DataViz Dashboard",
    desc: "Interactive data visualization platform for exploring complex datasets with dynamic filtering, custom chart builders, and automated insight generation.",
    tags: ["React", "D3.js", "PostgreSQL", "GraphQL"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="projects" className="py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ease: ease, duration: 0.7 }}
        >
          <span className="text-sm font-medium text-primary font-body tracking-wider uppercase">Work</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Selected <span className="text-gradient-accent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={reveal}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ ease: ease, duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl border-glow surface-elevated relative overflow-hidden cursor-pointer"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 text-muted-foreground">
                    <Github className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
                    <ExternalLink className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed font-body mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
