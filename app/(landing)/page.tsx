import type { NextPage } from "next";
import Hero from "./_components/hero";
import ProblemSolution from "./_components/problem-solution";
import Features from "./_components/features";
import HowItWorks from "./_components/how-it-works";

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
