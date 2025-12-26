import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { Features } from "@/components/home/Features";
import { FounderSection } from "@/components/home/FounderSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <FounderSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
