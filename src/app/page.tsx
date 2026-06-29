"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight, Check, BarChart3, Search, FileText, Mic, Brain, TrendingUp,
  BookOpen, AlertCircle, MessageSquare, ChevronRight, Zap,
  DollarSign, Star, Smartphone,
} from "lucide-react";

const PINK = "#EC4899";
const PINK_LIGHT = "#FDF2F8";
const PINK_MID = "#FCE7F3";
const GREEN = "#22C55E";
const DARK = "#111111";

// ── Dashboard Mockup ──────────────────────────────────────────────────────────

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
        {/* Browser chrome */}
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-medium ml-2">
            calvra.ai/dashboard
          </div>
        </div>

        {/* App header */}
        <div className="bg-white px-5 py-3.5 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: PINK }}>
              <Zap size={13} className="text-white" />
            </div>
            <span className="font-bold text-sm" style={{ color: DARK }}>Calvra</span>
          </div>
          <div className="text-xs text-muted-foreground font-medium">This Week</div>
        </div>

        {/* Metrics row */}
        <div className="bg-white px-4 py-4 grid grid-cols-3 gap-3 border-b border-border">
          {[
            { label: "Sales", value: "KES 34.5K", change: "+12%", up: true },
            { label: "Expenses", value: "KES 12.3K", change: "-8%", up: false },
            { label: "Net Profit", value: "KES 22.2K", change: "+18%", up: true },
          ].map((m) => (
            <div key={m.label} className="rounded-xl p-3" style={{ background: m.label === "Net Profit" ? PINK_LIGHT : "#F8F8F8" }}>
              <p className="text-xs text-muted-foreground font-medium mb-1">{m.label}</p>
              <p className="text-sm font-bold" style={{ color: DARK }}>{m.value}</p>
              <p className="text-xs font-semibold mt-0.5" style={{ color: m.up ? GREEN : "#EF4444" }}>{m.change}</p>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div className="bg-white px-4 py-3 border-b border-border">
          <p className="text-xs font-semibold text-muted-foreground mb-2.5 uppercase tracking-wide">Recent Activity</p>
          <div className="space-y-2">
            {[
              { icon: "↑", label: "2 chairs sold", amount: "+ KES 12,000", type: "sale" },
              { icon: "↓", label: "Fuel expense", amount: "− KES 2,500", type: "expense" },
              { icon: "↑", label: "5 blouses sold", amount: "+ KES 7,500", type: "sale" },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: r.type === "sale" ? "#DCFCE7" : "#FEE2E2", color: r.type === "sale" ? GREEN : "#EF4444" }}>
                    {r.icon}
                  </div>
                  <span className="text-xs font-medium" style={{ color: DARK }}>{r.label}</span>
                </div>
                <span className="text-xs font-semibold" style={{ color: r.type === "sale" ? GREEN : "#EF4444" }}>{r.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI chat preview */}
        <div className="bg-white px-4 py-3">
          <div className="rounded-xl p-3 mb-3" style={{ background: "#F8F8F8" }}>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: PINK }}>
                <Zap size={10} className="text-white" />
              </div>
              <p className="text-xs leading-relaxed" style={{ color: DARK }}>
                Your profit this week is <strong>KES 18,200</strong> — KES 34,000 in sales minus KES 15,800 in expenses. Up 18% from last week.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl px-3 py-2.5 border border-border">
            <MessageSquare size={13} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Ask Calvra anything…</span>
            <div className="ml-auto w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: PINK }}>
              <ArrowRight size={11} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tight mb-6" style={{ color: DARK }}>
              Stop guessing how your{" "}
              <span style={{ color: PINK }}>business</span>{" "}
              is doing.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Calvra records, finds, and explains everything in your business — no forms, no spreadsheets, just plain language.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a href="#waitlist"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
                style={{ background: PINK }}>
                Join the Waitlist <ArrowRight size={16} />
              </a>
              <a href="#research"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full font-semibold border border-border hover:border-gray-300 text-foreground transition-all bg-white">
                Read Our Research <ChevronRight size={16} className="text-muted-foreground" />
              </a>
            </div>

            <div className="flex items-center gap-8">
              {[
                { stat: "200+", label: "Businesses interviewed" },
                { stat: "80%", label: "Still use notebooks" },
                { stat: "Free", label: "Early access" },
              ].map((s) => (
                <div key={s.stat}>
                  <p className="text-xl font-extrabold" style={{ color: DARK }}>{s.stat}</p>
                  <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard */}
          <div className="hidden md:block">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Problem ───────────────────────────────────────────────────────────────────

function ProblemSection() {
  const problems = [
    {
      icon: <Brain size={20} />,
      title: "Forgetting sales instantly",
      desc: "You close a deal and move on — by end of day the numbers are gone.",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Notebooks that disappear",
      desc: "Paper records get lost, soaked, or torn — impossible to search later.",
    },
    {
      icon: <Smartphone size={20} />,
      title: "Too many apps to manage",
      desc: "Switching between WhatsApp, Excel, and notebooks creates chaos.",
    },
    {
      icon: <DollarSign size={20} />,
      title: "No idea of real profit",
      desc: "Revenue looks good, but after expenses? Most owners don't know the number.",
    },
    {
      icon: <AlertCircle size={20} />,
      title: "Records lost under pressure",
      desc: "When things get busy, recording stops. The backlog never gets filled.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28" style={{ background: "#F8F8F8" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: PINK }}>The Problem</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: DARK }}>
            Running blind is exhausting.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every small business owner we spoke to shared the same frustrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div key={i}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: PINK_LIGHT, color: PINK }}>
                {p.icon}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: DARK }}>{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* Highlight card */}
          <div className="bg-white rounded-2xl p-6 border-2 sm:col-span-2 lg:col-span-1 flex flex-col justify-between"
            style={{ borderColor: PINK }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: PINK, color: "white" }}>
              <Star size={20} />
            </div>
            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: DARK }}>There is a better way.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Calvra removes every one of these blockers — focus on your business, not your records.
              </p>
              <a href="#waitlist"
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: PINK }}>
                See how <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Solution ──────────────────────────────────────────────────────────────────

