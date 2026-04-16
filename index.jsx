import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
const IconBase = ({ children, className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const BarChart3 = ({ className }) => (
  <IconBase className={className}>
    <path d="M3 3v18h18" />
    <path d="M8 17V9" />
    <path d="M12 17V5" />
    <path d="M16 17v-7" />
  </IconBase>
);

const Briefcase = ({ className }) => (
  <IconBase className={className}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </IconBase>
);

const ChevronRight = ({ className }) => (
  <IconBase className={className}>
    <path d="m9 18 6-6-6-6" />
  </IconBase>
);

const Download = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </IconBase>
);

const ExternalLink = ({ className }) => (
  <IconBase className={className}>
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4" />
  </IconBase>
);

const FileText = ({ className }) => (
  <IconBase className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h8" />
    <path d="M8 9h2" />
  </IconBase>
);

const Github = ({ className }) => (
  <IconBase className={className}>
    <path d="M9 19c-4 1.5-4-2.5-6-3" />
    <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </IconBase>
);

const GraduationCap = ({ className }) => (
  <IconBase className={className}>
    <path d="m2 10 10-5 10 5-10 5-10-5Z" />
    <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
  </IconBase>
);

const LayoutDashboard = ({ className }) => (
  <IconBase className={className}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </IconBase>
);

const Linkedin = ({ className }) => (
  <IconBase className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </IconBase>
);

const Mail = ({ className }) => (
  <IconBase className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </IconBase>
);

const MapPin = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 21s-6-5.33-6-11a6 6 0 0 1 12 0c0 5.67-6 11-6 11Z" />
    <circle cx="12" cy="10" r="2" />
  </IconBase>
);

const Menu = ({ className }) => (
  <IconBase className={className}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </IconBase>
);

const Phone = ({ className }) => (
  <IconBase className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.61 2.65a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.43-1.27a2 2 0 0 1 2.11-.45c.86.28 1.75.49 2.65.61A2 2 0 0 1 22 16.92Z" />
  </IconBase>
);

const Search = ({ className }) => (
  <IconBase className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </IconBase>
);

const Sparkles = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
    <path d="M5 19l.9 2 .9-2 2-.9-2-.9-.9-2-.9 2-2 .9 2 .9Z" />
    <path d="M19 14l1.1 2.4L22.5 17l-2.4 1.1L19 20.5l-1.1-2.4L15.5 17l2.4-1.1L19 14Z" />
  </IconBase>
);

const Star = ({ className }) => (
  <IconBase className={className}>
    <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z" />
  </IconBase>
);

const User = ({ className }) => (
  <IconBase className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </IconBase>
);

const X = ({ className }) => (
  <IconBase className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconBase>
);
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "capstone", label: "Capstone" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { label: "Tools Used", value: "8+" },
  { label: "Analytics Projects", value: "10+" },
  { label: "Years Experience", value: "2+" },
  { label: "Focus Areas", value: "Healthcare & Business" },
];

const featuredProjects = [
  {
    title: "Hospital Readmission Analytics",
    type: "Capstone Project",
    tags: ["R", "Python", "EDA", "Healthcare"],
    summary:
      "Analyzes hospital readmission factors to identify high-risk patient groups, improve decisions, and support future predictive modeling.",
    impact:
      "Helps connect patient trends, care outcomes, and operational planning in a real-world healthcare setting.",
    details:
      [
        "Performed exploratory data analysis on patient and hospital variables.",
        "Studied factors such as age, length of stay, chronic conditions, and prior admissions.",
        "Built a project story focused on business meaning, not just technical output.",
      ],
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Telecom Customer Churn Dashboard",
    type: "Visualization Project",
    tags: ["Tableau", "Dashboard", "Churn"],
    summary:
      "Interactive dashboard exploring customer churn trends across contracts, tenure, and payment methods.",
    impact:
      "Supports business teams in understanding customer loss patterns and retention opportunities.",
    details:
      [
        "Designed business-friendly visuals for churn monitoring.",
        "Compared churn behavior across subscription and payment categories.",
        "Focused on clear storytelling and decision-ready insights.",
      ],
    accent: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "Health Insurance Pricing Analysis",
    type: "Regression Project",
    tags: ["R", "Regression", "Statistics"],
    summary:
      "Regression-based analysis to understand how age, BMI, smoking status, and other variables affect insurance pricing.",
    impact:
      "Demonstrates ability to translate statistical results into understandable business insights.",
    details:
      [
        "Used structured statistical analysis to identify major price drivers.",
        "Explained model outputs in a simple, stakeholder-focused format.",
        "Connected quantitative findings to real-world pricing decisions.",
      ],
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Airline Incidents & Fatalities Visual Study",
    type: "Comparative Analytics",
    tags: ["Tableau", "Comparative Analysis", "Storytelling"],
    summary:
      "Compares airline incidents and fatalities across two historical periods to reveal safety trends and changes over time.",
    impact:
      "Shows ability to structure comparison-based stories with clean visuals and business-friendly explanation.",
    details:
      [
        "Built period-based comparisons for incident and fatality trends.",
        "Highlighted patterns using accessible visual design.",
        "Turned raw data into a simple narrative for presentation.",
      ],
    accent: "from-amber-500/20 to-orange-500/20",
  },
];

