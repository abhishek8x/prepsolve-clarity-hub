import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-display font-bold text-primary">404</span>
        </div>
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button variant="hero" size="lg">
              <Home size={18} />
              Go Home
            </Button>
          </Link>
          <Button variant="hero-outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft size={18} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
