import React from 'react';
import { Award, GraduationCap, Building2, Scale } from 'lucide-react';
import { CREDIBILITY_ITEMS } from '../data/portfolioData';

export const CredibilityStrip: React.FC = () => {
  const icons = [
    <GraduationCap className="w-5 h-5 text-bronze-600 flex-shrink-0" />,
    <Scale className="w-5 h-5 text-bronze-600 flex-shrink-0" />,
    <Award className="w-5 h-5 text-bronze-600 flex-shrink-0" />,
    <Building2 className="w-5 h-5 text-bronze-600 flex-shrink-0" />,
  ];

  return (
    <div className="w-full bg-white border-y border-canvas-border shadow-subtle py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-canvas-border">
          {CREDIBILITY_ITEMS.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-start space-x-3.5 ${
                index !== 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <div className="p-2 bg-canvas-muted rounded-md border border-canvas-border/80">
                {icons[index % icons.length]}
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-bronze-700">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-navy-950 mt-0.5">
                  {item.value}
                </p>
                <p className="text-xs text-navy-600 mt-0.5 leading-snug">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