const skills = {
  Analytics: ["SQL", "Excel", "Tableau", "Power BI", "R", "Python"],
  "Business & Reporting": [
    "Data Visualization",
    "KPI Reporting",
    "Dashboard Design",
    "EDA",
    "Business Analysis",
    "Presentation Storytelling",
  ],
  Tools: ["RStudio", "ServiceNow", "Microsoft Office", "GitHub", "Jupyter"],
  Strengths: [
    "Problem Solving",
    "Communication",
    "Multitasking",
    "Stakeholder Support",
    "Customer Service",
  ],
};

const experience = [
  {
    role: "Faculty / Student Services Assistant",
    org: "Franklin University",
    time: "Jan 2025 – Present",
    points: [
      "Support students and faculty with administrative and service-related requests.",
      "Handle multiple priorities while maintaining clear and professional communication.",
      "Strengthened coordination, problem-solving, and operational support skills.",
    ],
  },
  {
    role: "Technical Associate",
    org: "Tech Mahindra",
    time: "Mar 2023 – Aug 2024",
    points: [
      "Provided customer support across multiple queues, including priority medical customers.",
      "Monitored issues, prepared reports, and maintained service quality in a fast-paced setting.",
      "Recognized as Top Associate in November 2023 for strong performance and service quality.",
    ],
  },
  {
    role: "Junior Engineer Intern",
    org: "GK Raj Construction",
    time: "Internship Experience",
    points: [
      "Supported project coordination and field-related documentation.",
      "Built early exposure to project workflows, reporting, and cross-team collaboration.",
      "Developed practical understanding of operations and process discipline.",
    ],
  },
];

const chartData = [
  { month: "Jan", score: 42 },
  { month: "Feb", score: 48 },
  { month: "Mar", score: 51 },
  { month: "Apr", score: 57 },
  { month: "May", score: 63 },
  { month: "Jun", score: 68 },
  { month: "Jul", score: 72 },
];

function SectionHeading({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
        <Icon className="h-4 w-4" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-slate-300 md:text-lg">{description}</p>
    </div>
  );
}

