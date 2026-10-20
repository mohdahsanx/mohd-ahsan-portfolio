import React from 'react';
import { ArrowDown, FileDown, Mail, ArrowUpRight, ShieldCheck, Binary, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0F233A_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            
            {/* Status & Institutional Tag */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-canvas-muted border border-canvas-border shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-semibold text-navy-800 tracking-wide uppercase">
                {PERSONAL_INFO.institution} &middot; Class of 2029
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-navy-950 leading-[1.12]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-navy-700 leading-snug">
                “{PERSONAL_INFO.headline}”
              </p>
            </div>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-navy-700 max-w-2xl font-normal leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Primary & Secondary Calls to Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#experience"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-md text-sm font-semibold text-white bg-navy-950 hover:bg-navy-800 transition-all shadow-subtle hover:shadow focus:outline-none focus:ring-2 focus:ring-bronze-500 focus:ring-offset-2"
              >
                <span>View My Experience</span>
                <ArrowDown className="w-4 h-4 text-bronze-300" />
              </a>

              <a
                href={PERSONAL_INFO.cvDownloadPath}
                download="Mohd_Ahsan_Siddiqui_CV.pdf"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-md text-sm font-semibold text-navy-900 bg-white hover:bg-canvas-muted border border-canvas-border transition-all shadow-subtle focus:outline-none focus:ring-2 focus:ring-bronze-500"
              >
                <FileDown className="w-4 h-4 text-bronze-600" />
                <span>Download CV</span>
                <span className="text-[10px] uppercase font-bold text-navy-500 bg-canvas-muted px-1.5 py-0.5 rounded border border-canvas-border ml-1">PDF</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center space-x-1.5 px-4 py-3.5 rounded-md text-sm font-medium text-navy-700 hover:text-navy-950 hover:bg-canvas-muted transition-colors"
                title="Quick preview in browser"
              >
                <span>Preview CV Document</span>
              </button>
            </div>

            {/* Quick Contact & Verified Links */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-navy-600 border-t border-canvas-border/80 pt-4 max-w-xl">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center space-x-1.5 hover:text-navy-950 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-bronze-600" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-canvas-border">&bull;</span>
              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-navy-950 transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-bronze-600" />
              </a>
              <span className="text-canvas-border">&bull;</span>
              <span className="text-navy-500">GPA: {PERSONAL_INFO.gpa}</span>
            </div>

          </div>

          {/* Abstract Editorial Visual Treatment (No fake AI photo!) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-xl border border-canvas-border p-6 shadow-card relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-bronze-50 border border-bronze-200 flex items-center justify-center">
                <span className="text-xs font-serif font-bold text-bronze-700">§</span>
              </div>

              {/* Monogram Seal */}
              <div className="flex items-center space-x-4 pb-5 border-b border-canvas-border">
                <div className="w-14 h-14 rounded-lg bg-navy-950 flex items-center justify-center border border-bronze-500/40 shadow-inner flex-shrink-0">
                  <span className="font-serif text-xl font-bold tracking-wider text-canvas">
                    AS
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-950 leading-tight">
                    Mohd Ahsan Siddiqui
                  </h3>
                  <p className="text-xs text-bronze-700 font-medium mt-0.5">
                    Candidate for B.Sc. (Data Science) LL.B.
                  </p>
                  <p className="text-[11px] text-navy-500">
                    National Law University of Meghalaya
                  </p>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="py-4 space-y-3.5 text-xs">
                <div className="flex items-start space-x-3">
                  <div className="p-1.5 bg-canvas-muted rounded text-navy-700 mt-0.5">
                    <Binary className="w-4 h-4 text-navy-700" />
                  </div>
                  <div>
                    <span className="font-semibold text-navy-900 block">Data Science & Law</span>
                    <span className="text-navy-600 text-[11px]">Quantitative rigor applied to legal analytics and technology policy.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-1.5 bg-canvas-muted rounded text-navy-700 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-bronze-700" />
                  </div>
                  <div>
                    <span className="font-semibold text-navy-900 block">IP, Technology Law & Privacy</span>
                    <span className="text-navy-600 text-[11px]">DPDP, GDPR, Madrid Protocol, and cross-border trademark clearance.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-1.5 bg-canvas-muted rounded text-navy-700 mt-0.5">
                    <BookOpen className="w-4 h-4 text-navy-700" />
                  </div>
                  <div>
                    <span className="font-semibold text-navy-900 block">Legislative & Corporate Rigor</span>
                    <span className="text-navy-600 text-[11px]">GNLU Legislative Drafting runners-up; M&A due diligence; BNSS & PIL.</span>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="pt-4 border-t border-canvas-border flex items-center justify-between text-[11px] text-navy-600">
                <span className="font-medium text-navy-800">Academic Standing</span>
                <span className="font-mono font-semibold px-2 py-0.5 rounded bg-bronze-50 text-bronze-800 border border-bronze-200">
                  GPA: 8.25/10
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
