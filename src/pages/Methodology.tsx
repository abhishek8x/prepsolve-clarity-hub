import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Layers, Repeat, CheckCircle2, XCircle, ArrowRight, Lightbulb, Clock, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand What Matters",
    description: "We analyze exam patterns and weightage to identify high-priority topics. You focus on what actually gets asked.",
    icon: Target,
  },
  {
    number: "02", 
    title: "Learn in the Right Order",
    description: "Topics are organized in a logical sequence where each concept builds on the previous one. No more random jumping.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Skip What Doesn't Count",
    description: "We explicitly tell you which topics are low-priority so you don't waste time on rarely-asked content.",
    icon: XCircle,
  },
  {
    number: "04",
    title: "Revise Effectively",
    description: "Strategic revision schedules and smart techniques help you retain more with less effort.",
    icon: Repeat,
  },
];

const whatWeDo = [
  "Identify high-weightage topics for each exam",
  "Organize content in logical learning sequences",
  "Provide clear, focused explanations",
  "Create structured notes for quick revision",
  "Track your progress and identify weak areas",
  "Guide you on exam strategy and time management",
];

const whatWeDont = [
  "Overwhelm you with endless content",
  "Cover unnecessary topics in depth",
  "Use motivational fluff instead of substance",
  "Promise unrealistic results",
  "Create dependency on the platform",
  "Add distractions with gamification gimmicks",
];

export default function Methodology() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-[radial-gradient(ellipse_at_top,hsl(222_47%_16%)_0%,hsl(222_47%_11%)_70%)]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
              Our Methodology
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How PrepSolve <span className="gradient-text">Works</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              A clear, structured approach to exam preparation that focuses on 
              studying smart — not just studying more.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border -translate-x-8" />
                )}
                
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-display font-bold text-primary/30">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon size={20} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do vs Don't */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Approach, Clearly Defined
            </h2>
            <p className="text-muted-foreground text-lg">
              We believe in being upfront about what we offer and what we don't.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What We Do */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  What We Do
                </h3>
              </div>
              <ul className="space-y-4">
                {whatWeDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Don't */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <XCircle size={20} className="text-destructive" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  What We Don't Do
                </h3>
              </div>
              <ul className="space-y-4">
                {whatWeDont.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle size={18} className="text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Lightbulb, title: "Clarity First", desc: "Every explanation is designed to build understanding, not confusion." },
                { icon: Clock, title: "Time Respect", desc: "We value your time — no padding, no unnecessary content." },
                { icon: BarChart3, title: "Result Focus", desc: "Everything we do is oriented towards your exam success." },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Ready to Experience This Approach?
              </h3>
              <p className="text-muted-foreground mb-6">
                See how structured preparation feels different from random studying.
              </p>
              <Link to="/courses">
                <Button variant="hero" size="lg">
                  Explore Courses
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
