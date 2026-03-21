import PageHeader from "@/components/PageHeader";
import { Brain, Gamepad2, Camera, Dumbbell, Zap, MapPin, Trophy, Award, Coffee, Music, Headphones, Code2, Lightbulb, Target, Flame, RotateCcw, BookOpen, Cpu, BarChart3, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { ease } from "@/lib/motion";
import { useRef, useState, useEffect } from "react";
import aiHeroBg from "@/assets/ai-hero-bg.jpg";
import codingLifestyle from "@/assets/coding-lifestyle.jpg";
import sportsLifestyle from "@/assets/sports-lifestyle.jpg";
import photographyLifestyle from "@/assets/photography-lifestyle.jpg";
import gamingLifestyle from "@/assets/gaming-lifestyle.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const stacks = [
  { name: "Python 🐍", color: "from-blue-500/20 to-blue-600/10" },
  { name: "C", color: "from-gray-500/20 to-gray-600/10" },
  { name: "Java ☕", color: "from-orange-500/20 to-orange-600/10" },
  { name: "TensorFlow", color: "from-orange-500/20 to-yellow-600/10" },
  { name: "OpenCV", color: "from-green-500/20 to-green-600/10" },
  { name: "Scikit-learn", color: "from-blue-500/20 to-orange-600/10" },
  { name: "Power BI", color: "from-yellow-500/20 to-yellow-600/10" },
  { name: "SQL", color: "from-cyan-500/20 to-cyan-600/10" },
  { name: "HTML/CSS", color: "from-red-500/20 to-orange-600/10" },
  { name: "JavaScript", color: "from-yellow-500/20 to-yellow-600/10" },
  { name: "React", color: "from-cyan-500/20 to-blue-600/10" },
  { name: "Node.js", color: "from-green-500/20 to-green-600/10" },
  { name: "Git", color: "from-red-500/20 to-red-600/10" },
  { name: "VS Code", color: "from-blue-500/20 to-blue-600/10" },
  { name: "Jupyter", color: "from-orange-500/20 to-gray-600/10" },
  { name: "MongoDB", color: "from-green-500/20 to-green-600/10" },
];

