import { InternshipExperience, Achievement, ResearchProject, LeadershipRole, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Mohd Ahsan Siddiqui",
  title: "Third-year B.Sc. (Data Science) LL.B. Student",
  institution: "National Law University of Meghalaya",
  academicPeriod: "2024–2029",
  gpa: "8.25/10",
  gpaPeriod: "End of Sixth Trimester",
  school: "City Montessori School, Lucknow",
  schoolClass12: "89.5% (AISSCE)",
  schoolClass10: "83.2% (ICSE)",
  headline: "Law, Technology & the Future of Digital Business.",
  shortBio: "Third-year B.Sc. (Data Science) LL.B. student at National Law University of Meghalaya, exploring the intersection of law, technology, and business. I actively work on developing legal tech tools, with core interests spanning intellectual property, technology law, data privacy, corporate and commercial law, legal research, and AI-assisted development.",
  email: "ahsan@nlumeg.ac.in",
  phone: "+91 95806 30047",
  phoneRaw: "+919580630047",
  linkedInUrl: "https://www.linkedin.com/in/mohd-ahsan-682949223/",
  location: "Shillong, Meghalaya / New Delhi / Lucknow",
  cvDownloadPath: "/documents/mohd-ahsan-siddiqui-cv.pdf",
};

export const CREDIBILITY_ITEMS = [
  {
    label: "Education",
    value: "National Law University of Meghalaya",
    detail: "B.Sc. (Data Science) LL.B. (2024–2029)"
  },
  {
    label: "Academic Standing",
    value: "GPA 8.25 / 10",
    detail: "Top Tier (End of Sixth Trimester)"
  },
  {
    label: "Legislative Drafting",
    value: "2nd Position",
    detail: "4th GNLU Legislative Drafting Competition, 2025"
  },
  {
    label: "Advocacy & Research",
    value: "2nd Position Intra Moot",
    detail: "National Law University of Meghalaya"
  }
];

export const ABOUT_PARAGRAPHS = [
  "I am a third-year law student with an enduring curiosity for exploring the evolving frontiers of legal systems. While I am particularly drawn to Intellectual Property, Technology Law, Data Privacy, and Corporate Law, I believe that high-calibre legal thinking requires an interdisciplinary mindset that refuses to be confined to silos.",
  "Pursuing a dual B.Sc. (Data Science) LL.B. degree at National Law University of Meghalaya enables me to combine rigorous legal doctrine with quantitative fluency. I enjoy learning through hands-on legal research, deep institutional discourse, practical chamber and transactional internships, and thoughtful experimentation with modern AI-assisted workflows.",
  "For me, efficiency and adaptability go hand in hand with professional growth. Whether conducting due diligence for corporate restructurings, cross-border trademark clearance under the UK Trade Marks Act, auditing large-scale litigation dockets, or assisting ongoing research at IIT Guwahati, my focus remains constant: delivering thorough, principled work that bridges technology and the law."
];

