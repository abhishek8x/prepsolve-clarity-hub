import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Clarity Over Volume",
    description: "We believe in teaching less, better. Every piece of content is filtered for relevance and exam-focus.",
  },
  {
    icon: Lightbulb,
    title: "Understanding First",
    description: "Rote learning doesn't work long-term. We focus on building genuine conceptual understanding.",
  },
  {
    icon: Clock,
    title: "Respect for Time",
    description: "Students are busy. We design content to be efficient — no padding, no unnecessary tangents.",
  },
  {
    icon: Users,
    title: "Student-Centric",
    description: "Everything we build starts with one question: 'Does this actually help students prepare better?'",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-[radial-gradient(ellipse_at_top,hsl(222_47%_16%)_0%,hsl(222_47%_11%)_70%)]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why <span className="gradient-text">PrepSolve</span> Exists
            </h1>
            <p className="text-muted-foreground text-lg">
              We're building the exam preparation platform we wished we had as students.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                The Problem We Saw
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every year, millions of Indian students prepare for exams — boards, NEET, JEE, 
                  and countless competitive tests. They have access to more resources than ever: 
                  YouTube channels, apps, coaching centers, online courses, books, PDFs.
                </p>
                <p>
                  Yet, most students feel more confused than prepared. The problem isn't lack 
                  of content — it's the opposite. There's too much content, too little direction, 
                  and no clear answer to the most basic question: <strong className="text-foreground">"What should I actually study?"</strong>
                </p>
                <p>
                  We saw students spending hours watching random videos, jumping between topics 
                  without structure, and panicking before exams because they never had a clear 
                  plan. The education industry kept adding more — more videos, more tests, more 
                  features — when what students needed was less noise and more clarity.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                What PrepSolve Does Differently
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PrepSolve is not another content factory. We don't measure success by 
                  "hours of video uploaded" or "number of practice questions." We measure 
                  it by whether students feel less confused and more prepared.
                </p>
                <p>
                  Our approach is simple: <strong className="text-foreground">structure over volume, clarity over coverage.</strong>
                </p>
                <p>
                  We analyze exam patterns to identify what actually matters. We organize 
                  content in logical sequences so concepts build on each other naturally. 
                  We tell students what to skip so they don't waste time on low-priority topics. 
                  And we provide revision systems that help retention without endless repetition.
                </p>
                <p>
                  This isn't about being "motivational" or promising miraculous results. 
                  It's about providing the structured, focused preparation that students 
                  deserve but rarely get.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Believe
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide how we build PrepSolve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div key={i} className="glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Experience Clarity?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            See how structured preparation feels different.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/courses">
              <Button variant="hero" size="lg">
                Explore Courses
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
