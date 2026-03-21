import PageHeader from "@/components/PageHeader";
import { Download, GraduationCap, Heart, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const reveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
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
  "Python with Machine Learning – Belpy Certification",
  "Generative AI",
  "Introduction to Artificial Intelligence",
  "HTML & CSS Certification",
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

const ResumeTab = () => {
  return (
    <div>
      <PageHeader title="Sachin's Resume" />

      {/* Download link */}
      <motion.a
        href="#"
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6 }}
        className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-10 neon-border px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors duration-200"
      >
        <Download className="w-4 h-4" />
        Download Full Resume (2026)
      </motion.a>

      {/* Education */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.1 }}
      >
        <SectionTitle icon={<GraduationCap className="w-4 h-4 text-primary" />} title="Education" />
        <div className="space-y-8 mt-6">
          {education.map((edu) => (
            <TimelineEntry
              key={edu.school}
              company={edu.school}
              role={edu.degree}
              location={edu.location}
              period={edu.period}
              bullets={edu.details}
            />
          ))}
        </div>
      </motion.div>

      {/* Professional Experience */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.2 }}
        className="mt-14"
      >
        <SectionTitle icon={<BookOpen className="w-4 h-4 text-primary" />} title="Professional Experience" />
        <div className="space-y-8 mt-6">
          {experience.map((exp) => (
            <TimelineEntry key={exp.company} {...exp} />
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.3 }}
        className="mt-14 mb-4"
      >
        <SectionTitle icon={<Award className="w-4 h-4 text-primary" />} title="Certifications" />
        <div className="grid sm:grid-cols-2 gap-3 mt-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card neon-border p-4 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-foreground">{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
  </div>
);

const TimelineEntry = ({
  company,
  role,
  location,
  period,
  bullets,
}: {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center pt-1.5">
      <div className="timeline-dot" />
      <div className="timeline-line flex-1 mt-1" />
    </div>
    <div className="flex-1 pb-2">
      <div className="flex items-start justify-between flex-wrap gap-2">
        <h3 className="font-display text-sm font-semibold text-foreground">{company}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3 text-primary" />
          {location}
        </div>
      </div>
      <div className="flex items-start justify-between flex-wrap gap-2 mt-0.5">
        <p className="text-sm text-primary">{role}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {period}
        </div>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ResumeTab;
