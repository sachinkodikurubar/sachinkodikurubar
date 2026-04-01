import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

type Message = { role: "user" | "bot"; text: string };

const knowledgeBase: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["hello", "hi", "hey", "greet"],
    answer: "Hey there! 👋 I'm Sachin's AI assistant. Ask me about his skills, projects, education, or experience!",
  },
  {
    keywords: ["skill", "tech", "stack", "language", "programming"],
    answer: "🛠️ Sachin's Tech Stack:\n• Python, C, Java (Basics)\n• Machine Learning & AI (KNN, Data Preprocessing)\n• Power BI, Data Visualization\n• HTML, CSS, JavaScript\n• Tools: Git, GitHub, VS Code, Jupyter Notebook",
  },
  {
    keywords: ["project", "portfolio", "work", "built", "build"],
    answer: "🚀 Key Projects:\n• Smart Career Advisor – AI-based career path suggestions\n• Market Price Prediction of Crops – ML model for crop price forecasting\n• Personal Portfolio Website – Responsive modern portfolio\n• Power BI Dashboards – Interactive data visualizations\n• KNN Classification Model – ML classification pipeline",
  },
  {
    keywords: ["education", "college", "university", "degree", "study"],
    answer: "🎓 Education:\n• B.E in AI & Data Science – Angadi Institute of Technology (2023-2027)\n• PUC – SMPU College, Dharwad (2023)\n• 10th Grade (CBSE) – Sri Sai Gurukula, Honnali (2021)",
  },
  {
    keywords: ["experience", "job", "intern", "fresher"],
    answer: "💼 Sachin is a fresher actively building real-world AI & Data Science projects. He has hands-on experience with ML models, Power BI dashboards, and data-driven solutions.",
  },
  {
    keywords: ["certificate", "certification", "course"],
    answer: "📜 Certifications:\n• Python with Machine Learning – Belpy\n• Generative AI\n• Introduction to Artificial Intelligence\n• HTML & CSS Certification",
  },
  {
    keywords: ["achievement", "hackathon", "award"],
    answer: "🏆 Achievements:\n• Participated in Smart India Hackathon (SIH)\n• Built multiple Power BI dashboards\n• Completed multiple self-driven AI projects",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire"],
    answer: "📬 Contact Sachin:\n• 📧 sachinsiddappakodikurubar@gmail.com\n• 📞 1234567890\n• 📍 Hanagal, Karnataka, India\n• LinkedIn & GitHub links are on the sidebar!",
  },
  {
    keywords: ["interest", "hobby", "passion", "like"],
    answer: "🎯 Interests & Hobbies:\n• AI & Machine Learning exploration\n• Photography & visual storytelling\n• Sports & fitness\n• Strategic gaming\n• Late-night coding with coffee ☕",
  },
  {
    keywords: ["who", "about", "yourself", "sachin"],
    answer: "👨‍💻 Sachin Kodikurubar is an AI & Data Science student at AITM (VTU). He's passionate about building intelligent systems, solving real-world problems with ML, and creating impactful data-driven solutions.",
  },
];

const getAnswer = (input: string): string => {
  const lower = input.toLowerCase();
  for (const entry of knowledgeBase) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.answer;
    }
  }
  return "🤔 I'm not sure about that. Try asking about Sachin's skills, projects, education, certifications, or contact info!";
};

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hey! 👋 I'm Sachin's AI assistant. Ask me anything about his skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getAnswer(userMsg.text) }]);
    }, 600);
  };

  return (
    <>
      {/* Floating bubble */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_30px_hsl(42_90%_52%/0.4)] hover:shadow-[0_0_40px_hsl(42_90%_52%/0.6)] transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 90 : 0 }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[480px] rounded-2xl overflow-hidden glass-card neon-border flex flex-col"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-border bg-secondary/50 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Sachin's AI Assistant</p>
                <p className="text-[10px] text-primary font-mono-terminal">● Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[280px] max-h-[340px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${
                    msg.role === "bot" ? "bg-primary/20" : "bg-secondary"
                  }`}>
                    {msg.role === "bot" ? (
                      <Bot className="w-3 h-3 text-primary" />
                    ) : (
                      <User className="w-3 h-3 text-muted-foreground" />
                    )}
                  </div>
                  <div className={`max-w-[75%] px-3 py-2 rounded-xl text-xs leading-relaxed whitespace-pre-line ${
                    msg.role === "bot"
                      ? "bg-secondary text-foreground rounded-tl-sm"
                      : "bg-primary text-primary-foreground rounded-tr-sm"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-secondary/30">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <button
                  onClick={send}
                  className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