export const INTERNSHIPS: InternshipExperience[] = [
  {
    id: "cms-induslaw-2027",
    organization: "CMS INDUSLAW",
    role: "Incoming Intern",
    location: "New Delhi",
    date: "February 2027",
    isIncoming: true,
    category: "corporate",
    categoryLabel: "Corporate & Tier-1 Practice",
    summary: "Selected for an upcoming corporate internship at one of India's preeminent full-service law firms.",
    responsibilities: [
      "Scheduled to join the firm's New Delhi office for an intensive corporate and commercial legal internship.",
      "Will support partners and associates in transactional advisory, statutory compliance, and corporate legal research."
    ],
    skills: ["Corporate Law", "Commercial Advisory", "Due Diligence", "Legal Research"]
  },
  {
    id: "remfry-sagar-2027",
    organization: "Remfry & Sagar",
    role: "Incoming Intern – Patents Department",
    location: "Gurugram / New Delhi NCR",
    date: "January 2027",
    isIncoming: true,
    category: "tech-ip",
    categoryLabel: "Patent Law & Prosecution",
    summary: "Selected for an upcoming internship with the Patents Department at Remfry & Sagar, one of India's premier full-service intellectual property law firms.",
    responsibilities: [
      "Scheduled to join the firm's Patents Department at Remfry House, focusing on patent prosecution, prior art searches, and patentability assessments.",
      "Will assist patent attorneys in patent analysis, claim interpretation, statutory requirements under the Indian Patents Act, and international PCT filing frameworks."
    ],
    skills: ["Patent Law", "Patent Prosecution", "Prior Art Searches", "Indian Patents Act", "PCT Procedures", "Patent Landscaping"]
  },
  {
    id: "solvlegal-2026",
    organization: "SolvLegal Law Offices LLP",
    role: "Legal Intern",
    location: "Lucknow",
    date: "June 2026",
    category: "corporate",
    categoryLabel: "Corporate & IP Transactions",
    summary: "Commercial contract drafting, corporate M&A due diligence, fast-track merger analysis, and international trademark clearance.",
    responsibilities: [
      "Drafted and reviewed key commercial agreements, including Non-Disclosure Agreements (NDAs), Employment Agreements, SaaS Agreements, and Share Subscription Agreements (SSAs).",
      "Assisted in corporate due diligence by verifying shareholding structures, capitalization tables, share certificates, and statutory corporate records.",
      "Conducted extensive legal research on the fast-track merger framework under Section 233 of the Companies Act, 2013, assessing its operational and procedural implications for holding-subsidiary mergers, startup restructurings, and reduced reliance on the NCLT.",
      "Conducted cross-border trademark clearance searches across five Nice Classes for a client's proposed international rebranding, evaluating opposition risks, trademark infringement, and passing-off exposure under the UK Trade Marks Act 1994."
    ],
    skills: ["Contract Drafting", "Companies Act 2013", "M&A Due Diligence", "UK Trade Marks Act 1994", "Nice Classification", "SaaS Agreements"]
  },
  {
    id: "erudite-legal-2026",
    organization: "Erudite Legal",
    role: "Legal Intern",
    location: "New Delhi",
    date: "February 2026",
    category: "litigation",
    categoryLabel: "Litigation & Dispute Resolution",
    summary: "Large-scale docket audit of 959 banking matters across Indian courts and statutory consumer dispute commissions.",
    responsibilities: [
      "Conducted case audits and status verification for 959 pending and disposed matters for an institutional banking client across District Courts, High Courts, and Consumer Disputes Redressal Commissions (District, State & National/NCDRC).",
      "Tracked procedural status, stages of proceedings, pendency, and judicial orders utilizing e-Courts services portals, High Court cause lists, and physical registry records to compile structured case-status audit sheets.",
      "Researched statutory provisions and authoritative precedents across consumer protection law, civil litigation, and financial recovery procedures.",
      "Assisted in drafting evidence affidavits, procedural applications, case summaries, and case briefs for counsel in active litigation."
    ],
    skills: ["e-Courts System", "Litigation Audit (959 Matters)", "Consumer Protection Act", "Affidavit Drafting", "Case Management"]
  },
  {
    id: "adv-manish-vaish-2026",
    organization: "Office of Adv. Manish Vaish",
    role: "Legal Intern",
    location: "Allahabad High Court, Lucknow Bench",
    date: "January 2026",
    category: "litigation",
    categoryLabel: "Appellate & Criminal Litigation",
    summary: "Constitutional Public Interest Litigation (PIL) research and criminal jurisprudence under the Bharatiya Nagarik Suraksha Sanhita (BNSS).",
    responsibilities: [
      "Assisted in a major Public Interest Litigation (PIL) filed before the High Court addressing mandatory safety and regulatory protocols for pre-primary school students.",
      "Conducted exhaustive case-law analysis and statutory interpretation in criminal matters concerning Section 528 BNSS (inherent powers for quashing of proceedings) and Section 359 BNSS (compounding of offences).",
      "Assisted in research, case indexing, and drafting of regular and anticipatory bail applications before the High Court and Sessions Courts."
    ],
    skills: ["Bharatiya Nagarik Suraksha Sanhita (BNSS)", "PIL Drafting", "Bail Applications", "High Court Practice", "Criminal Jurisprudence"]
  },
  {
    id: "tripify-2025",
    organization: "Tripify",
    role: "Technology and Legal Experience",
    location: "New Delhi (Hybrid)",
    date: "June 2025",
    category: "tech-ip",
    categoryLabel: "Tech Law & Data Governance",
    summary: "Multi-jurisdictional privacy compliance (DPDP Act, GDPR, CCPA) and international trademark protection under the Madrid Protocol.",
    responsibilities: [
      "Drafted and reviewed data protection documentation, customer-facing privacy policies, and internal compliance guidelines tailored to India's Digital Personal Data Protection Act (DPDP Act), the EU GDPR, and California CCPA.",
      "Supported intellectual property portfolio protection, including drafting proprietary Non-Disclosure Agreements and formulating cross-border trademark filing strategies under the WIPO Madrid System.",
      "Researched regulatory frameworks governing digital businesses, electronic contracting, cookie consent mechanisms, and cross-border data transfer requirements.",
      "Supported in-house legal operations through contract abstraction and compliance risk matrices for technology vendor partnerships."
    ],
    skills: ["DPDP Act 2023", "GDPR & CCPA", "Madrid Protocol (WIPO)", "Privacy Frameworks", "Commercial IP Advisory"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "gnlu-leg-drafting-2025",
    title: "Second Position (Runners-Up)",
    competition: "4th GNLU Legislative Drafting Competition, 2025",
    institution: "Gujarat National Law University (GNLU)",
    year: "2025",
    rank: "podium",
    rankLabel: "National 2nd Position",
    projectOrMatter: "The Whistleblower and Witness Protection Act, 2025",
    description: "Authored a complete model legislation drafted from first principles, formulating institutional protection mechanisms, identity shielding, anti-retaliation provisions, and procedural guidelines for sensitive whistleblowing in public and private institutions.",
    tags: ["Legislative Drafting", "Statutory Architecture", "Whistleblower Protection", "Institutional Governance"]
  },
  {
    id: "intra-moot-2026",
    title: "Second Position (Runners-Up)",
    competition: "2nd Intra Moot Court Competition, 2026",
    institution: "National Law University of Meghalaya",
    year: "2026",
    rank: "podium",
    rankLabel: "University 2nd Position",
    projectOrMatter: "Constitutional Law, Election Laws & Fundamental Rights",
    description: "Secured second place in the premier university moot court competition. Drafted comprehensive appellate memorials for both sides (Petitioners and Respondents) addressing complex constitutional and election law disputes centered on fundamental rights. Prepared exhaustive judicial compendiums and case law authorities, and actively prepared and briefed team oralists on argumentation strategy, statutory rebuttals, and bench queries.",
    tags: ["Both-Side Memorials (Petitioner & Respondent)", "Constitutional Law", "Election Laws", "Oralist Briefing & Strategy", "Judicial Compendiums", "Fundamental Rights"]
  },
  {
    id: "nuals-moot-2026",
    title: "Researcher",
    competition: "The NUALS Moot 2026 – Third Edition",
    institution: "NUALS Moot Court Society (National University of Advanced Legal Studies, Kochi)",
    year: "2026",
    rank: "participant",
    rankLabel: "National Moot Researcher",
    projectOrMatter: "International Taxation & Corporate Law — International Tax Treaty Protection & Anti-Avoidance Law in Kerenia",
    description: "Served as Researcher in The NUALS Moot 2026 – Third Edition, a national-level moot court competition organized by the NUALS Moot Court Society on international taxation and corporate law, focusing on international tax treaty protection and anti-avoidance law in the fictional jurisdiction of Kerenia.",
    tags: ["Researcher", "The NUALS Moot 2026", "International Taxation", "Corporate Law", "Tax Treaty Protection", "Anti-Avoidance Law", "Jurisdiction of Kerenia"]
  },
  {
    id: "ambedkar-moot-2026",
    title: "Participant & Competitor",
    competition: "2nd Dr. B.R. Ambedkar Memorial Moot Court Competition, 2026",
    institution: "University of Science & Technology Meghalaya (USTM)",
    year: "2026",
    rank: "participant",
    rankLabel: "National Moot Participant",
    projectOrMatter: "Constitutional & Fundamental Rights Advocacy",
    description: "Represented National Law University of Meghalaya in a competitive national-level moot court focused on constitutional law, administrative discretion, and fundamental rights jurisprudence.",
    tags: ["Constitutional Law", "Fundamental Rights", "Memorial Drafting", "National Moot"]
  }
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "clst-iit-guwahati",
    role: "Research Assistant",
    title: "Linguistic Science & Computational Law Research",
    institution: "Centre for Linguistic Science and Technology (CLST), IIT Guwahati",
    supervisor: "Dr. Sanasam Ranbir Singh",
    period: "July 2026–Present",
    status: "Ongoing",
    domain: "Computational Linguistics & Legal Informatics",
    description: "Collaborating on ongoing research exploring natural language structures, computational linguistics, and text processing methodologies under the guidance of Dr. Sanasam Ranbir Singh. This research examines how formal linguistic and computational frameworks can be applied to statutory language and legal analysis.",
    themes: [
      "Natural Language Processing for Legal Texts",
      "Computational Linguistic Analysis",
      "Statutory Interpretation Models",
      "Legal Corpus Informatics"
    ],
    publicationStatus: "Ongoing research study in progress. Formal outputs and papers will be archived here upon peer review."
  },
  {
    id: "one-nation-one-election",
    role: "Research Assistant",
    title: "Constitutional Dimensions of Simultaneous Elections",
    institution: "Independent Academic Research Project",
    supervisor: "Darren Tham",
    period: "July 2026–Present",
    status: "Ongoing",
    domain: "Constitutional Law & Electoral Reform",
    description: "Providing specialized research assistance on constitutional, statutory, and comparative legal facets of the 'One Nation, One Election' legislative proposals in India. The study examines constitutional amendments, federal structures, Representation of the People Act provisions, and logistical-legal precedents.",
    themes: [
      "Constitutional Amendment Architecture",
      "Federalism & State Autonomy",
      "Representation of the People Act 1951",
      "Comparative Electoral Systems"
    ],
    publicationStatus: "Ongoing research assistance. Working papers and briefing memorandums in preparation."
  }
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    id: "legal-aid-vp",
    position: "Vice President",
    organization: "Legal Aid Society",
    institution: "National Law University of Meghalaya",
    period: "August 2025–July 2026",
    highlights: [
      "Organized and coordinated an academic seminar on 'Domestic Violence in a Matrimonial Context', directing speaker outreach, institutional protocols, and participant engagement.",
      "Spearheaded grassroots legal awareness initiatives, including POSH (Prevention of Sexual Harassment) and POCSO (Protection of Children from Sexual Offences) educational workshops across institutions.",
      "Contributed to clinics providing pro-bono basic legal literacy, procedural guidance, and documentation support to marginalized local communities."
    ]
  },
  {
    id: "moot-outreach-cohead",
    position: "Outreach Relations Co-head",
    organization: "Moot Court Society",
    institution: "National Law University of Meghalaya",
    period: "August 2024–July 2025",
    highlights: [
      "Directed inter-institutional communication, competition outreach, and promotional campaigns for university mooting events.",
      "Collaborated on event budgeting, institutional sponsorship drives, and judge panel coordination with practicing advocates and academics."
    ]
  },
  {
    id: "idia-core-committee",
    position: "Core Committee Member",
    organization: "IDIA (Increasing Diversity by Increasing Access) — Meghalaya Chapter",
    institution: "IDIA Chapter, National Law University of Meghalaya",
    period: "July 2026–Present",
    highlights: [
      "Coordinating systematic outreach to secondary schools and marginalized communities across the state to identify prospective law students from underrepresented backgrounds.",
      "Conducting sensitization sessions on legal education careers, constitutional rights, and preparatory mentoring for national law entrance examinations."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Legal Research Platforms",
    description: "Proficient across leading Indian judicial databases and digital court management infrastructure.",
    skills: [
      "SCC Online",
      "AIR Online",
      "Manupatra",
      "e-Courts Services Portal",
      "High Court & Supreme Court Registries",
      "Statutory Cross-Referencing"
    ]
  },
  {
    title: "Technology & Engineering",
    description: "Computational foundations from B.Sc. Data Science applied to legal workflows and modern software.",
    skills: [
      "Python (Data Analysis Basics)",
      "AI-Assisted Web Development",
      "Autonomous AI Agents & Workflows",
      "Workflow Automation (n8n / scripts)",
      "RESTful API Integration",
      "Data Cleansing & Extraction"
    ]
  },
  {
    title: "Core Areas of Interest",
    description: "Substantive and procedural focus areas across corporate advisory, IP strategy, and technology law.",
    skills: [
      "Intellectual Property Law (Copyright & Trademarks)",
      "Technology Law & Data Privacy (DPDP, GDPR)",
      "Corporate & Commercial Law (Companies Act 2013)",
      "Fast-Track Mergers & Corporate Restructuring",
      "Legislative Drafting & Statutory Analysis",
      "Litigation Docket Auditing"
    ]
  }
];
