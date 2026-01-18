import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Play, 
  FileText, 
  CheckSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  Clock,
  TrendingUp,
  Target,
  ChevronRight,
  Lock,
  User,
  Mail
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: BookOpen, label: "My Courses" },
  { icon: Play, label: "Continue Learning" },
  { icon: FileText, label: "Notes" },
  { icon: CheckSquare, label: "Practice" },
  { icon: Target, label: "Revision" },
  { icon: Settings, label: "Settings" },
];

const recentLessons = [
  { title: "Electric Charges and Fields", course: "Class 12 Physics", progress: 85 },
  { title: "Electrostatic Potential", course: "Class 12 Physics", progress: 60 },
  { title: "Current Electricity", course: "Class 12 Physics", progress: 30 },
];

const upcomingRevisions = [
  { topic: "Laws of Motion", due: "Today" },
  { topic: "Thermodynamics Basics", due: "Tomorrow" },
  { topic: "Wave Optics", due: "In 3 days" },
];

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isLoggedIn) {
    return (
      <Layout hideFooter>
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 bg-muted">
          <div className="w-full max-w-md">
            <div className="glass-card rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-primary">PS</span>
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                  {isSignUp ? "Create Account" : "Welcome Back"}
                </h1>
                <p className="text-muted-foreground text-sm">
                  {isSignUp 
                    ? "Start your structured preparation journey" 
                    : "Sign in to continue your learning"}
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
                {isSignUp && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input 
                        type="text" 
                        placeholder="Enter your name"
                        className="pl-10 bg-white border-border"
                      />
                    </div>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      type="email" 
                      placeholder="you@example.com"
                      className="pl-10 bg-white border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      type="password" 
                      placeholder="••••••••"
                      className="pl-10 bg-white border-border"
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  {isSignUp ? "Create Account" : "Sign In"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button 
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {isSignUp 
                    ? "Already have an account? Sign in" 
                    : "Don't have an account? Sign up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout hideFooter>
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-border">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-lg font-display font-bold text-primary">A</span>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Ananya Sharma</p>
                <p className="text-xs text-muted-foreground">Class 12 • Physics</p>
              </div>
            </div>

            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    item.active 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-6 border-t border-border">
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto bg-muted">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Welcome back, Ananya
              </h1>
              <p className="text-muted-foreground">
                Continue your structured preparation journey.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Lessons Completed", value: "24", icon: Play, change: "+3 this week" },
                { label: "Hours Learned", value: "18.5", icon: Clock, change: "+2.5 this week" },
                { label: "Current Streak", value: "7 days", icon: TrendingUp, change: "Keep going!" },
                { label: "Topics Mastered", value: "12", icon: Target, change: "+2 this week" },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon size={20} className="text-primary" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs">{stat.label}</p>
                  <p className="text-primary text-xs mt-2">{stat.change}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Continue Learning */}
              <div className="lg:col-span-2">
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-lg font-semibold text-foreground">
                      Continue Learning
                    </h2>
                    <button className="text-sm text-primary hover:underline">View all</button>
                  </div>

                  <div className="space-y-4">
                    {recentLessons.map((lesson, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted border border-border hover:border-primary/30 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Play size={20} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground text-sm truncate mb-1">
                            {lesson.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{lesson.course}</p>
                          <div className="mt-2 h-1.5 bg-border rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${lesson.progress}%` }}
                            />
                          </div>
                        </div>
                        <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Revision Schedule */}
              <div>
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-lg font-semibold text-foreground">
                      Upcoming Revisions
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {upcomingRevisions.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted border border-border">
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.topic}</p>
                          <p className="text-xs text-muted-foreground">{item.due}</p>
                        </div>
                        <button className="text-primary text-xs hover:underline">Start</button>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-4 py-3 rounded-lg border border-dashed border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                    View Full Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}