function SolutionSection() {
  const messages = [
    {
      user: "I sold two chairs for KES 12,000.",
      ai: "Recorded! 2 chairs × KES 6,000 each. Total sales today: KES 34,500. Up 12% from yesterday.",
    },
    {
      user: "Record fuel expense KES 2,500.",
      ai: "Done. Fuel logged under Transport Costs. Expenses this week: KES 12,300.",
    },
    {
      user: "How much profit did I make this week?",
      ai: "Your profit is KES 18,200 — KES 34,000 in sales minus KES 15,800 in expenses. Up 18% from last week.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: PINK }}>The Solution</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5" style={{ color: DARK }}>
              Your intelligent business assistant.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Just tell Calvra what happened. It records everything, organises it automatically, and answers your questions instantly.
            </p>
            <ul className="space-y-3.5">
              {[
                "Works in English, Swahili, or your local language",
                "No forms, no spreadsheets — just conversation",
                "Instant answers to any business question",
                "Everything stored securely and searchable forever",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: GREEN }}>
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: DARK }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — chat bubbles */}
          <div className="space-y-5">
            {messages.map((m, i) => (
              <div key={i} className="space-y-2.5">
                <div className="flex justify-end">
                  <div className="max-w-xs rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-medium shadow-sm"
                    style={{ background: PINK, color: "white" }}>
                    {m.user}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm"
                    style={{ background: DARK }}>
                    <Zap size={14} className="text-white" />
                  </div>
                  <div className="max-w-xs rounded-2xl rounded-tl-sm px-4 py-3 text-sm border border-border shadow-sm bg-white leading-relaxed"
                    style={{ color: DARK }}>
                    {m.ai}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────

function FeaturesSection() {
  const features = [
    {
      icon: <TrendingUp size={22} />,
      title: "Remember Every Sale",
      desc: "Every transaction recorded in seconds. No sales ever fall through the cracks.",
      badge: null,
    },
    {
      icon: <DollarSign size={22} />,
      title: "Track All Expenses",
      desc: "Log costs instantly. Calvra categorises them so you see where money goes.",
      badge: null,
    },
    {
      icon: <Search size={22} />,
      title: "Find Records Instantly",
      desc: "Search any sale, expense, or customer from months ago in plain language.",
      badge: null,
    },
    {
      icon: <FileText size={22} />,
      title: "Weekly Business Reports",
      desc: "Automated summaries every week — profit, top products, biggest costs.",
      badge: null,
    },
    {
      icon: <Mic size={22} />,
      title: "Voice Recording",
      desc: "Record business events by speaking naturally. Hands-free and effortless.",
      badge: "Coming Soon",
    },
    {
      icon: <Brain size={22} />,
      title: "AI Business Insights",
      desc: "Proactive alerts and suggestions based on your patterns.",
      badge: null,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28" style={{ background: "#F8F8F8" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: PINK }}>Features</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: DARK }}>
            Everything your business needs.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Sales, expenses, and intelligence — all in one simple interface.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i}
              className="relative bg-white rounded-2xl p-6 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              {f.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: PINK_LIGHT, color: PINK }}>
                  {f.badge}
                </span>
              )}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: i === 0 ? PINK : PINK_LIGHT, color: i === 0 ? "white" : PINK }}>
                {f.icon}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: DARK }}>{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Research ──────────────────────────────────────────────────────────────────

function ResearchSection() {
  const stats = [
    { value: "80%", label: "still use notebooks or paper records", icon: <BookOpen size={20} /> },
    { value: "67%", label: "stop recording when business gets busy", icon: <AlertCircle size={20} /> },
    { value: "94%", label: "want a simpler way to keep records", icon: <Star size={20} /> },
  ];

  return (
    <section id="research" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: PINK }}>Customer Research</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: DARK }}>
            We listened before we built.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Designed from in-depth interviews with real business owners across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl p-8 border border-border text-center hover:shadow-md transition-shadow"
              style={{ background: i === 1 ? DARK : "white" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ background: i === 1 ? "rgba(255,255,255,0.1)" : PINK_LIGHT, color: i === 1 ? "white" : PINK }}>
                {s.icon}
              </div>
              <p className="text-5xl font-extrabold mb-3"
                style={{ color: i === 1 ? "white" : PINK }}>{s.value}</p>
              <p className="text-sm leading-relaxed"
                style={{ color: i === 1 ? "rgba(255,255,255,0.7)" : "#6B7280" }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-8 md:p-10 border-l-4 border border-border"
          style={{ borderLeftColor: PINK, background: PINK_LIGHT }}>
          <div className="flex items-start gap-4">
            <div className="text-5xl leading-none font-serif" style={{ color: PINK }}>&ldquo;</div>
            <div>
              <p className="text-xl md:text-2xl font-semibold italic leading-relaxed mb-5" style={{ color: DARK }}>
                Records are a big bother. When I get busy, I stop recording. By the end of the week I don&apos;t even know where the money went.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: PINK }}>M</div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: DARK }}>Mary W.</p>
                  <p className="text-xs text-muted-foreground">Clothing retailer, Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: <MessageSquare size={24} />,
      title: "Record your business",
      desc: "Tell Calvra what happened — a sale, expense, or debt — in plain language. No forms.",
    },
    {
      num: "02",
      icon: <Search size={24} />,
      title: "Ask questions naturally",
      desc: "\"Who still owes me money?\" \"What were my top sales?\" Calvra answers instantly.",
    },
    {
      num: "03",
      icon: <BarChart3 size={24} />,
      title: "Get instant insights",
      desc: "Weekly reports, profit summaries, and proactive alerts — all automated.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "#F8F8F8" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: PINK }}>How It Works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: DARK }}>
            Three simple steps.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From zero to full clarity on your business in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative bg-white rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="text-xs font-bold tracking-widest mb-5 uppercase" style={{ color: PINK }}>{s.num}</div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm"
                style={{ background: i === 1 ? PINK : DARK, color: "white" }}>
                {s.icon}
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: DARK }}>{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Waitlist ──────────────────────────────────────────────────────────────────

function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 md:py-32" style={{ background: DARK }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
          Be among the first to use Calvra.
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
          Join the waitlist. We&apos;ll reach out when your spot opens.
        </p>

        {submitted ? (
          <div className="rounded-2xl p-8 border"
            style={{ background: "rgba(34,197,94,0.1)", borderColor: "rgba(34,197,94,0.3)" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: GREEN }}>
              <Check size={28} className="text-white" strokeWidth={3} />
            </div>
            <p className="text-white font-bold text-xl mb-2">You&apos;re on the list.</p>
            <p className="text-gray-400 text-sm">We&apos;ll reach out as soon as early access is available.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full border text-sm font-medium outline-none"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.15)",
                color: "white",
                caretColor: PINK,
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white whitespace-nowrap hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: PINK }}
            >
              Join Waitlist <ArrowRight size={15} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ResearchSection />
      <HowItWorksSection />
      <WaitlistSection />
    </>
  );
}