import React from 'react';
import { Shield, Users, HeartHandshake } from 'lucide-react';
import { LEADERSHIP_ROLES } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  const roleIcons = [
    <Shield className="w-5 h-5 text-bronze-700" />,
    <Users className="w-5 h-5 text-bronze-700" />,
    <HeartHandshake className="w-5 h-5 text-bronze-700" />,
  ];

  return (
    <section id="leadership" className="py-20 bg-canvas border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-bronze-700 mb-2">
            Section V &middot; Institutional Service & Pro-Bono Access
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-navy-950 tracking-tight">
            Leadership & Community Engagement
          </h2>
          <div className="w-16 h-0.5 bg-bronze-600 mt-3" />
          <p className="text-sm text-navy-600 mt-3 max-w-xl">
            Promoting access to justice, organizing academic legal symposia, and expanding legal awareness in underserved communities.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_ROLES.map((role, idx) => (
            <div
              key={role.id}
              className="bg-white rounded-xl border border-canvas-border p-6 shadow-card flex flex-col justify-between hover:border-navy-300 transition-all"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-canvas-muted border border-canvas-border flex items-center justify-center flex-shrink-0">
                    {roleIcons[idx % roleIcons.length]}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-navy-500 block">
                      {role.period}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-navy-950 leading-tight">
                      {role.position}
                    </h3>
                  </div>
                </div>

                {/* Organization and Institution */}
                <div className="mb-4 pb-3 border-b border-canvas-border">
                  <p className="text-xs font-bold text-bronze-700 uppercase tracking-wide">
                    {role.organization}
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">
                    {role.institution}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 text-xs text-navy-700 leading-relaxed">
                  {role.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze-600 flex-shrink-0 mt-1.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-3 border-t border-canvas-border flex items-center justify-between text-[11px] text-navy-500">
                <span className="font-medium text-navy-700">Institutional Service</span>
                <span className="font-mono text-emerald-700 font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
