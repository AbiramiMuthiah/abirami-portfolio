import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "metrics",
        "featured",
        "projects",
        "tech",
        "experience",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveNav(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "metrics", label: "Metrics" },
    { id: "featured", label: "Featured" },
    { id: "projects", label: "Projects" },
    { id: "tech", label: "Tech Stack" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
        <div className="bg-background/60 backdrop-blur-lg border border-border rounded-full px-8 py-3">
          <div className="flex items-center gap-8 justify-center">
            <div className="text-xl font-grotesk font-bold gradient-text md:hidden">AM</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="text-sm font-grotesk font-bold gradient-text">AM</div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-medium transition-colors duration-300 ${activeNav === item.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-4 right-4 md:hidden border border-border bg-background/95 backdrop-blur-md rounded-xl">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/10 transition-colors text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-grotesk font-bold leading-tight">
                  <span className="gradient-text">Abirami</span>
                  <br />
                  Muthiah
                </h1>
                <h2 className="text-xl md:text-2xl text-foreground/80 font-grotesk">
                  Applied AI Engineer & Data Science Developer
                </h2>
              </div>

              <p className="text-base text-foreground/70 leading-relaxed max-w-lg">
                Final-year Data Science student building production-ready AI systems. Specializing in NLP, Computer Vision, RAG pipelines, and cloud deployment on AWS.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={() => scrollToSection("featured")}
                  className="btn-primary flex items-center gap-2"
                >
                  View Projects <ArrowRight size={16} />
                </button>
                <a
                  href="/Data_Science_Resume.pdf"
                  className="btn-secondary"
                >
                  Download Resume
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn-secondary"
                >
                  Contact Me
                </button>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-foreground/60 mb-4">Technical Focus</p>
                <div className="flex flex-wrap gap-2">
                  {["Applied AI", "NLP", "Computer Vision", "Cloud Deployment"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-border text-sm text-foreground/80"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Visual - Floating AI System */}
            <div className="relative h-96 md:h-[500px] hidden md:flex items-center justify-center overflow-hidden">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.18),transparent_70%)]" />

              {/* Network Lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="20%" y1="20%" x2="70%" y2="40%" stroke="#00d4ff" strokeWidth="1" />
                <line x1="40%" y1="70%" x2="75%" y2="85%" stroke="#00d4ff" strokeWidth="1" />
                <line x1="30%" y1="50%" x2="60%" y2="80%" stroke="#00d4ff" strokeWidth="1" />
              </svg>

              {/* Floating Dots */}
              <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <div className="absolute top-40 right-24 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" />
              <div className="absolute bottom-32 left-32 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <div className="absolute bottom-20 right-40 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" />

              {/* NLP Systems */}
              <div className="absolute top-20 right-24 animate-float">
                <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl px-6 py-4 shadow-lg">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-white/90 font-medium tracking-wide">
                    NLP Systems
                  </span>
                </div>
              </div>

              {/* Computer Vision */}
              <div className="absolute top-1/2 right-0 animate-float-delayed">
                <div className="flex items-center gap-3 rounded-2xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-xl px-6 py-4 shadow-lg">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-white/90 font-medium tracking-wide">
                    Computer Vision
                  </span>
                </div>
              </div>

              {/* RAG Pipelines */}
              <div className="absolute bottom-28 left-6 animate-float-slow">
                <div className="flex items-center gap-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-xl px-6 py-4 shadow-lg">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-white/90 font-medium tracking-wide">
                    RAG Pipelines
                  </span>
                </div>
              </div>

              {/* AI Deployment */}
              <div className="absolute bottom-8 right-16 animate-float">
                <div className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl px-6 py-4 shadow-lg">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-white/90 font-medium tracking-wide">
                    AI Deployment
                  </span>
                </div>
              </div>

            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-40 h-40 rounded-lg border border-neon-blue/20 bg-neon-blue/5 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </div>

      </section >

      {/* AI Performance Metrics */}
      < section id="metrics" className="relative py-20 px-4 border-t border-border" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-grotesk font-bold mb-4">
              AI Performance Metrics
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-4 rounded-full"></div>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">
              Production-ready AI systems with measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Wafer Detection Accuracy",
                value: "95%",
                detail: "YOLO-based semiconductor inspection",
              },
              {
                label: "Pipeline Performance",
                value: "3x",
                detail: "Faster inference optimization",
              },
              {
                label: "NLP F1-Score Improvement",
                value: "15%",
                detail: "Multilingual sentiment analysis",
              },
              {
                label: "Cloud Deployment",
                value: "100%",
                detail: "AWS EC2 production scaling",
              },
            ].map((metric, i) => (
              <div key={i} className="dashboard-card group cursor-pointer">
                <div className="space-y-4">
                  <div className="text-4xl font-grotesk font-bold gradient-text">
                    {metric.value}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground/80">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-foreground/60">{metric.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Featured Project */}
      < section id="featured" className="relative py-20 px-4 border-t border-border" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-grotesk font-bold mb-4">
              Featured Project
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Project Visual - Wafer Detection Dashboard */}
            <div className="relative h-96 md:h-[500px] rounded-2xl border border-primary/30 overflow-hidden glow-border">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-background/50 to-neon-blue/20"></div>

              {/* Circular Wafer Visualization */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* Top Right Status Badge */}
                <div className="absolute top-6 right-6 text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs font-semibold text-primary">Live Detection</span>
                  </div>
                  <div className="text-3xl font-grotesk font-bold gradient-text">95.2%</div>
                  <div className="text-xs text-foreground/60">Accuracy</div>
                </div>

                {/* Circle with dot */}
                <div className="flex flex-col items-center gap-8">
                  <div className="relative w-40 h-40">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="hsl(188 100% 50% / 0.3)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="70"
                        fill="none"
                        stroke="hsl(188 100% 50% / 0.2)"
                        strokeWidth="1"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/80 blur-sm"></div>
                    </div>
                  </div>

                  {/* Bottom Metrics */}
                  <div className="flex gap-6 text-center">
                    <div>
                      <div className="text-xl font-grotesk font-bold text-foreground">127</div>
                      <div className="text-xs text-foreground/60">Defects</div>
                    </div>
                    <div>
                      <div className="text-xl font-grotesk font-bold text-primary">3.2s</div>
                      <div className="text-xs text-foreground/60">Process Time</div>
                    </div>
                    <div>
                      <div className="text-xl font-grotesk font-bold text-primary">98.1%</div>
                      <div className="text-xs text-foreground/60">Precision</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8 animate-slide-in">
              <div className="space-y-4">
                <h3 className="text-3xl font-grotesk font-bold text-foreground">
                  Wafer Defect Detection System
                </h3>
                <p className="text-foreground/70">
                  A cutting-edge semiconductor AI inspection platform powered by YOLO-based computer vision. This industrial-grade system detects microscopic defects in silicon wafers with 95% accuracy, enabling real-time quality control in manufacturing pipelines.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground/80">Key Features:</p>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    YOLO-powered semiconductor defect localization
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Real-time visual inspection pipeline
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Optimized single-pass inference system
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Industrial AI inspection workflow
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground/80">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {["YOLOv8", "FastAPI", "Next.js","PyTorch"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-border text-xs text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">

                <a
                  href="https://github.com/AbiramiMuthiah/wafer-defect-detection-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub Repo
                </a>

                <a
                  href="https://github.com/AbiramiMuthiah/wafer-defect-detection-ai#screenshots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View Screenshots
                </a>

              </div>
            </div>
          </div>
        </div>
      </section >

      {/* AI Project Showcase */}
      < section id="projects" className="relative py-20 px-4 border-t border-border" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-grotesk font-bold mb-4">
              AI Project Showcase
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Sentilytics",
                description:
                  "Multilingual sentiment analysis dashboard using BERT and Streamlit. Real-time YouTube and social media analytics with NLP-powered insights and visualization.",
                tech: ["BERT", "Streamlit", "VADER", "NLP", "Python"],
                topGradient: "from-neon-cyan/40 to-neon-blue/20",
                github: "https://github.com/AbiramiMuthiah/sentilytics",
                screenshots: "https://github.com/AbiramiMuthiah/sentilytics/tree/main/assets",
                image: "/assets/sentilytics-dashboard.png",
              },
              {
                title: "AI Humaniser",
                description:
                  "LLM-powered text rewriting platform with SaaS architecture. Features subscription management, API monitoring, and advanced NLP optimization pipelines.",
                tech: ["Spacy", "Transformers", "NLTK", "FastAPI"],
                topGradient: "from-purple-600/40 to-purple-900/20",
                github: "https://github.com/AbiramiMuthiah/ai-humaniser",
                screenshots: "https://github.com/AbiramiMuthiah/ai-humaniser/tree/main/assets",
                image: "/assets/ai-humaniser-dashboard.png",
              },
              {
                title: "AI E-Invoice System",
                description:
                  "Flask + SQL AI invoice automation platform with operational analytics dashboard. Cloud-deployed backend workflow automation system.",
                tech: ["Flask", "SQL", "MongoDB", "Redis", "AWS EC2"],
                topGradient: "from-cyan-600/40 to-cyan-900/20",
                github: "https://github.com/AbiramiMuthiah/ai-einvoice-system",
                screenshots: "https://github.com/AbiramiMuthiah/ai-einvoice-system/tree/main/assets",
                image: "/assets/einvoice-dashboard.png",
              },
            ].map((project, i) => (
              <div key={i} className="dashboard-card overflow-hidden space-y-0">
                {/* Project Image */}
                <div className="relative h-44 overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-grotesk font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md bg-white/5 border border-border text-xs text-foreground/70 hover:border-primary/50 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-border">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary text-sm py-2 flex items-center justify-center gap-2"
                    >
                      <Github size={14} /> GitHub
                    </a>

                    <a
                      href={project.screenshots}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary text-sm py-2 flex items-center justify-center gap-2"
                    >
                      Screenshots →
                    </a>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Tech Stack */}
      < section id="tech" className="relative py-20 px-4 border-t border-border" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-grotesk font-bold mb-4">
              Tech Stack
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "AI & Machine Learning",
                icon: "🧠",
                bgGradient: "from-cyan-500/20 to-cyan-600/10",
                techs: ["Python", "YOLO", "BERT", "PyTorch", "TensorFlow", "HuggingFace"],
              },
              {
                category: "Backend & APIs",
                icon: "⚙️",
                bgGradient: "from-blue-500/20 to-blue-600/10",
                techs: ["Flask", "MongoDB", "Redis", "SQL"],
              },
              {
                category: "Analytics & Visualization",
                icon: "📊",
                bgGradient: "from-purple-500/20 to-purple-600/10",
                techs: ["Streamlit", "Power BI"],
              },
              {
                category: "Deployment & Cloud",
                icon: "☁️",
                bgGradient: "from-cyan-500/20 to-cyan-600/10",
                techs: ["AWS EC2", "Docker", "GitHub", "Vercel"],
              },
            ].map((category, i) => (
              <div key={i} className={`dashboard-card space-y-4 bg-gradient-to-br ${category.bgGradient}`}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-xl">
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-foreground font-grotesk">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.techs.map((tech) => (
                    <div
                      key={tech}
                      className="text-xs text-foreground/80"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Experience */}
      < section id="experience" className="relative py-20 px-4 border-t border-border" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-grotesk font-bold mb-4">
              Experience
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full"></div>
          </div>

          <div className="dashboard-card space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                📦
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-grotesk font-bold text-foreground">
                  Data Science & AI Intern
                </h3>
                <p className="text-sm text-foreground font-medium">Cloud Basha Sdn Bhd</p>
                <p className="text-xs text-primary"> July 2025 - October 2025</p>
              </div>
            </div>

            <p className="text-sm text-foreground/70 leading-relaxed">
              Developed production-ready AI systems including RAG pipelines, backend APIs, and cloud-deployed solutions at Cloud Basha Sdn Bhd.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "⚡", text: "RAG pipeline engineering" },
                { icon: "🔌", text: "Flask backend API systems" },
                { icon: "☁️", text: "MongoDB Atlas + Redis integration" },
                { icon: "🚀", text: "AWS EC2 deployment" },
                { icon: "📄", text: "AI document retrieval systems" },
                { icon: "🎤", text: "Technical presentations" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-primary/30 bg-primary/5 hover:border-primary/60 transition-colors">
                  <span className="text-primary flex-shrink-0 text-lg">{"◆"}</span>
                  <span className="text-xs text-foreground/90">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-foreground/60 mb-3">
                Technologies & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {["Flask", "RAG", "MongoDB Atlas", "Redis", "AWS EC2", "Python", "SQL", "REST APIs"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-primary/50 text-primary hover:border-primary/80 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Certifications */}
      < section id="certifications" className="relative py-20 px-4 border-t border-border" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-grotesk font-bold mb-4">
              Certifications
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "AWS Certified", subtitle: "Amazon Web Services", icon: "☁️", underlineColor: "bg-orange-500/60", bottomBorder: "border-b-2 border-orange-500" },
              { name: "Microsoft Certified", subtitle: "Microsoft Azure", icon: "🪟", underlineColor: "bg-blue-500/60", bottomBorder: "border-b-2 border-blue-500" },
              { name: "IBM Data Science", subtitle: "IBM Professional", icon: "📦", underlineColor: "bg-blue-600/60", bottomBorder: "border-b-2 border-blue-600" },
              { name: "Meta Professional", subtitle: "Meta Platforms", icon: "📱", underlineColor: "bg-purple-600/60", bottomBorder: "border-b-2 border-purple-600" },
              { name: "HCIA-AI", subtitle: "Huawei Certified", icon: "🏆", underlineColor: "bg-orange-600/60", bottomBorder: "border-b-2 border-orange-600" },
            ].map((cert, i) => (
              <div
                key={i}
                className={`dashboard-card group flex flex-col items-start justify-between py-6 ${cert.bottomBorder}`}
              >
                <div className="flex items-start justify-between w-full mb-4">
                  <div className="text-2xl">{cert.icon}</div>
                  <div className="w-5 h-5 rounded-full border border-primary/60 flex items-center justify-center text-xs text-primary">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="text-sm font-grotesk font-bold text-foreground mb-0.5">{cert.name}</p>
                  <p className="text-xs text-foreground/60">{cert.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="relative py-20 px-4 border-t border-border" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-grotesk font-bold mb-4">
              Contact
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">
              Let's connect and discuss AI, machine learning, or potential collaborations.
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              {
                platform: "GitHub",
                handle: "AbiramiMuthiah",
                url: "https://github.com/AbiramiMuthiah",
                icon: Github,
                color: "bg-purple-900/30",
              },
              {
                platform: "LinkedIn",
                handle: "abirami-muthiah2903",
                url: "https://linkedin.com/in/abirami-muthiah2903",
                icon: Linkedin,
                color: "bg-blue-900/30",
              },
              {
                platform: "Email",
                handle: "abiramimuthiah29@gmail.com",
                url: "mailto:abiramimuthiah29@gmail.com",
                icon: Mail,
                color: "bg-blue-900/30",
              },
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dashboard-card group flex items-center justify-between py-4 px-6 hover:border-primary/60 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg ${contact.color} flex items-center justify-center`}>
                    <contact.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {contact.platform}
                    </p>
                    <p className="text-xs text-foreground/60">{contact.handle}</p>
                  </div>
                </div>
                <ArrowRight size={18} className="text-primary/60 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="relative py-12 px-4 border-t border-border" >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/60 text-sm">
            2026 Abirami Muthiah. Applied AI Engineer. Building intelligent systems.
          </p>
        </div>
      </footer >
    </div >
  );
}
