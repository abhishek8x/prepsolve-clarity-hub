import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { FileText, HelpCircle, Repeat, Download, BookOpen, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All Resources", icon: BookOpen },
  { id: "notes", name: "Study Notes", icon: FileText },
  { id: "practice", name: "Practice Questions", icon: HelpCircle },
  { id: "revision", name: "Revision Guides", icon: Repeat },
];

const resources = [
  {
    id: 1,
    title: "Electric Charges & Fields - Complete Notes",
    category: "notes",
    subject: "Physics",
    level: "Class 12",
    pages: 24,
    description: "Comprehensive notes covering Coulomb's law, electric field, field lines, and Gauss's theorem.",
  },
  {
    id: 2,
    title: "Current Electricity - Solved Problems",
    category: "practice",
    subject: "Physics",
    level: "Class 12",
    problems: 50,
    description: "50 solved numerical problems from Ohm's law to complex circuits.",
  },
  {
    id: 3,
    title: "Electrostatics Quick Revision",
    category: "revision",
    subject: "Physics",
    level: "Class 12",
    duration: "30 min",
    description: "Key formulas, concepts, and diagrams for last-minute revision.",
  },
  {
    id: 4,
    title: "Organic Chemistry Reactions - Notes",
    category: "notes",
    subject: "Chemistry",
    level: "Class 12",
    pages: 32,
    description: "All named reactions, mechanisms, and conversion pathways organized topic-wise.",
  },
  {
    id: 5,
    title: "Chemical Kinetics - Practice Set",
    category: "practice",
    subject: "Chemistry",
    level: "Class 12",
    problems: 40,
    description: "Numerical problems on rate laws, order of reaction, and Arrhenius equation.",
  },
  {
    id: 6,
    title: "Coordination Compounds Revision",
    category: "revision",
    subject: "Chemistry",
    level: "Class 12",
    duration: "25 min",
    description: "IUPAC naming, isomerism, and bonding theories at a glance.",
  },
  {
    id: 7,
    title: "Integration - Complete Notes",
    category: "notes",
    subject: "Mathematics",
    level: "Class 12",
    pages: 28,
    description: "All integration techniques with solved examples and special cases.",
  },
  {
    id: 8,
    title: "Probability - Practice Questions",
    category: "practice",
    subject: "Mathematics",
    level: "Class 12",
    problems: 35,
    description: "Conditional probability, Bayes' theorem, and probability distributions.",
  },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter(r => {
    const matchesCategory = activeCategory === "all" || r.category === activeCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         r.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "notes": return FileText;
      case "practice": return HelpCircle;
      case "revision": return Repeat;
      default: return FileText;
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-[radial-gradient(ellipse_at_top,hsl(222_47%_16%)_0%,hsl(222_47%_11%)_70%)]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
              Resources
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Study <span className="gradient-text">Materials</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Organized notes, practice questions, and revision guides — 
              everything you need in one place.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card/50 border-y border-border sticky top-16 md:top-20 z-40 backdrop-blur-xl">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const Icon = getCategoryIcon(resource.category);
              return (
                <div
                  key={resource.id}
                  className="group glass-card rounded-2xl p-6 hover-lift cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <span className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs">
                      {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                      {resource.level}
                    </span>
                    <span className="text-muted-foreground text-xs">{resource.subject}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {resource.pages && `${resource.pages} pages`}
                      {resource.problems && `${resource.problems} problems`}
                      {resource.duration && resource.duration}
                    </span>
                    <button className="flex items-center gap-1 text-primary text-sm hover:underline">
                      <Download size={14} />
                      Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
