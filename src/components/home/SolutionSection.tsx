import { CheckCircle2, Target, Layers, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Clear Priorities",
    description: "Know exactly what topics matter most for your exam and focus your energy where it counts.",
  },
  {
    icon: Layers,
    title: "Structured Flow",
    description: "Follow a logical sequence of concepts that build on each other — no more random jumping.",
  },
  {
    icon: CheckCircle2,
    title: "What to Skip",
    description: "We tell you what's low-priority so you don't waste time on things that rarely appear in exams.",
  },
  {
    icon: TrendingUp,
    title: "Smart Revision",
    description: "Proven revision techniques that help you retain more with less effort before exams.",
  },
];

export function SolutionSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
              The Solution
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              PrepSolve Brings{" "}
              <span className="gradient-text">Clarity</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't add more content to your life. We filter, organize, and structure 
              what you actually need — so you can study smarter, not just harder.
            </p>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={solution.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <solution.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-border/30" />
              <div className="absolute inset-8 rounded-full border border-border/40" />
              <div className="absolute inset-16 rounded-full border border-primary/20" />
              
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center glow-effect">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary">PS</div>
                    <div className="text-xs text-primary/80 mt-1">PrepSolve</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground animate-float">
                Structure
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground animate-float" style={{ animationDelay: '2s' }}>
                Revision
              </div>
              <div className="absolute top-1/2 left-4 -translate-y-1/2 px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground animate-float" style={{ animationDelay: '1s' }}>
                Focus
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground animate-float" style={{ animationDelay: '3s' }}>
                Clarity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
