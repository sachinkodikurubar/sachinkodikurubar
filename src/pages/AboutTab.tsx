import PageHeader from "@/components/PageHeader";
import { Brain, Gamepad2, Camera, Dumbbell, BookOpen, Zap, MapPin, Coffee, Music, Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const reveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const stacks = [
  "Python", "C", "Java", "TensorFlow", "OpenCV", "Scikit-learn",
  "Power BI", "SQL", "HTML/CSS", "JavaScript", "React", "Git",
  "VS Code", "Jupyter Notebook",
];

const lifestyleCards = [
  {
    icon: <Brain className="w-5 h-5 text-primary" />,
    title: "AI & Knowledge Explorer",
    desc: "Deeply passionate about exploring artificial intelligence, simplifying complex concepts, and staying updated with cutting-edge innovations in data science and technology.",
  },
  {
    icon: <Dumbbell className="w-5 h-5 text-primary" />,
    title: "High-Performance Lifestyle",
    desc: "Maintaining discipline through fitness and sports—boosting focus, energy, and a growth mindset that reflects in both personal and professional life.",
  },
  {
    icon: <Camera className="w-5 h-5 text-primary" />,
    title: "Visual Storyteller",
    desc: "Capturing creativity through photography—turning ordinary moments into compelling visual stories with a unique perspective.",
  },
  {
    icon: <Gamepad2 className="w-5 h-5 text-primary" />,
    title: "Strategic Gaming Mindset",
    desc: "Engaging in gaming that enhances decision-making, problem-solving, and strategic thinking—while also exploring the fundamentals of game development.",
  },
];

const AboutTab = () => {
  return (
    <div>
      <PageHeader title="Sachin Kodikurubar 👨‍💻" />

      {/* Bio section */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6 }}
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> whoami
        </h3>

        <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
          <p>
            👋 Hi, I'm <span className="text-foreground font-semibold">Sachin Kodikurubar</span> — an AI & Data Science 
            Student passionate about Artificial Intelligence 🤖, Machine Learning 📊, and Smart Automation ⚡
          </p>
          <p>
            🧠 I love solving real-life problems — whether through AI or simple creative thinking. Currently exploring 
            Machine Learning Models, Generative AI, and Real-time AI Applications.
          </p>
          <p>
            🎧 I enjoy listening to music while coding — it keeps me focused and in flow. 
            ☕ Late-night coding sessions + coffee = my productivity zone.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Problem Solver", "Fast Learner", "Self-Driven", "Team Player"].map((trait) => (
            <span
              key={trait}
              className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium text-primary"
            >
              ✔ {trait}
            </span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 font-mono-terminal text-sm text-muted-foreground"
        >
          <span className="text-primary">🔥</span> Daily Routine: Code 💻 → Learn 📚 → Build 🛠️ → Improve 📈 → Repeat 🔁
        </motion.p>
      </motion.div>

      {/* Coding Stats & Skills */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.15 }}
        className="mt-12"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> ls -al Tech Stack ⚙️
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Stacks card */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Stacks</span>
            </div>
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-wrap gap-2">
              {stacks.map((s) => (
                <motion.span
                  key={s}
                  variants={reveal}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs text-secondary-foreground font-medium hover:border-primary/30 hover:text-primary transition-colors duration-200 cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Location card */}
          <div className="glass-card p-5 flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">India (UTC +05:30)</span>
            </div>
            <div className="w-32 h-32 rounded-full border border-border/40 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="w-24 h-24 rounded-full border border-border/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-border/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_hsl(42_90%_52%/0.6)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skill Bars */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.2 }}
        className="mt-12"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> cat skills.json
        </h3>
        <div className="glass-card p-5 space-y-4">
          <SkillBar name="Python" percent={90} delay={0.1} />
          <SkillBar name="Machine Learning" percent={80} delay={0.2} />
          <SkillBar name="Power BI / Data Viz" percent={85} delay={0.3} />
          <SkillBar name="SQL / DBMS" percent={75} delay={0.4} />
          <SkillBar name="Web Development" percent={70} delay={0.5} />
          <SkillBar name="TensorFlow / OpenCV" percent={72} delay={0.6} />
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.25 }}
        className="mt-12"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> ls -al Achievements 🏆
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: <Trophy className="w-5 h-5 text-primary" />, text: "Participated in Smart India Hackathon (SIH)" },
            { icon: <Award className="w-5 h-5 text-primary" />, text: "Built multiple interactive dashboards using Power BI" },
            { icon: <Trophy className="w-5 h-5 text-primary" />, text: "Completed multiple self-driven AI & Data Science projects" },
            { icon: <Award className="w-5 h-5 text-primary" />, text: "Strong problem-solving through real-world implementations" },
          ].map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card p-4 flex items-start gap-3 neon-border"
            >
              {a.icon}
              <p className="text-sm text-muted-foreground">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Life Style */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.3 }}
        className="mt-12"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> ls -al Life Style
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {lifestyleCards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.02, y: -3 }}
              className="glass-card p-5 neon-border hover:border-primary/30 transition-colors duration-300"
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const SkillBar = ({ name, percent, delay }: { name: string; percent: number; delay: number }) => (
  <div>
    <div className="flex justify-between mb-1.5">
      <span className="text-sm text-foreground font-medium">{name}</span>
      <span className="text-xs text-primary font-mono-terminal">{percent}%</span>
    </div>
    <div className="skill-bar h-2">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1.2, delay, ease }}
      />
    </div>
  </div>
);

export default AboutTab;
