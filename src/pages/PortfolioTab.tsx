import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import aiHeroBg from "@/assets/ai-hero-bg.jpg";
import dataVizBg from "@/assets/data-viz-bg.jpg";
import codingLifestyle from "@/assets/coding-lifestyle.jpg";

const categories = ["All", "AI / ML", "Web Development", "Data Science"];

const projects = [
  {
    title: "Smart Career Advisor 🎯",
    category: "AI / ML",
    desc: "Built an AI-based system to suggest career paths based on user skills and interests. Designed a simple and interactive interface.",
    tech: ["Python", "Machine Learning", "AI"],
    image: aiHeroBg,
    highlights: ["AI-powered recommendations", "Interactive UI", "Skill-based analysis"],
  },
  {
    title: "Market Price Prediction of Crops 📈",
    category: "AI / ML",
    desc: "Developed a machine learning model to predict crop prices based on historical data. Applied data preprocessing and predictive analysis techniques.",
    tech: ["Python", "ML", "Data Preprocessing"],
    image: dataVizBg,
    highlights: ["Historical data analysis", "Price forecasting", "Data visualization"],
  },
  {
    title: "Personal Portfolio Website 🌐",
    category: "Web Development",
    desc: "Designed and developed a professional portfolio website to showcase projects and skills. Implemented responsive design and smooth UI/UX.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: codingLifestyle,
    highlights: ["Responsive design", "Smooth animations", "Modern UI/UX"],
  },
  {
    title: "Power BI Dashboards 📊",
    category: "Data Science",
    desc: "Built multiple interactive dashboards using Power BI for data analysis and visualization with dynamic filtering capabilities.",
    tech: ["Power BI", "Data Cleaning", "DAX"],
    image: dataVizBg,
    highlights: ["Interactive filters", "Real-time data", "Visual reports"],
  },
  {
    title: "KNN Classification Model 🤖",
    category: "AI / ML",
    desc: "Implemented KNN algorithm for classification tasks with data preprocessing, model training, and evaluation pipelines.",
    tech: ["Python", "Scikit-learn", "KNN"],
    image: aiHeroBg,
    highlights: ["Model evaluation", "Data preprocessing", "Accuracy optimization"],
  },
  {
    title: "Data Analysis Projects 🔍",
    category: "Data Science",
    desc: "Multiple data cleaning, exploration, and analysis projects using Python, Pandas, and visualization libraries.",
    tech: ["Python", "Pandas", "Matplotlib"],
    image: dataVizBg,
    highlights: ["Exploratory analysis", "Data cleaning", "Statistical insights"],
  },
];

const PortfolioTab = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) => p.category === activeTag);

  return (
    <div>
      <PageHeader title="Sachin's Portfolio" />

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, ease }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTag(cat)}
            className={`text-sm px-5 py-2.5 rounded-xl transition-all duration-300 ${
              activeTag === cat
                ? "text-primary-foreground bg-primary font-medium shadow-[0_0_25px_hsl(42_90%_52%/0.4)]"
                : "text-muted-foreground bg-secondary border border-border hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Project count */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xs text-muted-foreground mb-6 font-mono-terminal"
      >
        <span className="text-primary">$</span> Found {filtered.length} project{filtered.length !== 1 ? 's' : ''} matching "{activeTag}"
      </motion.p>

      {/* Projects grid */}
      <motion.div layout className="grid sm:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ ease, duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="glass-card neon-border overflow-hidden hover:border-primary/40 transition-all duration-300">
                {/* Project image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-background/80 backdrop-blur-sm text-[10px] text-primary font-medium border border-primary/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay with highlights */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-4"
                  >
                    <div className="space-y-2">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-foreground">
                          <ArrowRight className="w-3 h-3 text-primary" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {project.desc}
                  </p>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-secondary text-[10px] text-muted-foreground font-medium border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PortfolioTab;
