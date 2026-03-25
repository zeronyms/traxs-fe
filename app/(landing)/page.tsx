import type { NextPage } from "next";
import Hero from "../../components/landing/hero";
import ProblemSolution from "../../components/landing/problem-solution";
import Features from "../../components/landing/features";
import HowItWorks from "../../components/landing/how-it-works";

const IndexPage: NextPage = () => {
  return (
    <main className="container mx-auto px-6">
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default IndexPage;
