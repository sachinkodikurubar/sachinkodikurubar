import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "AI / ML", "Web Development", "Data Science"];

const projects = [
  {
    title: "Smart Career Advisor 🎯",
    category: "AI / ML",
    desc: "Built an AI-based system to suggest career paths based on user skills and interests. Designed a simple and interactive interface.",
    tech: ["Python", "Machine Learning", "AI"],
    color: "from-blue-900/60 to-blue-800/30",
  },
  {
    title: "Market Price Prediction of Crops 📈",
    category: "AI / ML",
    desc: "Developed a machine learning model to predict crop prices based on historical data. Applied data preprocessing and predictive analysis techniques.",
    tech: ["Python", "ML", "Data Preprocessing"],
    color: "from-emerald-900/60 to-emerald-800/30",
  },
  {
    title: "Personal Portfolio Website 🌐",
    category: "Web Development",
    desc: "Designed and developed a professional portfolio website to showcase projects and skills. Implemented responsive design and smooth UI/UX.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-purple-900/60 to-purple-800/30",
  },
  {
    title: "Power BI Dashboards 📊",
    category: "Data Science",
    desc: "Built multiple interactive dashboards using Power BI for data analysis and visualization with dynamic filtering capabilities.",
    tech: ["Power BI", "Data Cleaning", "DAX"],
    color: "from-amber-900/60 to-amber-800/30",
  },
  {
    title: "KNN Classification Model 🤖",
    category: "AI / ML",
    desc: "Implemented KNN algorithm for classification tasks with data preprocessing, model training, and evaluation pipelines.",
    tech: ["Python", "Scikit-learn", "KNN"],
    color: "from-rose-900/60 to-rose-800/30",
  },
  {
    title: "Data Analysis Projects 🔍",
    category: "Data Science",
    desc: "Multiple data cleaning, exploration, and analysis projects using Python, Pandas, and visualization libraries.",
    tech: ["Python", "Pandas", "Matplotlib"],
    color: "from-cyan-900/60 to-cyan-800/30",
  },
];

const PortfolioTab = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) => p.category === activeTag);

  return (
    <div>
      <PageHeader title="Sachin's Portfolio" />

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTag(cat)}
            className={`text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTag === cat
                ? "text-primary-foreground bg-primary font-medium shadow-[0_0_20px_hsl(42_90%_52%/0.3)]"
                : "text-muted-foreground bg-secondary border border-border hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ ease, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              {/* Project thumbnail */}
              <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${project.color} flex flex-col items-center justify-center p-6 mb-3 overflow-hidden neon-border group-hover:border-primary/40 transition-all duration-300 relative`}>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                <p className="text-foreground/70 text-sm text-center font-medium leading-relaxed relative z-10">
                  {project.desc}
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 relative z-10">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-background/40 text-[10px] text-foreground/60 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">{project.category}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PortfolioTab;
