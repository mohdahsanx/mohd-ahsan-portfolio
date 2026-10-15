import React, { useEffect } from 'react';
import { X, FileDown, Printer, ExternalLink, ShieldCheck, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-xl shadow-modal border border-canvas-border flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="px-5 py-4 bg-canvas-muted border-b border-canvas-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-navy-950 flex items-center justify-center text-canvas font-serif font-bold text-sm">
              AS
            </div>
            <div>
              <h3 id="cv-modal-title" className="text-sm font-semibold text-navy-950">
                Curriculum Vitae &middot; Mohd Ahsan Siddiqui
              </h3>
              <p className="text-[11px] text-navy-600">
                B.Sc. (Data Science) LL.B. &middot; National Law University Meghalaya
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Print action */}
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-navy-700 bg-white border border-canvas-border hover:bg-canvas-muted transition-colors"
              title="Print CV Document"
            >
              <Printer className="w-3.5 h-3.5 text-navy-600" />
              <span>Print</span>
            </button>

            {/* Direct Open in New Tab */}
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-navy-700 bg-white border border-canvas-border hover:bg-canvas-muted transition-colors"
              title="Open raw PDF file"
            >
              <ExternalLink className="w-3.5 h-3.5 text-navy-600" />
              <span>Open PDF</span>
            </a>

            {/* Direct Download Button */}
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              download="Mohd_Ahsan_Siddiqui_CV.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold text-white bg-navy-950 hover:bg-navy-800 transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-bronze-300" />
              <span>Download PDF</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-navy-500 hover:text-navy-950 hover:bg-canvas-border transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable CV Document View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-canvas-muted/40 font-sans">
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg border border-canvas-border shadow-card p-6 sm:p-10 space-y-6 text-navy-900 print-page">
            
            {/* Document Header */}
            <div className="text-center pb-5 border-b border-canvas-border space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 tracking-wide uppercase">
                MOHD AHSAN SIDDIQUI
              </h1>
              <p className="text-xs sm:text-sm text-navy-700 font-mono">
                [+91-95806 30047] &nbsp;|&nbsp; 
                <a href={PERSONAL_INFO.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-navy-900 hover:text-bronze-700 font-semibold underline underline-offset-2 ml-1">
                  LinkedIn
                </a>
                &nbsp;|&nbsp; 
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-navy-900 hover:text-bronze-700 font-semibold underline underline-offset-2 ml-1">
                  {PERSONAL_INFO.email}
                </a>
              </p>
            </div>

            {/* EDUCATION */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy-950 border-b border-navy-300 pb-1">
                EDUCATION
              </h2>
              
              <div className="space-y-2 pt-1 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; National Law University of Meghalaya</span>
                    <span className="font-mono text-navy-600">(2024–2029)</span>
                  </div>
                  <ul className="pl-5 space-y-0.5 text-navy-700 list-disc text-xs mt-1">
                    <li>Third-year B.Sc (Data Science) LL.B</li>
                    <li>GPA: 8.25/10 (End of Sixth Trimester)</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; City Montessori School, Lucknow</span>
                    <span className="font-mono text-navy-600"></span>
                  </div>
                  <ul className="pl-5 space-y-0.5 text-navy-700 list-disc text-xs mt-1">
                    <li>All India Senior School Certificate Examination (Class 12) &ndash; 89.5%</li>
                    <li>India Certificate of Secondary Education (Class 10) &ndash; 83.2%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* INTERNSHIPS */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy-950 border-b border-navy-300 pb-1">
                INTERNSHIPS
              </h2>

              <div className="space-y-4 pt-1 text-xs sm:text-sm">
                
                {/* CMS INDUSLAW */}
                <div>
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; Incoming Intern, CMS INDUSLAW, Delhi</span>
                    <span className="font-mono text-navy-600">(February 2027)</span>
                  </div>
                </div>

                {/* SolvLegal */}
                <div>
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; SolvLegal Law Offices LLP, Lucknow</span>
                    <span className="font-mono text-navy-600">(June 2026)</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-navy-700 list-disc text-xs mt-1 leading-relaxed">
                    <li>Assisted in drafting and reviewing commercial agreements, including Non-Disclosure Agreements, Employment Agreements, SaaS Agreements, and Share Subscription Agreements.</li>
                    <li>Assisted in corporate due diligence by verifying shareholding structures, share certificates, and other corporate records.</li>
                    <li>Researched on fast-track merger framework under the Companies Act, 2013, assessing its implications for holding company subsidiary mergers, startup restructurings, and reduced NCLT dependency.</li>
                    <li>Assisted with cross-border trademark clearance search across five Nice Classes for a client’s proposed rebranding, assessing opposition, infringement, and passing off risk under the UK Trade Marks Act 1994.</li>
                  </ul>
                </div>

                {/* Erudite Legal */}
                <div>
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; Erudite Legal, Delhi</span>
                    <span className="font-mono text-navy-600">(February 2026)</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-navy-700 list-disc text-xs mt-1 leading-relaxed">
                    <li>Conducted case audit and status verification for 959 matters for a banking client across District Courts, High Courts, and District, State &amp; National Consumer Disputes Redressal Commissions.</li>
                    <li>Tracked procedural status, pendency, and outcomes using e-Courts portals and court records, and prepared structured case-status summaries.</li>
                    <li>Researched case laws for consumer protection, civil, and criminal matters to support ongoing litigation.</li>
                    <li>Assisted with drafting evidence affidavits, case summaries, and procedural documents for ongoing litigation.</li>
                  </ul>
                </div>

                {/* Adv. Manish Vaish */}
                <div>
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; Adv. Manish Vaish, Allahabad High Court, Lucknow</span>
                    <span className="font-mono text-navy-600">(January 2026)</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-navy-700 list-disc text-xs mt-1 leading-relaxed">
                    <li>Assisted in a Public Interest Litigation relating to safety measures for pre-primary school students.</li>
                    <li>Conducted legal research and case law analysis in criminal matters involving Section 528 BNSS (quashing of proceedings) and Section 359 BNSS (compounding of offences).</li>
                    <li>Assisted in the research and drafting of bail applications.</li>
                  </ul>
                </div>

                {/* Tripify */}
                <div>
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; Tripify, Delhi</span>
                    <span className="font-mono text-navy-600">(June 2025)</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-navy-700 list-disc text-xs mt-1 leading-relaxed">
                    <li>Assisted in drafting and reviewing data protection and compliance documentation, including privacy policies and internal frameworks under the DPDP Act, GDPR, and CCPA.</li>
                    <li>Assisted with intellectual property protection, including drafting Non-Disclosure Agreements and supporting trademark filing and strategy under the Madrid Protocol.</li>
                    <li>Researched on technology and data protection regulatory compliance relevant to digital business operations.</li>
                    <li>Reviewed commercial contracts and supported the in-house legal function with compliance-related research.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* PARTICIPATION AND ACHIEVEMENTS */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy-950 border-b border-navy-300 pb-1">
                PARTICIPATION AND ACHIEVEMENTS
              </h2>
              <ul className="pl-5 space-y-1.5 text-navy-800 list-disc text-xs leading-relaxed pt-1">
                <li>
                  <strong>Secured 2nd Position</strong> in the <strong>2nd Intra Moot Court Competition, 2026</strong>, National Law University of Meghalaya.
                </li>
                <li>
                  <strong>Secured 2nd Position</strong> in the <strong>4th GNLU LEGISLATIVE DRAFTING Competition, 2025</strong>, <em>The Whistleblower and Witness Protection Act, 2025</em>.
                </li>
                <li>
                  <strong>Participated</strong> in the <strong>2nd Dr. B.R. Ambedkar Memorial Moot Court Competition, 2026</strong>, University of Science &amp; Technology Meghalaya (USTM).
                </li>
              </ul>
            </div>

            {/* PROJECTS */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy-950 border-b border-navy-300 pb-1">
                PROJECTS
              </h2>
              <ul className="pl-5 space-y-1.5 text-navy-800 list-disc text-xs leading-relaxed pt-1">
                <li className="flex justify-between items-start">
                  <span>
                    <strong>Research Assistant for an ongoing research project</strong> under the supervision of Dr Sanasam Ranbir Singh, Centre for Linguistic Science and Technology (CLST), IIT Guwahati.
                  </span>
                  <span className="font-mono text-navy-600 text-[11px] ml-2 flex-shrink-0">(July 2026–Present)</span>
                </li>
                <li className="flex justify-between items-start">
                  <span>
                    <strong>Research Assistant to Darren Tham</strong> for an ongoing “One Nation, One Election” research project.
                  </span>
                  <span className="font-mono text-navy-600 text-[11px] ml-2 flex-shrink-0">(July 2026–Present)</span>
                </li>
              </ul>
            </div>

            {/* LEADERSHIP */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy-950 border-b border-navy-300 pb-1">
                LEADERSHIP
              </h2>
              
              <div className="space-y-3 pt-1 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; Vice President, Legal Aid Society; National Law University Meghalaya</span>
                    <span className="font-mono text-navy-600">(August 2025–July 2026)</span>
                  </div>
                  <ul className="pl-5 space-y-0.5 text-navy-700 list-disc mt-1">
                    <li>Organised and coordinated an academic seminar on <em>Domestic Violence in a Matrimonial Context</em>, including speaker coordination, logistics, and institutional outreach.</li>
                    <li>Led legal awareness initiatives, including POSH &amp; POCSO awareness programmes and workshops, providing basic legal assistance to marginalised communities.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; Outreach Relations Co-head, Moot Court Society</span>
                    <span className="font-mono text-navy-600">(August 2024–July 2025)</span>
                  </div>
                  <ul className="pl-5 space-y-0.5 text-navy-700 list-disc mt-1">
                    <li>Coordinated event outreach, fundraising initiatives, and promotional activities.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-navy-950">
                    <span>&bull; Core Committee Member, IDIA &ndash; Meghalaya Chapter</span>
                    <span className="font-mono text-navy-600">(July 2026–Present)</span>
                  </div>
                  <ul className="pl-5 space-y-0.5 text-navy-700 list-disc mt-1">
                    <li>Coordinated outreach to local schools to promote legal education and awareness initiatives.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SKILLS */}
            <div className="space-y-2 pb-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy-950 border-b border-navy-300 pb-1">
                SKILLS
              </h2>
              <ul className="pl-5 space-y-1 text-navy-800 list-disc text-xs leading-relaxed pt-1">
                <li><strong>Legal Research:</strong> SCC Online, AIR Online, Manupatra, e-Courts</li>
                <li><strong>Technical Skills:</strong> Python (Basic), AI-assisted Web Development, AI Agents, Workflow Automation, API Integration</li>
                <li><strong>Areas of Interest:</strong> Intellectual Property, Technology Law &amp; Data Privacy, Corporate &amp; Commercial Law</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 bg-canvas-muted border-t border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-600">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official academic transcript and verification references available upon request.</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-md text-xs font-medium text-navy-700 hover:bg-canvas-border transition-colors"
            >
              Close Window
            </button>
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              download="Mohd_Ahsan_Siddiqui_CV.pdf"
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-md text-xs font-semibold text-white bg-navy-950 hover:bg-navy-800 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-bronze-300" />
              <span>Download PDF File</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
