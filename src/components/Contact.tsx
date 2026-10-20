import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, Sparkles, Phone, Eye, EyeOff } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('Recruitment & Internship');
  const [customSubject, setCustomSubject] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw || "+919580630047");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const mailtoHref = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    customSubject || `Inquiry: ${inquiryType} - Mohd Ahsan Siddiqui`
  )}&body=${encodeURIComponent(
    customMessage || `Dear Ahsan,\n\nI reviewed your portfolio and would like to connect regarding ${inquiryType.toLowerCase()}.\n\nBest regards,\n[Your Name / Organization]`
  )}`;

  return (
    <section id="contact" className="py-20 bg-canvas border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-bronze-700 mb-2">
            Section VII &middot; Direct Channels
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-navy-950 tracking-tight">
            Contact & Collaboration
          </h2>
          <div className="w-16 h-0.5 bg-bronze-600 mt-3" />
          <p className="text-sm text-navy-600 mt-3 max-w-xl">
            Available for law firm internships, academic research inquiries, legal tech initiatives, and professional networking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card with Copy Button */}
            <div className="bg-white rounded-xl border border-canvas-border p-6 shadow-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-bronze-700">
                  Institutional Email
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Direct Response
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-base sm:text-lg font-mono font-medium text-navy-950 break-all">
                  {PERSONAL_INFO.email}
                </p>
                <p className="text-xs text-navy-500">
                  National Law University of Meghalaya student address
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-md text-xs font-semibold text-white bg-navy-950 hover:bg-navy-800 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-bronze-300" />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-md text-xs font-semibold text-navy-800 bg-canvas-muted hover:bg-canvas-border/80 border border-canvas-border transition-colors"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-navy-600" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white rounded-xl border border-canvas-border p-6 shadow-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-bronze-700">
                  Professional Network
                </span>
                <span className="text-[11px] text-navy-500 font-mono">
                  Active
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-base font-semibold text-navy-950">
                  LinkedIn Profile
                </p>
                <p className="text-xs text-navy-500">
                  linkedin.com/in/mohd-ahsan-682949223
                </p>
              </div>

              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-md text-xs font-semibold text-navy-900 bg-white hover:bg-canvas-muted border border-canvas-border transition-colors shadow-subtle"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                <span>Open LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-navy-400" />
              </a>
            </div>

            {/* Direct Telephone / WhatsApp (Click-to-reveal protected against scrapers) */}
            <div className="bg-white rounded-xl border border-canvas-border p-6 shadow-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-bronze-700">
                  Telephone & WhatsApp
                </span>
                <span className="text-[11px] text-navy-500 font-mono">
                  {isPhoneRevealed ? "Verified Contact" : "Protected"}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-navy-500">
                  Direct telephone contact for recruitment and professional verifications:
                </p>

                {/* Click to reveal interactive card */}
                <button
                  type="button"
                  onClick={() => setIsPhoneRevealed(!isPhoneRevealed)}
                  className="w-full text-left p-3.5 rounded-lg bg-canvas-muted hover:bg-canvas-border/60 border border-canvas-border transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-bronze-500"
                  aria-expanded={isPhoneRevealed}
                  title={isPhoneRevealed ? "Click to conceal phone number" : "Click to reveal phone number"}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-md border border-canvas-border text-bronze-700">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`font-mono text-base font-bold text-navy-950 transition-all select-all tracking-wider ${
                        isPhoneRevealed ? 'filter-none' : 'blur-sm select-none'
                      }`}>
                        +91 95806 30047
                      </p>
                      <p className="text-[11px] text-navy-500">
                        {isPhoneRevealed ? "Click to conceal" : "Click to unblur & display"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-xs font-semibold text-bronze-700 group-hover:text-bronze-800">
                    {isPhoneRevealed ? (
                      <>
                        <EyeOff className="w-4 h-4 text-navy-500" />
                        <span className="text-[11px] text-navy-500">Hide</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        <span className="text-[11px]">Reveal</span>
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* Action buttons revealed on click */}
              {isPhoneRevealed && (
                <div className="pt-1 grid grid-cols-3 gap-2 animate-in fade-in duration-150">
                  <a
                    href="tel:+919580630047"
                    className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-md text-xs font-semibold text-white bg-navy-950 hover:bg-navy-800 transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-bronze-300" />
                    <span>Call</span>
                  </a>

                  <a
                    href="https://wa.me/919580630047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-xs font-semibold text-navy-800 bg-canvas-muted hover:bg-canvas-border border border-canvas-border transition-colors"
                    title="Copy phone number to clipboard"
                  >
                    {phoneCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-navy-600" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Quick Email Composer / Mailto Helper */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-canvas-border p-7 shadow-card space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-canvas-border">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy-950">
                    Draft a Direct Note
                  </h3>
                  <p className="text-xs text-navy-500 mt-0.5">
                    Prepares a formatted draft that launches directly into your preferred email client.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-bronze-600" />
              </div>

              {/* Inquiry Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                  Nature of Inquiry
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Recruitment & Internship', 'Research Collaboration', 'General Networking'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`px-3 py-2 text-xs font-medium rounded-md border text-left transition-all ${
                        inquiryType === type
                          ? 'border-navy-950 bg-navy-950 text-white shadow-sm'
                          : 'border-canvas-border bg-canvas-muted/50 text-navy-700 hover:bg-canvas-muted hover:text-navy-950'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                  Subject Line
                </label>
                <input
                  type="text"
                  value={customSubject}
                  onChange={(e) => setCustomSubject(e.target.value)}
                  placeholder={`Inquiry: ${inquiryType} - Mohd Ahsan Siddiqui`}
                  className="w-full px-3.5 py-2.5 text-xs text-navy-900 bg-canvas-muted/40 border border-canvas-border rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze-500"
                />
              </div>

              {/* Message Note */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                  Message Overview
                </label>
                <textarea
                  rows={4}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder={`Dear Ahsan,\n\nI reviewed your portfolio and would like to discuss an opportunity regarding ${inquiryType.toLowerCase()}...\n\nBest regards,\n[Your Name / Firm]`}
                  className="w-full px-3.5 py-2.5 text-xs text-navy-900 bg-canvas-muted/40 border border-canvas-border rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze-500"
                />
              </div>

              {/* Launch Mail Button */}
              <a
                href={mailtoHref}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-md text-xs font-semibold text-white bg-navy-950 hover:bg-navy-800 transition-colors shadow-subtle"
              >
                <Send className="w-3.5 h-3.5 text-bronze-300" />
                <span>Open Pre-filled Email Draft</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
