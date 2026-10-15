import React from 'react';
import { GraduationCap, Award, Compass, Sparkles, Building, MapPin } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_PARAGRAPHS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-canvas border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-bronze-700 mb-2">
            Section I &middot; Profile & Academic Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-navy-950 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-bronze-600 mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none text-navy-800 space-y-5 text-base sm:text-lg leading-relaxed font-sans">
              {ABOUT_PARAGRAPHS.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "font-serif text-lg sm:text-xl text-navy-950 leading-relaxed italic border-l-2 border-bronze-600 pl-4 py-1" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Philosophy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-lg border border-canvas-border shadow-subtle">
                <div className="flex items-center space-x-2 text-navy-900 font-semibold text-sm mb-1.5">
                  <Compass className="w-4 h-4 text-bronze-600" />
                  <span>Curiosity & Adaptability</span>
                </div>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Refusing to be siloed into rigid domains; actively synthesizing insights across corporate law, technical frameworks, and litigation procedure.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-canvas-border shadow-subtle">
                <div className="flex items-center space-x-2 text-navy-900 font-semibold text-sm mb-1.5">
                  <Sparkles className="w-4 h-4 text-bronze-600" />
                  <span>AI & Technological Efficiency</span>
                </div>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Leveraging modern AI tooling, computational workflows, and rapid knowledge synthesis to simplify complex analysis and elevate work product quality.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Academic Credentials Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-canvas-border p-6 shadow-card">
              <div className="flex items-center space-x-2.5 pb-4 border-b border-canvas-border">
                <GraduationCap className="w-5 h-5 text-bronze-600" />
                <h3 className="font-serif text-lg font-semibold text-navy-950">
                  Education & Academic History
                </h3>
              </div>

              {/* University Level */}
              <div className="py-5 border-b border-canvas-border/80 space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-sm text-navy-950">
                    National Law University of Meghalaya
                  </h4>
                  <span className="text-xs font-mono font-medium text-navy-500 bg-canvas-muted px-2 py-0.5 rounded">
                    2024–2029
                  </span>
                </div>
                <p className="text-xs font-medium text-bronze-700">
                  Third-year B.Sc. (Data Science) LL.B.
                </p>
                <div className="flex items-center space-x-1.5 text-xs text-navy-600">
                  <MapPin className="w-3.5 h-3.5 text-navy-400" />
                  <span>Shillong, Meghalaya, India</span>
                </div>
                
                <div className="mt-3 p-3 bg-canvas-muted rounded-md border border-canvas-border/60">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-navy-700 font-medium">Cumulative GPA:</span>
                    <span className="font-mono font-bold text-navy-950">{PERSONAL_INFO.gpa}</span>
                  </div>
                  <p className="text-[11px] text-navy-500 mt-0.5">
                    End of Sixth Trimester (Reflecting academic consistency across both quantitative and legal subjects)
                  </p>
                </div>
              </div>

              {/* School Level */}
              <div className="pt-4 space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-sm text-navy-950">
                    City Montessori School, Lucknow
                  </h4>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-navy-600">
                  <Building className="w-3.5 h-3.5 text-navy-400" />
                  <span>Lucknow, Uttar Pradesh</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-2.5 bg-canvas-muted rounded-md border border-canvas-border/60">
                    <span className="text-[10px] uppercase font-bold text-navy-500 block">Class 12 (AISSCE)</span>
                    <span className="text-sm font-bold font-mono text-navy-950 mt-0.5 block">{PERSONAL_INFO.schoolClass12}</span>
                  </div>
                  <div className="p-2.5 bg-canvas-muted rounded-md border border-canvas-border/60">
                    <span className="text-[10px] uppercase font-bold text-navy-500 block">Class 10 (ICSE)</span>
                    <span className="text-sm font-bold font-mono text-navy-950 mt-0.5 block">{PERSONAL_INFO.schoolClass10}</span>
                  </div>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="mt-5 pt-4 border-t border-canvas-border">
                <div className="flex items-center space-x-2 text-xs font-semibold text-navy-800 mb-2">
                  <Award className="w-3.5 h-3.5 text-bronze-600" />
                  <span>Dual Degree Integration</span>
                </div>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Integrating quantitative data science (statistical modeling, algorithms, empirical analysis) with core common-law jurisprudence and commercial statutory frameworks.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
