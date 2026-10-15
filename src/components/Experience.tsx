import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Clock, 
  Filter,
  Search,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { INTERNSHIPS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'corporate' | 'litigation' | 'tech-ip'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['solvlegal-2026']));

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(INTERNSHIPS.map(i => i.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const isAllExpanded = expandedIds.size === INTERNSHIPS.length;

  const filteredInternships = useMemo(() => {
    return INTERNSHIPS.filter(item => {
      // Category filter
      if (activeFilter !== 'all' && item.category !== activeFilter) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inOrg = item.organization.toLowerCase().includes(q);
        const inRole = item.role.toLowerCase().includes(q);
        const inSummary = item.summary.toLowerCase().includes(q);
        const inResp = item.responsibilities.some(r => r.toLowerCase().includes(q));
        const inSkills = item.skills.some(s => s.toLowerCase().includes(q));
        return inOrg || inRole || inSummary || inResp || inSkills;
      }
      return true;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="experience" className="py-20 bg-canvas-muted/40 border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-bronze-700 mb-2">
              Section II &middot; Legal Chambers & Firm Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-navy-950 tracking-tight">
              Internships & Professional Experience
            </h2>
            <div className="w-16 h-0.5 bg-bronze-600 mt-3" />
            <p className="text-sm text-navy-600 mt-3 max-w-xl">
              Practical legal training across corporate transactions, multi-jurisdictional IP, large-scale docket audits, and appellate litigation.
            </p>
          </div>

          {/* Interactive Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Quick Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-navy-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search practice areas, statutes, skills..."
                className="pl-8 pr-7 py-1.5 text-xs text-navy-900 bg-white border border-canvas-border rounded-lg shadow-subtle focus:outline-none focus:ring-2 focus:ring-bronze-500 w-full sm:w-64"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-700 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Expand / Collapse All Toggle */}
            <button
              onClick={isAllExpanded ? collapseAll : expandAll}
              className="inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-navy-700 bg-white border border-canvas-border hover:bg-canvas-muted transition-colors shadow-subtle"
              title={isAllExpanded ? "Collapse all role cards" : "Expand all role cards"}
            >
              {isAllExpanded ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-bronze-600" />
                  <span>Collapse All</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-bronze-600" />
                  <span>Expand All Details</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 p-1.5 bg-white border border-canvas-border rounded-lg shadow-subtle w-fit">
          <span className="text-[11px] font-semibold text-navy-500 uppercase px-2 flex items-center gap-1">
            <Filter className="w-3 h-3 text-bronze-600" />
            Category:
          </span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-navy-950 text-white shadow-sm'
                : 'text-navy-700 hover:text-navy-950 hover:bg-canvas-muted'
            }`}
          >
            All Roles ({INTERNSHIPS.length})
          </button>
          <button
            onClick={() => setActiveFilter('corporate')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeFilter === 'corporate'
                ? 'bg-navy-950 text-white shadow-sm'
                : 'text-navy-700 hover:text-navy-950 hover:bg-canvas-muted'
            }`}
          >
            Corporate & M&A
          </button>
          <button
            onClick={() => setActiveFilter('litigation')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeFilter === 'litigation'
                ? 'bg-navy-950 text-white shadow-sm'
                : 'text-navy-700 hover:text-navy-950 hover:bg-canvas-muted'
            }`}
          >
            Litigation & Courts
          </button>
          <button
            onClick={() => setActiveFilter('tech-ip')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeFilter === 'tech-ip'
                ? 'bg-navy-950 text-white shadow-sm'
                : 'text-navy-700 hover:text-navy-950 hover:bg-canvas-muted'
            }`}
          >
            Tech & IP Law
          </button>
        </div>

        {/* Empty state when search yields no matches */}
        {filteredInternships.length === 0 && (
          <div className="p-10 bg-white rounded-xl border border-canvas-border text-center max-w-lg mx-auto shadow-subtle space-y-3">
            <Search className="w-6 h-6 text-navy-400 mx-auto" />
            <h3 className="font-serif text-lg font-semibold text-navy-950">
              No matching experiences found
            </h3>
            <p className="text-xs text-navy-600">
              No roles match “{searchQuery}”. Try clearing the search or switching filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-3.5 py-1.5 rounded-md text-xs font-semibold text-navy-900 bg-canvas-muted hover:bg-canvas-border transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Vertical Timeline / Editorial Experience List */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-canvas-border before:hidden sm:before:block">
          {filteredInternships.map((item) => {
            const isExpanded = expandedIds.has(item.id);
            const isIncoming = item.isIncoming;

            return (
              <div
                key={item.id}
                className="relative sm:pl-14 transition-all"
              >
                {/* Timeline Node Dot */}
                <div
                  className={`hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-5 h-5 rounded-full items-center justify-center border-2 ${
                    isIncoming
                      ? 'bg-bronze-100 border-bronze-600 text-bronze-800 ring-4 ring-bronze-50'
                      : 'bg-white border-navy-900 text-navy-900'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isIncoming ? 'bg-bronze-700 animate-ping' : 'bg-navy-800'}`} />
                </div>

                {/* Card Container */}
                <div
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                    isIncoming
                      ? 'border-bronze-300 shadow-card bg-gradient-to-r from-white via-white to-bronze-50/20'
                      : 'border-canvas-border hover:border-navy-300 shadow-subtle hover:shadow-card'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-6 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {isIncoming ? (
                          <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-bronze-100 text-bronze-800 border border-bronze-300">
                            <Clock className="w-3 h-3 text-bronze-700" />
                            <span>Incoming Internship</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold text-navy-700 bg-canvas-muted border border-canvas-border">
                            {item.categoryLabel}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy-950">
                          {item.organization}
                        </h3>
                        <span className="text-sm font-medium text-bronze-700">
                          &mdash; {item.role}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-navy-600 font-normal">
                        {item.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4 flex-shrink-0">
                      <div className="text-left md:text-right text-xs text-navy-600 space-y-1">
                        <div className="flex items-center md:justify-end space-x-1.5 font-semibold text-navy-900">
                          <Calendar className="w-3.5 h-3.5 text-bronze-600" />
                          <span>{item.date}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center md:justify-end space-x-1 text-navy-500">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        className="p-1.5 rounded-md hover:bg-canvas-muted text-navy-500 hover:text-navy-950 transition-colors"
                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Content Area */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-canvas-border/70 space-y-4 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-2.5">
                          Key Work & Substantive Contributions
                        </h4>
                        <ul className="space-y-2.5">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-navy-700 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-bronze-600 flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technical and Legal Keywords */}
                      <div className="pt-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-400 mb-2">
                          Competencies & Jurisprudential Focus
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded bg-canvas-muted text-navy-800 text-xs font-medium border border-canvas-border/80"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Clarifying Disclaimer Note as per instruction */}
        <div className="mt-12 p-4 bg-white rounded-lg border border-canvas-border text-center max-w-2xl mx-auto shadow-subtle">
          <p className="text-xs text-navy-600 leading-normal">
            <span className="font-semibold text-navy-900">Professional Note:</span> All internship experiences listed reflect student internships and legal research clerkships undertaken during LL.B. studies. Mohd Ahsan Siddiqui has not been enrolled as an advocate under the Advocates Act, 1961.
          </p>
        </div>

      </div>
    </section>
  );
};
