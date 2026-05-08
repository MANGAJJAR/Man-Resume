"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data';
import { FiArrowUpRight } from 'react-icons/fi';
import ProjectModal from '../ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {portfolioData.projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-900/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <button
                      className="inline-flex items-baseline font-medium leading-tight text-slate-lightest hover:text-teal focus-visible:text-teal group/link text-base text-left"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.name}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>
                      <span>
                        {project.name}
                        <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </span>
                    </button>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Image Placeholder or actual image */}
                <div className="z-10 sm:order-1 sm:col-span-2 rounded border-2 border-slate/10 transition group-hover:border-slate/30 sm:mt-1 overflow-hidden relative aspect-video">
                   <Image 
                     src={project.image} 
                     alt={project.name} 
                     fill
                     className="object-cover bg-navy-lightest" 
                   />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-lightest group/link text-base border-b border-transparent hover:border-teal hover:text-teal transition-all"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Full Resume"
          >
            <span>
              View Full Resume
              <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
            </span>
          </a>
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
