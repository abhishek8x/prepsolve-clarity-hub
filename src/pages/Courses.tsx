import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Trophy, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", name: "All Courses" },
  { id: "boards", name: "Board Exams" },
  { id: "neet", name: "NEET" },
  { id: "competitive", name: "Competitive" },
];

const courses = [
  {
    id: 1,
    title: "Class 12 Physics Complete",
    category: "boards",
    subject: "Physics",
    lessons: 85,
    duration: "40+ hours",
    level: "Class 12",
    description: "Master all concepts from mechanics to modern physics with exam-focused clarity.",
    coming: false,
  },
  {
    id: 2,
    title: "Class 12 Chemistry Complete",
    category: "boards",
    subject: "Chemistry",
    lessons: 72,
    duration: "35+ hours",
    level: "Class 12",
    description: "Physical, organic, and inorganic chemistry explained with structure and clarity.",
    coming: false,
  },
  {
    id: 3,
    title: "Class 12 Mathematics",
    category: "boards",
    subject: "Mathematics",
    lessons: 90,
    duration: "45+ hours",
    level: "Class 12",
    description: "From calculus to algebra — clear problem-solving approaches for every chapter.",
    coming: true,
  },
  {
    id: 4,
    title: "NEET Biology Complete",
    category: "neet",
    subject: "Biology",
    lessons: 120,
    duration: "60+ hours",
    level: "NEET",
    description: "Comprehensive NEET Biology covering Botany and Zoology with diagram clarity.",
    coming: true,
  },
  {
    id: 5,
    title: "NEET Physics",
    category: "neet",
    subject: "Physics",
    lessons: 95,
    duration: "50+ hours",
    level: "NEET",
    description: "NEET-specific physics preparation with numericals and conceptual focus.",
    coming: true,
  },
  {
    id: 6,
    title: "Competitive Reasoning",
    category: "competitive",
    subject: "Reasoning",
    lessons: 60,
    duration: "30+ hours",
    level: "Competitive",
    description: "Logical and analytical reasoning for SSC, Banking, and other competitive exams.",
    coming: true,
  },
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
              Courses
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Learn with <span className="gradient-text">Structure</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Exam-focused courses designed for clarity. No fluff, no confusion — 
              just what you need to know, organized the way it should be.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-y border-border sticky top-16 md:top-20 z-40 backdrop-blur-xl">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group glass-card rounded-2xl overflow-hidden hover-lift"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BookOpen size={24} className="text-primary" />
                    </div>
                    {course.coming && (
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                      {course.level}
                    </span>
                    <span className="text-muted-foreground text-xs">{course.subject}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-border bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen size={14} />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {course.duration}
                      </span>
                    </div>
                    {!course.coming && (
                      <a href="/class-12-physics">
  <Button variant="ghost" size="sm" className="text-primary">
    View
  </Button>
</a>

                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No courses in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, value: "500+", label: "Lessons" },
              { icon: Clock, value: "200+", label: "Hours of Content" },
              { icon: GraduationCap, value: "6", label: "Exam Categories" },
              { icon: Users, value: "Growing", label: "Student Community" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
