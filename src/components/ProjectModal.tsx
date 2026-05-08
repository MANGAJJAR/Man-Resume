import React, { useEffect } from 'react';
import { FiX, FiCode, FiExternalLink } from 'react-icons/fi';

interface Project {
  name: string;
  description: string;
  features?: string[];
  tech: string[];
  link: string;
  source?: string;
  image?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-navy border border-navy-lightest rounded-2xl shadow-2xl flex flex-col">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate hover:text-teal transition-colors"
          aria-label="Close modal"
        >
          <FiX size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side: Title and Description */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-lightest mb-4 tracking-tight">
              {project.name}
            </h2>
            <p className="text-base text-slate leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Right Side: Features and Tech Stack */}
          <div className="p-6 md:p-10 bg-navy">
            <div className="bg-navy-light rounded-2xl p-6 md:p-8 border border-navy-lightest flex flex-col h-full">
              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-slate-light mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-light text-sm">
                        <span className="mr-3 text-teal mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-10">
                <h3 className="text-xs font-bold tracking-widest uppercase text-slate-light mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-teal/10 border border-teal/20 rounded-full text-xs font-medium text-teal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-6 flex flex-wrap gap-4">
                {project.source && (
                  project.source === 'coming_soon' ? (
                    <button
                      disabled
                      className="flex-1 inline-flex justify-center items-center gap-2 bg-navy-light/50 text-slate/50 px-6 py-3 rounded-full text-sm font-semibold border border-navy-light cursor-not-allowed"
                    >
                      <FiCode size={16} />
                      Source (Soon)
                    </button>
                  ) : (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 bg-teal text-navy px-6 py-3 rounded-full text-sm font-semibold hover:bg-teal/90 transition-colors"
                    >
                      <FiCode size={16} />
                      Source
                    </a>
                  )
                )}
                {project.link && (
                  project.link === 'coming_soon' ? (
                    <button
                      disabled
                      className="flex-1 inline-flex justify-center items-center gap-2 bg-navy-light/50 text-slate/50 px-6 py-3 rounded-full text-sm font-semibold border border-navy-light cursor-not-allowed"
                    >
                      <FiExternalLink size={16} />
                      Live (Soon)
                    </button>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 bg-navy-lightest text-slate-lightest px-6 py-3 rounded-full text-sm font-semibold hover:text-teal transition-colors border border-navy-lightest hover:border-teal"
                    >
                      <FiExternalLink size={16} />
                      Live
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