function ProjectModal({ project, open, onOpenChange }) {
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/10 bg-slate-950 text-white sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-slate-300">
            {project.type} · {project.tags.join(" · ")}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5">
          <p className="leading-7 text-slate-300">{project.summary}</p>
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Business impact</h4>
            <p className="leading-7 text-slate-300">{project.impact}</p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">What this project includes</h4>
            <ul className="space-y-2 text-slate-300">
              {project.details.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ChevronRight className="mt-1 h-4 w-4 text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function AdvancedPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return featuredProjects;
    return featuredProjects.filter((project) =>
      [project.title, project.type, project.summary, ...(project.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.14),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.14),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
              KD
            </div>
            <div>
              <p className="text-sm text-slate-400">Portfolio</p>
              <h1 className="text-base font-semibold text-white">Krupakar Dandem</h1>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button className="rounded-xl bg-white text-slate-950 hover:bg-slate-100">
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-xl text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-white/10 bg-slate-950 text-white">
                <div className="mt-8 flex flex-col gap-5">
                  {navItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="text-base text-slate-200">
                      {item.label}
                    </a>
                  ))}
                  <Button className="mt-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100">
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-4 pb-14 pt-12 md:px-8 md:pb-24 md:pt-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Badge className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/10">
                <Sparkles className="mr-2 h-4 w-4" /> Business Analytics Portfolio
              </Badge>
              <div className="space-y-5">
                <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                  Turning data into <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">clear business insights</span>.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  I’m Krupakar Dandem, a Business Analytics graduate student focused on healthcare analytics, dashboards, and decision-making through data storytelling.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl bg-white px-6 text-slate-950 hover:bg-slate-100">
                  <a href="#projects">
                    View Projects <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="rounded-3xl border-white/10 bg-white/5 shadow-2xl shadow-black/10">
                    <CardContent className="p-5">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <Card className="overflow-hidden rounded-[32px] border-white/10 bg-white/5 shadow-2xl shadow-cyan-900/10 backdrop-blur">
                <CardContent className="p-0">
                  <div className="border-b border-white/10 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Analytics Growth Snapshot</p>
                        <h3 className="text-xl font-semibold text-white">Project Readiness</h3>
                      </div>
                      <Badge className="rounded-full bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/10">
                        Updated
                      </Badge>
                    </div>
                  </div>
                  <div className="h-[320px] p-4 md:h-[360px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="fillScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#67e8f9" stopOpacity={0.35} />
                            <stop offset="95%" stopColor="#67e8f9" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                        <XAxis dataKey="month" tick={{ fill: "#cbd5e1", fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, color: "white" }} />
                        <Area type="monotone" dataKey="score" stroke="#67e8f9" strokeWidth={3} fill="url(#fillScore)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid gap-3 border-t border-white/10 p-5 sm:grid-cols-3">
                    {[
                      { label: "Storytelling", value: "Strong" },
                      { label: "Visualization", value: "Advanced" },
                      { label: "Business Focus", value: "High" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                        <p className="mt-2 font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              icon={User}
              eyebrow="About Me"
              title="Professional identity with business meaning"
              description="This portfolio presents my journey as a business analytics student who enjoys solving practical problems with data, dashboards, and clear communication."
            />
            <Card className="rounded-[28px] border-white/10 bg-white/5">
              <CardContent className="space-y-5 p-8">
                <p className="leading-8 text-slate-300">
                  I am a Master’s student in Business Analytics with a strong interest in healthcare analytics, business reporting, and data storytelling. I enjoy working with tools such as SQL, Excel, Tableau, R, and Python to turn raw data into useful insights that support better decisions.
                </p>
                <p className="leading-8 text-slate-300">
                  My background in customer support and university service roles helped me build communication, problem-solving, and multitasking skills. I bring both analytical thinking and a business mindset, which helps me explain technical findings in a simple and professional way.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: GraduationCap, label: "Education", value: "M.S. Business Analytics" },
                    { icon: MapPin, label: "Location", value: "Columbus, Ohio" },
                    { icon: Briefcase, label: "Current Focus", value: "Healthcare & Business Analytics" },
                    { icon: Star, label: "Strength", value: "Clear communication with analysis" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-cyan-300" />
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="font-medium text-white">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              icon={LayoutDashboard}
              eyebrow="Featured Work"
              title="Projects built around analysis, storytelling, and impact"
              description="A selected gallery of projects that demonstrate dashboard design, analytical thinking, and the ability to connect findings with business value."
            />
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects or tools"
                className="rounded-2xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Card className="group h-full rounded-[28px] border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <CardContent className="p-6">
                    <div className={`mb-5 rounded-3xl border border-white/10 bg-gradient-to-br ${project.accent} p-5`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-slate-300">{project.type}</p>
                          <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                        </div>
                        <BarChart3 className="h-6 w-6 text-white/80" />
                      </div>
                    </div>
                    <p className="leading-7 text-slate-300">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button
                        className="rounded-xl bg-white text-slate-950 hover:bg-slate-100"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                      <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="capstone" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              icon={FileText}
              eyebrow="Capstone Story"
              title="From business problem to analytical recommendation"
              description="My capstone story is designed to show not only what I analyzed, but also why it matters to professional stakeholders."
            />

            <Card className="rounded-[28px] border-white/10 bg-white/5">
              <CardContent className="p-6 md:p-8">
                <Tabs defaultValue="problem" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 gap-2 rounded-2xl bg-white/5 p-1 md:grid-cols-4">
                    <TabsTrigger value="problem" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-950">Problem</TabsTrigger>
                    <TabsTrigger value="journey" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-950">Data Journey</TabsTrigger>
                    <TabsTrigger value="solution" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-950">Solution</TabsTrigger>
                    <TabsTrigger value="impact" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-950">Impact</TabsTrigger>
                  </TabsList>

                  <TabsContent value="problem" className="mt-6 space-y-3 text-slate-300">
                    <h3 className="text-xl font-semibold text-white">The problem</h3>
                    <p className="leading-8">
                      Hospital readmissions create financial pressure, affect patient outcomes, and may indicate gaps in care planning. The project focuses on understanding which factors are linked with higher readmission risk.
                    </p>
                  </TabsContent>

                  <TabsContent value="journey" className="mt-6 space-y-3 text-slate-300">
                    <h3 className="text-xl font-semibold text-white">The data journey</h3>
                    <p className="leading-8">
                      The dataset required careful review of variables, missing values, and consistency. This step was important because good analysis depends on clean and reliable data.
                    </p>
                  </TabsContent>

                  <TabsContent value="solution" className="mt-6 space-y-3 text-slate-300">
                    <h3 className="text-xl font-semibold text-white">The analytical solution</h3>
                    <p className="leading-8">
                      I used exploratory data analysis, variable review, and visualization techniques to identify patterns in patient readmissions. The goal is to build a strong foundation for later predictive work.
                    </p>
                  </TabsContent>

                  <TabsContent value="impact" className="mt-6 space-y-3 text-slate-300">
                    <h3 className="text-xl font-semibold text-white">The business impact</h3>
                    <p className="leading-8">
                      The findings can help healthcare providers better understand high-risk patient groups, improve care strategies, and reduce avoidable readmissions through more informed decisions.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-24">
          <SectionHeading
            icon={Briefcase}
            eyebrow="Experience"
            title="Work that shaped my professional strengths"
            description="My experience combines service, operations, coordination, and communication skills that support strong analytical work."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {experience.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="h-full rounded-[28px] border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <p className="text-sm text-cyan-300">{item.time}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-slate-400">{item.org}</p>
                    <ul className="mt-5 space-y-3 text-slate-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 leading-7">
                          <ChevronRight className="mt-1 h-4 w-4 text-cyan-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              icon={Sparkles}
              eyebrow="Skills"
              title="A balanced mix of technical and business capabilities"
              description="This section highlights the tools and strengths I use to move from raw data to useful recommendations."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {Object.entries(skills).map(([group, values]) => (
                <Card key={group} className="rounded-[24px] border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white">{group}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {values.map((skill) => (
                        <Badge key={skill} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-slate-200 hover:bg-slate-900/80">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-10">
          <Card className="rounded-[32px] border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10">
            <CardContent className="p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                <div>
                  <Badge className="rounded-full bg-white/10 text-cyan-200 hover:bg-white/10">Technical & Visual Artifacts</Badge>
                  <h3 className="mt-4 text-3xl font-bold text-white">Proof of hands-on analytical work</h3>
                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    This portfolio is designed to include dashboards, code-based outputs, project stories, and business-facing visuals that show both technical proficiency and clear communication.
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full rounded-3xl border border-white/10 bg-slate-950/50 px-5">
                  <AccordionItem value="item-1" className="border-white/10">
                    <AccordionTrigger className="text-left text-white">Artifact 1 – Readmission Dashboard</AccordionTrigger>
                    <AccordionContent className="leading-7 text-slate-300">
                      A dashboard showing readmission trends by age, diagnosis group, and hospital-related variables to identify high-risk areas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-white/10">
                    <AccordionTrigger className="text-left text-white">Artifact 2 – R / Python EDA Output</AccordionTrigger>
                    <AccordionContent className="leading-7 text-slate-300">
                      Visual and statistical outputs such as box plots, scatter plots, heatmaps, and correlation summaries that support business-focused analysis.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-white/10">
                    <AccordionTrigger className="text-left text-white">Artifact 3 – Project Presentation Story</AccordionTrigger>
                    <AccordionContent className="leading-7 text-slate-300">
                      A slide-ready narrative that explains the problem, data journey, findings, and business recommendations in a professional format.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              icon={Mail}
              eyebrow="Contact"
              title="Let’s connect for opportunities and collaborations"
              description="I’m open to internships, analyst roles, and opportunities where I can contribute through data analysis, dashboards, and business insight."
            />
            <Card className="rounded-[28px] border-white/10 bg-white/5">
              <CardContent className="grid gap-4 p-8 sm:grid-cols-2">
                {[
                  { icon: Mail, label: "Email", value: "dandemkrupakar@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Columbus, Ohio" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/krupakardandem" },
                  { icon: Github, label: "GitHub", value: "github.com/yourusername" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <div className="flex items-start gap-3">
                      <item.icon className="mt-0.5 h-5 w-5 text-cyan-300" />
                      <div>
                        <p className="text-sm text-slate-400">{item.label}</p>
                        <p className="mt-1 break-all font-medium text-white">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Krupakar Dandem. Built for a modern analytics portfolio.</p>
          <div className="flex items-center gap-5">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#capstone" className="transition hover:text-white">Capstone</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      />
    </div>
  );
}