const lifestyleCards = [
  {
    icon: <Brain className="w-5 h-5 text-primary" />,
    title: "AI & Knowledge Explorer",
    desc: "Deeply passionate about exploring artificial intelligence, simplifying complex concepts, and staying updated with cutting-edge innovations in data science and technology.",
    image: codingLifestyle,
  },
  {
    icon: <Dumbbell className="w-5 h-5 text-primary" />,
    title: "High-Performance Lifestyle",
    desc: "Maintaining discipline through fitness and sports—boosting focus, energy, and a growth mindset that reflects in both personal and professional life.",
    image: sportsLifestyle,
  },
  {
    icon: <Camera className="w-5 h-5 text-primary" />,
    title: "Visual Storyteller",
    desc: "Capturing creativity through photography—turning ordinary moments into compelling visual stories with a unique perspective.",
    image: photographyLifestyle,
  },
  {
    icon: <Gamepad2 className="w-5 h-5 text-primary" />,
    title: "Strategic Gaming Mindset",
    desc: "Engaging in gaming that enhances decision-making, problem-solving, and strategic thinking—while also exploring the fundamentals of game development.",
    image: gamingLifestyle,
  },
];

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-pulse text-primary">▊</span>
      )}
    </span>
  );
};

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutTab = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div>
      <PageHeader title="Sachin Kodikurubar 👨‍💻" />

      {/* Hero Banner with AI Brain */}
      <motion.div
        ref={heroRef}
        variants={scaleIn}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        transition={{ ease, duration: 0.8 }}
        className="relative rounded-2xl overflow-hidden mb-10 group"
      >
        <img
          src={aiHeroBg}
          alt="AI Neural Network"
          className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ease }}
            className="font-mono-terminal text-xs text-primary/80 mb-2"
          >
            {">"} Initializing profile...
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ease }}
            className="text-2xl md:text-3xl font-bold text-foreground glow-text"
          >
            AI & Data Science Engineer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-muted-foreground mt-1"
          >
            Building Intelligent Systems 🚀
          </motion.p>
        </div>
      </motion.div>

      {/* Terminal-style bio */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6 }}
        className="glass-card neon-border p-6 mb-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-muted-foreground font-mono-terminal">sachin@portfolio:~</span>
        </div>

        <div className="font-mono-terminal text-sm space-y-3 text-muted-foreground">
          <p>
            <span className="text-primary">$</span> whoami
          </p>
          <p className="text-foreground">
            <TypewriterText text="👋 Hi, I'm SACHIN KODIKURUBAR — AI & Data Science Engineer" delay={0.3} />
          </p>
          <p className="text-foreground/80 leading-relaxed">
            → Passionate about Artificial Intelligence 🤖, Machine Learning 📊, and Smart Automation ⚡
          </p>
          <div className="border-t border-border/50 my-4" />
          <p><span className="text-primary">$</span> cat about.txt</p>
          <div className="space-y-2 text-foreground/70 leading-relaxed">
            <p>🧠 I love solving real-life problems — whether through AI or simple creative thinking.</p>
            <p>🎧 I enjoy listening to music while coding — it keeps me focused and in flow.</p>
            <p>🏀 I like playing sports to stay active and refresh my mind.</p>
            <p>🎮 Gaming helps me think strategically and improves decision-making skills.</p>
            <p>📸 I enjoy capturing moments and exploring creativity through photography.</p>
            <p>☕ Late-night coding sessions + coffee = my productivity zone.</p>
          </div>
        </div>
      </motion.div>

      {/* Currently Exploring */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.1 }}
        className="mb-10"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-4">
          <span className="text-primary">💡</span> Currently exploring:
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: <Cpu className="w-5 h-5" />, label: "Machine Learning Models" },
            { icon: <Brain className="w-5 h-5" />, label: "Generative AI" },
            { icon: <Globe className="w-5 h-5" />, label: "Real-time AI Apps" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, ease }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card neon-border p-4 text-center group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 text-primary group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
      >
        {[
          { label: "Projects Built", value: 10, suffix: "+", icon: <Code2 className="w-4 h-4" /> },
          { label: "Tech Skills", value: 15, suffix: "+", icon: <Zap className="w-4 h-4" /> },
          { label: "Certifications", value: 4, suffix: "", icon: <Award className="w-4 h-4" /> },
          { label: "Hackathons", value: 1, suffix: "+", icon: <Trophy className="w-4 h-4" /> },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={reveal}
            whileHover={{ scale: 1.05, y: -4 }}
            className="glass-card neon-border p-4 text-center group cursor-default"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2 text-primary group-hover:bg-primary/20 transition-colors">
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-foreground glow-text">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* What makes me different */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.15 }}
        className="mb-10"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-4">
          <span className="text-primary">🌟</span> What makes me different?
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            { icon: <Lightbulb className="w-3.5 h-3.5" />, text: "Problem Solver Mindset" },
            { icon: <Zap className="w-3.5 h-3.5" />, text: "Fast Learner & Self-Driven" },
            { icon: <Code2 className="w-3.5 h-3.5" />, text: "Builder of Real-World Projects" },
            { icon: <Target className="w-3.5 h-3.5" />, text: "Adaptable & Team Player" },
          ].map((trait, i) => (
            <motion.span
              key={trait.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1, ease }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 text-xs font-medium text-primary cursor-default"
            >
              {trait.icon} {trait.text}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Mission */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.7, delay: 0.2 }}
        className="glass-card neon-border p-6 mb-10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="font-display text-lg font-bold text-foreground">Mission</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed relative z-10">
          To build AI systems that make life smarter, easier, and more efficient.
        </p>
        <div className="mt-4 flex items-center gap-2 font-mono-terminal text-xs text-primary/70">
          <Flame className="w-3.5 h-3.5" />
          <span>Code 💻 → Learn 📚 → Build 🛠️ → Improve 📈 → Repeat 🔁</span>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.15 }}
        className="mb-10"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> ls -al Tech Stack ⚙️
        </h3>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-wrap gap-2">
          {stacks.map((s, i) => (
            <motion.span
              key={s.name}
              variants={reveal}
              whileHover={{ scale: 1.1, y: -3, boxShadow: "0 0 20px hsl(42 90% 52% / 0.2)" }}
              className={`px-4 py-2 rounded-xl bg-gradient-to-r ${s.color} border border-border text-xs text-foreground font-medium hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default`}
            >
              {s.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Skill Bars */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.2 }}
        className="mb-10"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> cat skills.json
        </h3>
        <div className="glass-card neon-border p-6 space-y-5">
          <SkillBar name="Python" percent={90} delay={0.1} icon="🐍" />
          <SkillBar name="Machine Learning" percent={80} delay={0.2} icon="🤖" />
          <SkillBar name="Power BI / Data Viz" percent={85} delay={0.3} icon="📊" />
          <SkillBar name="SQL / DBMS" percent={75} delay={0.4} icon="🗃️" />
          <SkillBar name="Web Development" percent={70} delay={0.5} icon="🌐" />
          <SkillBar name="TensorFlow / OpenCV" percent={72} delay={0.6} icon="⚡" />
        </div>
      </motion.div>

      {/* Coding Stats Visual */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.2 }}
        className="mb-10"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> neofetch
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Location Globe */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card neon-border p-5 flex flex-col items-center justify-center"
          >
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
          </motion.div>

          {/* Interests */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card neon-border p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Interests & Focus</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "Artificial Intelligence", percent: 95 },
                { label: "Data Science", percent: 90 },
                { label: "Data Visualization", percent: 85 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                    <span className="text-xs text-primary font-mono-terminal">{item.percent}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.25 }}
        className="mb-10"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> ls -al Achievements 🏆
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: <Trophy className="w-5 h-5 text-primary" />, text: "Participated in Smart India Hackathon (SIH)", highlight: true },
            { icon: <BarChart3 className="w-5 h-5 text-primary" />, text: "Built multiple interactive dashboards using Power BI" },
            { icon: <Award className="w-5 h-5 text-primary" />, text: "Completed multiple self-driven AI & Data Science projects" },
            { icon: <Lightbulb className="w-5 h-5 text-primary" />, text: "Strong problem-solving through real-world implementations" },
          ].map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, ease }}
              whileHover={{ scale: 1.03, y: -3 }}
              className={`glass-card p-4 flex items-start gap-3 neon-border hover:border-primary/40 transition-all duration-300 ${a.highlight ? 'ring-1 ring-primary/20' : ''}`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                {a.icon}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Life Style with images */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.3 }}
        className="mb-6"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> ls -al Life Style
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {lifestyleCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, ease, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card neon-border overflow-hidden group cursor-default hover:border-primary/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
              </div>
              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {card.icon}
                  <h4 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.35 }}
        className="mb-6"
      >
        <h3 className="font-mono-terminal text-sm text-muted-foreground mb-4">
          <span className="text-primary">🤝</span> Soft Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Problem Solving", icon: "🧩" },
            { label: "Communication", icon: "💬" },
            { label: "Teamwork", icon: "🤝" },
            { label: "Adaptability", icon: "🔄" },
          ].map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.5 + i * 0.1, ease }}
              whileHover={{ scale: 1.1, rotateZ: 2 }}
              className="glass-card neon-border px-4 py-3 flex items-center gap-2 cursor-default"
            >
              <span className="text-lg">{skill.icon}</span>
              <span className="text-sm text-foreground font-medium">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, ease }}
        className="text-center py-6"
      >
        <p className="font-mono-terminal text-primary text-sm glow-text">
          📌 Let's Build Something Amazing Together!
        </p>
      </motion.div>
    </div>
  );
};

const SkillBar = ({ name, percent, delay, icon }: { name: string; percent: number; delay: number; icon: string }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm text-foreground font-medium flex items-center gap-2">
        <span>{icon}</span> {name}
      </span>
      <span className="text-xs text-primary font-mono-terminal">{percent}%</span>
    </div>
    <div className="skill-bar h-2.5">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1.4, delay, ease }}
      />
    </div>
  </div>
);

export default AboutTab;
