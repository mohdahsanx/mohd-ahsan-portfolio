import React from 'react';
import { UserCheck, Calendar, Layers, Clock } from 'lucide-react';
import { RESEARCH_PROJECTS } from '../data/portfolioData';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-canvas-muted/40 border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-bronze-700 mb-2">
            Section IV &middot; Academic Inquiries & Research Appointments
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-navy-950 tracking-tight">
            Research & Academic Projects
          </h2>
          <div className="w-16 h-0.5 bg-bronze-600 mt-3" />
          <p className="text-sm text-navy-600 mt-3 max-w-xl">
            Active faculty research appointments investigating the intersections of computational linguistics, statutory syntax, and constitutional electoral governance.
          </p>
        </div>

        {/* Research Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESEARCH_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-canvas-border p-7 shadow-card flex flex-col justify-between hover:border-navy-300 transition-all"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-canvas-border">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>{project.status} Research</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-navy-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-navy-400" />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* Title & Role */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-bronze-700 block mb-1">
                    {project.role}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-navy-950 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-navy-600 mt-1">
                    {project.institution}
                  </p>
                </div>

                {/* Supervisor Bar */}
                <div className="flex items-center space-x-2 text-xs py-2 px-3 bg-canvas-muted rounded-md border border-canvas-border/70">
                  <UserCheck className="w-4 h-4 text-bronze-700 flex-shrink-0" />
                  <span className="text-navy-700 font-medium">Supervisor / Lead:</span>
                  <span className="font-semibold text-navy-950">{project.supervisor}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Research Themes */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-500 mb-2 flex items-center space-x-1">
                    <Layers className="w-3.5 h-3.5 text-navy-400" />
                    <span>Methodological Themes & Focus Areas</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.themes.map((theme, tIdx) => (
                      <div
                        key={tIdx}
                        className="text-xs text-navy-700 bg-canvas-muted/80 px-2.5 py-1.5 rounded border border-canvas-border/60 flex items-center space-x-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-bronze-600 flex-shrink-0" />
                        <span className="truncate">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Publications & Outputs Status Box */}
              <div className="mt-6 pt-4 border-t border-canvas-border">
                <div className="p-3 bg-canvas-muted/50 rounded-lg border border-dashed border-canvas-border text-xs text-navy-600 flex items-start space-x-2">
                  <Clock className="w-4 h-4 text-navy-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-navy-800 block">Deliverables & Publications</span>
                    <p className="text-[11px] text-navy-500 mt-0.5 leading-snug">
                      {project.publicationStatus}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
