import PageHeader from "@/components/PageHeader";
import { Cpu, Brain, Gamepad2, Camera, Dumbbell, BookOpen, Zap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const reveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stacks = [
  "Python", "TensorFlow", "PyTorch", "React", "TypeScript",
  "Scikit-learn", "Docker", "PostgreSQL", "FastAPI", "AWS",
];

const lifestyleCards = [
  {
    icon: <Cpu className="w-5 h-5 text-primary" />,
    title: "Open Source Enthusiast",
    desc: "Committed to advancing the tech community through active contributions to GitHub projects in AI, machine learning, and data science.",
  },
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: "Knowledge Sharer",
    desc: "Dedicated to mentoring and sharing insights on data science, deep learning, and AI advancements.",
  },
  {
    icon: <Dumbbell className="w-5 h-5 text-primary" />,
    title: "Active Lifestyle",
    desc: "Strive for balance with fitness routines and outdoor activities that fuel my creativity and focus.",
  },
  {
    icon: <Camera className="w-5 h-5 text-primary" />,
    title: "Creative Photographer",
    desc: "Find inspiration through photography — capturing the vastness of landscapes and the vibrance of urban life.",
  },
  {
    icon: <Gamepad2 className="w-5 h-5 text-primary" />,
    title: "Gaming Enthusiast",
    desc: "Dive into immersive gaming experiences, blending strategy, creativity, and a passion for design.",
  },
];

const AboutTab = () => {
  return (
    <div>
      <PageHeader title="Sachin K 🧑‍💻" />

      {/* Bio section */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6 }}
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          $ ls -al sachin 🧑‍💻
        </h3>

        <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
          <p>
            Hi, I'm Sachin K, an AI & Data Science Engineer with a passion for AI 🤖, Computer Vision 👁️, and Machine
            Learning 📊. I focus on developing innovative AI models, intelligent agents, and data-driven applications 📱
            that solve real-world problems.
          </p>
          <p>
            With a strong engineering background and a curiosity for deep learning and automation 🔧, I strive to push the
            boundaries of technology. I'm also an open-source contributor 🌐, mentor, and lifelong learner 📚.
          </p>
          <p>
            Outside of work, I enjoy gaming 🎮, photography 📸, reading 📖, and storytelling 🎵. Let's connect to explore my
            work!
          </p>
        </div>

        <p className="mt-5 font-semibold text-foreground text-sm">
          Self-motivated, Team player, AI Enthusiast, Love coding 🧑‍💻
        </p>
      </motion.div>

      {/* Coding Stats */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.15 }}
        className="mt-12"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          $ ls -al Coding Stats
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Stacks card */}
          <div className="info-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Stacks</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {stacks.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-secondary text-xs text-secondary-foreground font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Location card */}
          <div className="info-card p-5 flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">India (UTC +05:30)</span>
            </div>
            <div className="w-32 h-32 rounded-full border border-border/40 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-border/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-border/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Life Style */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.25 }}
        className="mt-12"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          $ ls -al Life Style
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {lifestyleCards.map((card, i) => (
            <div
              key={card.title}
              className="info-card p-5 hover:border-primary/20 border border-transparent transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                {card.icon}
                <h4 className="font-display text-sm font-semibold text-foreground">
                  {card.title}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutTab;
