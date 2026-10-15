import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, ArrowUpRight, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Research', href: '#research' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'achievements', 'research', 'leadership', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-canvas-border shadow-subtle py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Typographic Wordmark */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-bronze-500 rounded p-1 -m-1"
            aria-label="Mohd Ahsan Siddiqui - Home"
          >
            <span className="font-serif tracking-widest-wordmark text-sm sm:text-base font-semibold text-navy-950 uppercase group-hover:text-bronze-700 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-navy-500 uppercase -mt-0.5">
              B.Sc. (Data Science) LL.B. &middot; NLU Meghalaya
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-150 relative py-1 focus:outline-none focus:ring-2 focus:ring-bronze-500 rounded ${
                    isActive
                      ? 'text-navy-950 font-bold'
                      : 'text-navy-600 hover:text-navy-950'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* View/Preview CV button */}
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-navy-800 bg-canvas-muted hover:bg-canvas-border/80 border border-canvas-border rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-bronze-500"
              title="Preview CV Document"
            >
              <Eye className="w-3.5 h-3.5 text-navy-600" />
              <span>Preview CV</span>
            </button>

            {/* Direct Download CV Link */}
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              download="Mohd_Ahsan_Siddiqui_CV.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-navy-950 hover:bg-navy-800 rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-bronze-500"
            >
              <FileDown className="w-3.5 h-3.5 text-bronze-300" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenCvModal}
              className="p-1.5 text-navy-700 bg-canvas-muted border border-canvas-border rounded-md text-xs font-semibold flex items-center space-x-1"
              aria-label="View CV"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="text-[11px]">CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-navy-800 hover:text-navy-950 hover:bg-canvas-muted border border-canvas-border focus:outline-none focus:ring-2 focus:ring-bronze-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-canvas border-b border-canvas-border shadow-elevation animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-navy-800 hover:text-navy-950 hover:bg-canvas-muted"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-3 border-t border-canvas-border flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-xs font-semibold text-navy-900 bg-canvas-muted border border-canvas-border rounded-md"
              >
                <Eye className="w-4 h-4 text-navy-700" />
                <span>View Full CV Document</span>
              </button>
              <a
                href={PERSONAL_INFO.cvDownloadPath}
                download="Mohd_Ahsan_Siddiqui_CV.pdf"
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-xs font-semibold text-white bg-navy-950 hover:bg-navy-900 rounded-md"
              >
                <FileDown className="w-4 h-4 text-bronze-300" />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-1.5 text-xs font-medium text-navy-600 hover:text-navy-900 py-1"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
