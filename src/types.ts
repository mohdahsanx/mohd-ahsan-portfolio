export interface InternshipExperience {
  id: string;
  organization: string;
  role: string;
  location: string;
  date: string;
  isIncoming?: boolean;
  category: 'corporate' | 'litigation' | 'tech-ip';
  categoryLabel: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  competition: string;
  institution: string;
  year: string;
  rank: 'podium' | 'participant';
  rankLabel: string;
  description: string;
  projectOrMatter?: string;
  tags: string[];
}

export interface ResearchProject {
  id: string;
  role: string;
  title: string;
  institution: string;
  supervisor: string;
  period: string;
  status: 'Ongoing' | 'Completed';
  domain: string;
  description: string;
  themes: string[];
  publicationStatus?: string;
}

export interface LeadershipRole {
  id: string;
  position: string;
  organization: string;
  institution: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}
