import { AlertCircle, Shuffle, HelpCircle, Clock } from "lucide-react";

const problems = [
  {
    icon: Shuffle,
    title: "Too Many Resources",
    description: "YouTube, apps, books, notes — endless content but no clarity on what actually matters.",
  },
  {
    icon: AlertCircle,
    title: "Random Study Pattern",
    description: "Jumping between topics without a structured flow wastes time and creates gaps.",
  },
  {
    icon: HelpCircle,
    title: "Confusion About Priorities",
    description: "Not knowing what to focus on leads to stress and ineffective preparation.",
  },
  {
    icon: Clock,
    title: "Last-Minute Panic",
    description: "Poor planning throughout the year leads to cramming and anxiety before exams.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            The Problem
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Most Students Struggle
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            It's not about studying more. It's about studying without direction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group glass-card rounded-2xl p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon size={24} className="text-destructive" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}