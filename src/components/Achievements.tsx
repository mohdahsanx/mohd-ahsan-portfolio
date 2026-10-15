import React from 'react';
import { Trophy, ScrollText, Scale } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const podiumFinishes = ACHIEVEMENTS.filter(a => a.rank === 'podium');
  const participation = ACHIEVEMENTS.filter(a => a.rank === 'participant');

  return (
    <section id="achievements" className="py-20 bg-canvas border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-bronze-700 mb-2">
            Section III &middot; Competitions & Honors
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-navy-950 tracking-tight">
            Achievements & Competitions
          </h2>
          <div className="w-16 h-0.5 bg-bronze-600 mt-3" />
          <p className="text-sm text-navy-600 mt-3 max-w-xl">
            Demonstrated excellence in statutory legislative drafting, appellate moot court oral advocacy, and national dispute simulations.
          </p>
        </div>

        {/* Prominent Podium Placements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {podiumFinishes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-bronze-200/90 p-7 shadow-card relative overflow-hidden flex flex-col justify-between hover:border-bronze-400 transition-colors"
            >
              {/* Subtle heritage corner badge */}
              <div className="absolute top-0 right-0 bg-bronze-50 border-b border-l border-bronze-200 px-3.5 py-1 text-[11px] font-bold text-bronze-800 uppercase tracking-wider rounded-bl-lg">
                Runners-Up &middot; 2nd Place
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-bronze-100/70 border border-bronze-300 flex items-center justify-center text-bronze-800">
                    <Trophy className="w-5 h-5 text-bronze-700" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-bronze-800">
                      {item.year} &middot; {item.rankLabel}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy-950 leading-snug">
                      {item.competition}
                    </h3>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-medium text-navy-500 uppercase tracking-wide">
                    Host Institution
                  </p>
                  <p className="text-sm font-semibold text-navy-800">
                    {item.institution}
                  </p>
                </div>

                {item.projectOrMatter && (
                  <div className="p-3 bg-canvas-muted rounded-lg border border-canvas-border/80 mb-4">
                    <div className="flex items-center space-x-1.5 text-xs font-semibold text-navy-900 mb-1">
                      <ScrollText className="w-3.5 h-3.5 text-bronze-700" />
                      <span>Drafting Bill / Focus:</span>
                    </div>
                    <p className="text-xs font-serif italic text-navy-800">
                      “{item.projectOrMatter}”
                    </p>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-canvas-border flex flex-wrap gap-1.5">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-canvas-muted text-[11px] font-medium text-navy-800 border border-canvas-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* National Participation & Competitor Entry */}
        <div className="bg-white rounded-xl border border-canvas-border p-6 shadow-subtle">
          <div className="flex items-center justify-between pb-3 border-b border-canvas-border mb-4">
            <div className="flex items-center space-x-2">
              <Scale className="w-4 h-4 text-navy-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-700">
                National Moot Court Participation
              </h3>
            </div>
            <span className="text-xs font-medium text-navy-500 bg-canvas-muted px-2.5 py-0.5 rounded">
              Verified Competitor
            </span>
          </div>

          {participation.map(item => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-8 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400" />
                  <h4 className="text-sm font-semibold text-navy-950">
                    {item.competition}
                  </h4>
                  <span className="text-xs font-mono text-navy-500">({item.year})</span>
                </div>
                <p className="text-xs text-bronze-700 font-medium pl-3.5">
                  Host: {item.institution}
                </p>
                <p className="text-xs text-navy-600 pl-3.5 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="md:col-span-4 flex md:justify-end flex-wrap gap-1.5 pl-3.5 md:pl-0">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-canvas-muted text-[11px] font-medium text-navy-600 border border-canvas-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
