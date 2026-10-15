import React from 'react';
import { ArrowUp, Mail, FileDown, ShieldCheck } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-canvas-border py-14 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-canvas-border">
          
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 space-y-3">
            <div className="space-y-1">
              <span className="font-serif tracking-widest-wordmark text-base font-bold text-navy-950 uppercase block">
                {PERSONAL_INFO.name}
              </span>
              <p className="text-xs text-navy-600 font-medium">
                B.Sc. (Data Science) LL.B. (Hons.) Candidate &middot; Class of 2029
              </p>
              <p className="text-xs text-bronze-700 font-medium">
                National Law University Meghalaya, India
              </p>
            </div>
            <p className="text-xs text-navy-500 max-w-sm leading-relaxed pt-1">
              Positioned at the intersection of intellectual property, technology policy, corporate governance, and AI-assisted legal research.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
              Site Sections
            </h4>
            <ul className="space-y-1.5 text-xs text-navy-600">
              <li>
                <a href="#about" className="hover:text-navy-950 transition-colors">About &amp; Education</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-navy-950 transition-colors">Internships &amp; Experience</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-navy-950 transition-colors">Achievements &amp; Moots</a>
              </li>
              <li>
                <a href="#research" className="hover:text-navy-950 transition-colors">Research Projects (IIT Guwahati)</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-navy-950 transition-colors">Leadership &amp; Legal Aid</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-navy-950 transition-colors">Technical Skills &amp; Research</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-navy-950 transition-colors">Contact Channels</a>
              </li>
            </ul>
          </div>

          {/* Professional Actions & Direct Document */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
              Document &amp; Inquiries
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenCvModal}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-canvas-muted hover:bg-canvas-border/80 border border-canvas-border text-xs text-navy-800 transition-colors text-left"
              >
                <span className="font-semibold">Interactive CV Viewer</span>
                <span className="text-[11px] text-bronze-700 font-mono">Modal View &rarr;</span>
              </button>

              <a
                href={PERSONAL_INFO.cvDownloadPath}
                download="Mohd_Ahsan_Siddiqui_CV.pdf"
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-navy-950 hover:bg-navy-800 text-xs text-white transition-colors"
              >
                <span className="font-semibold">Download CV (PDF)</span>
                <FileDown className="w-4 h-4 text-bronze-300" />
              </a>

              <div className="pt-2 flex items-center space-x-3 text-xs text-navy-600">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center space-x-1 hover:text-navy-950 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-bronze-600" />
                  <span>Email</span>
                </a>
                <span>&bull;</span>
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 hover:text-navy-950 transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Bar Council Norms & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-navy-500">
          <div className="space-y-1 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start space-x-1 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-navy-400" />
              <span>Academic &amp; Professional Portfolio &middot; Not an advertisement or solicitation under Bar Council of India rules.</span>
            </p>
            <p className="text-[11px]">
              &copy; {currentYear} {PERSONAL_INFO.name}. All verified CV details preserved.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-navy-700 hover:text-navy-950 bg-canvas-muted hover:bg-canvas-border transition-colors border border-canvas-border"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-bronze-600" />
          </button>
        </div>

      </div>
    </footer>
  );
};
