import PageHeader from "@/components/PageHeader";
import { Download, Briefcase, GraduationCap, Heart, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const reveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const experiences = [
  {
    company: "TechInnovate Labs",
    role: "AI Engineer",
    location: "Bangalore, India",
    period: "Jan. 2025 - Present",
    bullets: [
      "Developed a medical conversational agent based on LLMs and RAG (Retrieval-Augmented Generation).",
      "Designed and optimized supervised classification models for anomaly detection.",
      "Implemented comprehensive data pipelines using Python and microservices architecture.",
      "Created an ETL pipeline integrating OCR, data cleaning, normalization, and structuring.",
    ],
  },
  {
    company: "DataSphere AI",
    role: "ML Engineer — specializing in NLP & Computer Vision",
    location: "Remote",
    period: "Jun. 2024 - Dec. 2024",
    bullets: [
      "Developed deep learning models for real-time sentiment analysis with 94% accuracy.",
      "Created an AI recommendation system leveraging collaborative filtering.",
      "Implemented computer vision models for object detection in IoT systems.",
      "Collaborated with backend teams to optimize API performance and model serving.",
    ],
  },
  {
    company: "Analytics Pro",
    role: "Data Science Intern",
    location: "Bangalore, India",
    period: "Jan. 2024 - May 2024",
    bullets: [
      "Built predictive maintenance models using time series analysis on IoT sensor data.",
      "Developed interactive dashboards with D3.js and React for data exploration.",
      "Implemented automated data quality checks reducing manual review time by 60%.",
    ],
  },
];

const education = [
  {
    school: "Indian Institute of Technology",
    degree: "Master's in Artificial Intelligence & Data Science",
    period: "Aug. 2022 - May 2024",
    location: "India",
    details: [
      "Courses: Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, Advanced Statistics.",
      "Thesis: Design and Development of a Real-Time Object Detection System Using Deep Learning.",
    ],
  },
  {
    school: "National Institute of Technology",
    degree: "Bachelor's in Computer Science",
    period: "Aug. 2018 - Jun. 2022",
    location: "India",
    details: [
      "Courses: Algorithms, Data Structures, Databases, Machine Learning, Software Engineering.",
      "Thesis: Sentiment Analysis of Social Media Data Using Transformer Models.",
    ],
  },
];

const volunteer = [
  {
    org: "AI for Good Community",
    role: "Technical Lead",
    location: "India",
    period: "Mar. 2023 - Present",
    bullets: [
      "Leading AI literacy workshops and hackathons for underserved communities.",
      "Coordinating open-source projects focused on healthcare and education AI applications.",
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
        className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-10"
      >
        <Download className="w-4 h-4" />
        Download Sachin's full Curriculum Vitae/Resume (March 2026)
      </motion.a>

      {/* Professional Experience */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.1 }}
      >
        <SectionTitle icon={<Briefcase className="w-4 h-4 text-muted-foreground" />} title="Professional Experience" />
        <div className="space-y-8 mt-6">
          {experiences.map((exp) => (
            <TimelineEntry key={exp.company} {...exp} roleColor="text-primary" />
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.2 }}
        className="mt-14"
      >
        <SectionTitle icon={<GraduationCap className="w-4 h-4 text-muted-foreground" />} title="Education" />
        <div className="space-y-8 mt-6">
          {education.map((edu) => (
            <TimelineEntry
              key={edu.school}
              company={edu.school}
              role={edu.degree}
              location={edu.location}
              period={edu.period}
              bullets={edu.details}
              roleColor="text-primary"
            />
          ))}
        </div>
      </motion.div>

      {/* Volunteer */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ ease, duration: 0.6, delay: 0.3 }}
        className="mt-14 mb-4"
      >
        <SectionTitle icon={<Heart className="w-4 h-4 text-muted-foreground" />} title="Volunteer" />
        <div className="space-y-8 mt-6">
          {volunteer.map((v) => (
            <TimelineEntry
              key={v.org}
              company={v.org}
              role={v.role}
              location={v.location}
              period={v.period}
              bullets={v.bullets}
              roleColor="text-primary"
            />
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
  roleColor,
}: {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  roleColor: string;
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
        <p className={`text-sm ${roleColor}`}>{role}</p>
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
