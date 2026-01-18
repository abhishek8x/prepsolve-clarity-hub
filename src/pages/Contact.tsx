import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Youtube, MessageCircle, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries and support",
    value: "hello@prepsolve.com",
    action: "mailto:teamprepsolve@gmail.com",
  },
  {
    icon: Send,
    title: "Telegram Community",
    description: "Join our student community",
    value: "t.me/prepsolve",
    action: "https://t.me/prepsolve",
  },
  {
    icon: Youtube,
    title: "YouTube Channel",
    description: "Free content and updates",
    value: "youtube.com/@prepsolve",
    action: "https://youtube.com/@prepsolve",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
              Contact
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions about PrepSolve? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Connect With Us
                </h2>
                <p className="text-muted-foreground mb-8">
                  Choose the channel that works best for you.
                </p>
              </div>

              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <method.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      {method.description}
                    </p>
                    <p className="text-primary text-sm">{method.value}</p>
                  </div>
                </a>
              ))}

              {/* Response time */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border">
                <Clock size={20} className="text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24-48 hours
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input 
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="bg-white border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-white border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      type="text"
                      placeholder="What is this about?"
                      required
                      className="bg-white border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your question or feedback..."
                      required
                      rows={5}
                      className="bg-white border-border resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container-narrow text-center">
          <MessageCircle size={32} className="text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Common Questions
          </h2>
          <p className="text-muted-foreground mb-6">
            Looking for quick answers? Check our frequently asked questions.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              { q: "Is PrepSolve free?", a: "We offer both free and premium content." },
              { q: "Which exams do you cover?", a: "Boards, NEET, and select competitive exams." },
              { q: "Can I access content offline?", a: "Premium users can download resources." },
              { q: "How is this different from coaching?", a: "We focus on self-study with structure." },
            ].map((faq, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted border border-border">
                <p className="font-medium text-foreground text-sm mb-1">{faq.q}</p>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}