import PageHeader from "@/components/PageHeader";
import { Download, GraduationCap, MapPin, Calendar, Award, BookOpen, Briefcase, FileText, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { ease } from "@/lib/motion";
import { useRef } from "react";
import dataVizBg from "@/assets/data-viz-bg.jpg";

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const education = [
  {
    school: "Angadi Institute of Technology and Management, VTU University",
    degree: "B.E in Artificial Intelligence & Data Science",
    period: "2023 – 2027",
    location: "Karnataka, India",
    details: [
      "Studying core AI/ML concepts including Deep Learning, NLP, Computer Vision, and Data Analytics.",
      "Building real-world projects with Python, TensorFlow, and Power BI.",
      "Active participant in hackathons and coding competitions.",
    ],
  },
  {
    school: "SMPU College, Dharwad",
    degree: "PUC (Pre-University Course)",
    period: "2023",
    location: "Dharwad, India",
    details: ["Completed pre-university education with a strong foundation in science and mathematics."],
  },
  {
    school: "Sri Sai Gurukula Residential School, Honnali",
    degree: "10th Grade (CBSE)",
    period: "2021",
    location: "Honnali, India",
    details: ["Completed CBSE curriculum with distinction."],
  },
];

const certifications = [
  { name: "Python with Machine Learning", org: "Belpy Certification", icon: "🐍" },
  { name: "Generative AI", org: "Industry Certification", icon: "🤖" },
  { name: "Introduction to Artificial Intelligence", org: "Online Course", icon: "🧠" },
  { name: "HTML & CSS Certification", org: "Web Development", icon: "🌐" },
];

const experience = [
  {
    company: "Fresher — Building Real-World Skills",
    role: "AI & Data Science Student",
    location: "Karnataka, India",
    period: "2023 – Present",
    bullets: [
      "Actively working on real-world and academic projects to strengthen practical knowledge in AI and Data Science.",
      "Hands-on experience in developing machine learning models and data-driven solutions.",
      "Built interactive dashboards and visual reports using Power BI for data analysis.",
      "Continuously learning and applying new technologies to solve real-world problems.",
      "Strong ability to adapt quickly and work collaboratively in team environments.",
    ],
  },
];

const skills = {
  "Programming Languages": ["Python", "C", "Java (Basics)"],
  "Data Analytics & Visualization": ["Power BI", "Data Cleaning", "Dashboard Creation"],
  "Database Management": ["DBMS", "SQL Basics"],
  "Machine Learning": ["KNN Algorithm", "Model Training", "Data Preprocessing"],
  "Web Development": ["HTML", "CSS", "Basic JavaScript"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
};

const ResumeTab = () => {
  return (
    <div>
      <PageHeader title="Sachin's Resume" />

      {/* Resume Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease, duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden mb-10 group"
      >
        <img
          src={dataVizBg}
          alt="Data Visualization"
          className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 flex items-center justify-between px-6 md:px-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground glow-text">Career Profile</h2>
            <p className="text-sm text-muted-foreground mt-1">AI & Data Science Journey</p>
          </div>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-sm text-primary-foreground bg-primary px-4 py-2.5 rounded-xl font-medium shadow-[0_0_20px_hsl(42_90%_52%/0.3)] hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>
        </div>
      </motion.div>

      {/* Career Objective */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6 }}
        className="glass-card neon-border p-6 mb-10"
      >
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-primary" />
          <h3 className="font-display text-lg font-bold text-foreground">Career Objective</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Motivated Artificial Intelligence and Data Science student with a strong interest in building data-driven solutions 
          and solving real-world problems. Seeking an opportunity to apply my skills in machine learning, data analysis, 
          and business intelligence.
        </p>
      </motion.div>

      {/* Education */}
      <AnimatedSection delay={0.1}>
        <SectionTitle icon={<GraduationCap className="w-5 h-5 text-primary" />} title="Education" />
        <div className="space-y-0 mt-6">
          {education.map((edu, i) => (
            <TimelineEntry
              key={edu.school}
              company={edu.school}
              role={edu.degree}
              location={edu.location}
              period={edu.period}
              bullets={edu.details}
              index={i}
              isLast={i === education.length - 1}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Skills Grid */}
      <AnimatedSection delay={0.15}>
        <SectionTitle icon={<FileText className="w-5 h-5 text-primary" />} title="Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, ease }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="glass-card neon-border p-4 hover:border-primary/40 transition-all duration-300"
            >
              <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{category}</h4>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="px-2 py-1 rounded-md bg-secondary text-[11px] text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Professional Experience */}
      <AnimatedSection delay={0.2}>
        <SectionTitle icon={<Briefcase className="w-5 h-5 text-primary" />} title="Professional Experience" />
        <div className="space-y-0 mt-6">
          {experience.map((exp, i) => (
            <TimelineEntry key={exp.company} {...exp} index={0} isLast />
          ))}
        </div>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection delay={0.25}>
        <SectionTitle icon={<Award className="w-5 h-5 text-primary" />} title="Certifications" />
        <div className="grid sm:grid-cols-2 gap-3 mt-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, ease }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="glass-card neon-border p-4 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-2xl group-hover:bg-primary/20 transition-colors">
                {cert.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

const AnimatedSection = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ease, duration: 0.7, delay }}
      className="mt-12"
    >
      {children}
    </motion.div>
  );
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
      {icon}
    </div>
    <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
  </div>
);

const TimelineEntry = ({
  company,
  role,
  location,
  period,
  bullets,
  index,
  isLast,
}: {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  index: number;
  isLast: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 + index * 0.15, ease }}
    className="flex gap-4"
  >
    <div className="flex flex-col items-center pt-1.5">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 + index * 0.15, ease, type: "spring" }}
        className="timeline-dot"
      />
      {!isLast && <div className="timeline-line flex-1 mt-1" />}
    </div>
    <div className="flex-1 pb-8">
      <div className="glass-card neon-border p-4 hover:border-primary/30 transition-colors duration-300">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <h3 className="font-display text-sm font-semibold text-foreground">{company}</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3 text-primary" />
            {location}
          </div>
        </div>
        <div className="flex items-start justify-between flex-wrap gap-2 mt-1">
          <p className="text-sm text-primary font-medium">{role}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {period}
          </div>
        </div>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary mt-1 text-xs">▹</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default ResumeTab;
