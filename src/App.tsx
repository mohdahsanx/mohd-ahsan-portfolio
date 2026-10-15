import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilityStrip } from './components/CredibilityStrip';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Research } from './components/Research';
import { Leadership } from './components/Leadership';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { initGA } from './utils/analytics';

export const App: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-navy-900 selection:bg-bronze-100 selection:text-navy-950 flex flex-col font-sans">
      {/* Top Sticky Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {/* Section 0: Hero */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Credibility Strip */}
        <CredibilityStrip />

        {/* Section 1: About Me & Education */}
        <About />

        {/* Section 2: Experience & Internships */}
        <Experience />

        {/* Section 3: Achievements & Moot Court Competitions */}
        <Achievements />

        {/* Section 4: Research Projects & Academic Appointments */}
        <Research />

        {/* Section 5: Leadership & Community Engagement */}
        <Leadership />

        {/* Section 6: Technical Skills & Legal Research */}
        <Skills />

        {/* Section 7: Contact Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* In-Browser Interactive CV Document Viewer Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
};

export default App;
