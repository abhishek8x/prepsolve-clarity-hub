import { Link } from "react-router-dom";
import { Youtube, Send, Mail } from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Courses", href: "/courses" },
    { name: "Methodology", href: "/methodology" },
    { name: "Resources", href: "/resources" },
    { name: "Dashboard", href: "/dashboard" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  resources: [
    { name: "Study Notes", href: "/resources" },
    { name: "Practice Questions", href: "/resources" },
    { name: "Revision Guides", href: "/resources" },
    { name: "Free Content", href: "/courses" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-display font-semibold text-xl text-foreground">
                PrepSolve
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Structured exam preparation for students who value clarity over confusion. 
              Study smart, not just hard.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://youtube.com/@prepsolve"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://t.me/prepsolve"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Send size={20} />
              </a>
              <a
                href="mailto:abhishek@prepsolve.com"
                className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PrepSolve. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with focus for students who want clarity.
          </p>
        </div>
      </div>
    </footer>
  );
}
