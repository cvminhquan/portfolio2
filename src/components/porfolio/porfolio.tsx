"use client";

import { projects } from "@/mockup/common";
import { SectionHeader } from "../section-header";
import { PortfolioCard } from "./_components/portfolio-card/portfolio-card";
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div>
        <SectionHeader title="Portfolio" subTitle="Featured Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
