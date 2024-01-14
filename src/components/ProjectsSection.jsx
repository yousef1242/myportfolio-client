import React from "react";
import ProjectsCards from './ProjectsCards'

export default function ProjectsSection() {
  return (
    <section className="projects-section py-20">
      <div className="container mx-auto h-full px-2">
        <h1 className="text-slate-900 text-5xl mb-[100px] font-bold text-center md:text-7xl">
          Projects
        </h1>
        <div className="projects-section-cads">
            <ProjectsCards/>
        </div>
      </div>
    </section>
  );
}
