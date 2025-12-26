import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(168_64%_52%_/_0.08)_0%,transparent_70%)]" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Prepare{" "}
            <span className="gradient-text">Smarter</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join students who have chosen clarity over chaos. 
            Start your structured exam preparation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/courses">
              <Button variant="hero" size="xl">
                Explore Courses
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
