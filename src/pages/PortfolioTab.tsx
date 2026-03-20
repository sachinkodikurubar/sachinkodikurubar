import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";

const categories = ["All", "AI Development", "Web Development", "Data Science", "Computer Vision"];

const projects = [
  {
    title: "Smart Career Advisor 🤖",
    category: "AI Development",
    desc: "AI-based career guidance system using NLP and collaborative filtering.",
    color: "from-blue-900/60 to-blue-800/30",
  },
  {
    title: "Sentiment Analysis Engine 📊",
    category: "AI Development",
    desc: "Real-time social media sentiment classifier with transformer models.",
    color: "from-purple-900/60 to-purple-800/30",
  },
  {
    title: "Predictive Maintenance System ⚙️",
    category: "Data Science",
    desc: "IoT sensor data pipeline with anomaly detection models.",
    color: "from-emerald-900/60 to-emerald-800/30",
  },
  {
    title: "DataViz Dashboard 📈",
    category: "Web Development",
    desc: "Interactive data visualization platform with dynamic filtering.",
    color: "from-orange-900/60 to-orange-800/30",
  },
  {
    title: "Object Detection System 👁️",
    category: "Computer Vision",
    desc: "Real-time object detection using YOLO and deep learning.",
    color: "from-rose-900/60 to-rose-800/30",
  },
  {
    title: "AI Chat Application 💬",
    category: "AI Development",
    desc: "Conversational AI using LLMs and retrieval-augmented generation.",
    color: "from-cyan-900/60 to-cyan-800/30",
  },
  {
    title: "Recommendation Engine 🎯",
    category: "Data Science",
    desc: "Collaborative filtering system for personalized suggestions.",
    color: "from-amber-900/60 to-amber-800/30",
  },
  {
    title: "Healthcare Analytics 🏥",
    category: "Web Development",
    desc: "Medical data platform with ML-powered diagnostics support.",
    color: "from-teal-900/60 to-teal-800/30",
  },
  {
    title: "Face Recognition System 🔍",
    category: "Computer Vision",
    desc: "Facial detection and recognition using deep learning.",
    color: "from-indigo-900/60 to-indigo-800/30",
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
          <button
            key={cat}
            onClick={() => setActiveTag(cat)}
            className={`text-sm px-3 py-1.5 rounded-lg transition-colors duration-200 ${
              activeTag === cat
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ ease, duration: 0.4 }}
              className="group cursor-pointer"
            >
              {/* Project thumbnail */}
              <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center p-6 mb-3 overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors duration-300`}>
                <p className="text-foreground/70 text-sm text-center font-medium leading-relaxed">
                  {project.desc}
                </p>
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
