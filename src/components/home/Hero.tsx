import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      
      {/* Background (light only) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(200_20%_98%)_0%,hsl(200_15%_95%)_70%)]" />

      {/* Subtle light grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(220 14% 90%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(220 14% 90%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">
              Smart Exam Preparation
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight mb-6 animate-fade-up stagger-1">
            Structured exam preparation.
            <br />
            <span className="gradient-text">Without confusion.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up stagger-2">
            Stop drowning in endless content. PrepSolve gives you clarity on what
            to study, what to skip, and how to prepare smarter — not harder.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Link to="/courses">
              <Button variant="hero" size="xl">
                Start Learning
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/methodology">
              <Button variant="hero-outline" size="xl">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-500 animate-fade-up stagger-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">Board Exams</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">NEET Preparation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">Competitive Exams</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 to-transparent" />
    </section>
  );
}
