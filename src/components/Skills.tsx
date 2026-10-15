import React from 'react';
import { Database, Code2, Scale, Terminal, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const categoryIcons = [
    <Database className="w-5 h-5 text-bronze-700" />,
    <Code2 className="w-5 h-5 text-bronze-700" />,
    <Scale className="w-5 h-5 text-bronze-700" />,
  ];

  return (
    <section id="skills" className="py-20 bg-canvas-muted/40 border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-bronze-700 mb-2">
            Section VI &middot; Technical & Jurisprudential Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-navy-950 tracking-tight">
            Technical Skills & Legal Research
          </h2>
          <div className="w-16 h-0.5 bg-bronze-600 mt-3" />
          <p className="text-sm text-navy-600 mt-3 max-w-xl">
            A cohesive skill architecture where data science concepts, automated research tools, and traditional legal databases mutually reinforce each other.
          </p>
        </div>

        {/* Categories Grid (No arbitrary percentage bars!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl border border-canvas-border p-6 shadow-card flex flex-col justify-between hover:border-navy-300 transition-all"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-canvas-muted border border-canvas-border flex items-center justify-center flex-shrink-0">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-bronze-700 uppercase tracking-wider">
                      Domain 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-navy-950 leading-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-navy-600 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-canvas-muted/60 border border-canvas-border/80 text-xs text-navy-800"
                    >
                      <span className="font-medium">{skill}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-bronze-600 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtext */}
              <div className="mt-6 pt-3 border-t border-canvas-border flex items-center justify-between text-[11px] text-navy-500">
                <span>Practical Competency</span>
                <span className="font-mono text-navy-700">Verified by Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Callout */}
        <div className="mt-12 bg-white rounded-xl border border-canvas-border p-6 shadow-subtle max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-navy-950 flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-bronze-700" />
              <span>Computational Data Science & Legal Analytics</span>
            </h4>
            <p className="text-xs text-navy-600 max-w-2xl leading-relaxed">
              Trained at National Law University Meghalaya to apply quantitative methodologies, data structuring, and computational models to legal problems, statutory interpretation, and commercial due diligence.
            </p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded bg-bronze-50 text-bronze-800 border border-bronze-200 whitespace-nowrap">
            B.Sc. (DS) LL.B.
          </span>
        </div>

      </div>
    </section>
  );
};
