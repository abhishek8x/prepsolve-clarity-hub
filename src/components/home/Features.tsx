import { Lightbulb, FileText, BarChart3, Repeat, Target, Clock } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Concept Clarity",
    description: "Understand the 'why' behind every concept with clear, focused explanations.",
  },
  {
    icon: Target,
    title: "Exam-Focused Content",
    description: "Every lesson is designed with your exam in mind — no unnecessary tangents.",
  },
  {
    icon: FileText,
    title: "Structured Notes",
    description: "Organized notes that follow a logical flow, ready for quick revision.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "See where you stand and what needs more attention with clear analytics.",
  },
  {
    icon: Repeat,
    title: "Smart Revision System",
    description: "Spaced repetition and revision schedules that actually work.",
  },
  {
    icon: Clock,
    title: "Time-Efficient Prep",
    description: "Learn what matters, skip what doesn't — make every hour count.",
  },
];

export function Features() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Features
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Prepare Smart
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and content designed for students who value quality over quantity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-white border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}