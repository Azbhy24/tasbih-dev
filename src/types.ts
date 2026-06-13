export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  focus: string;
  details: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: "organization" | "business" | "technology";
  responsibilities: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  solution: string;
  techStack: string[];
  results: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
  featuredSymbol?: string;
}

export interface SkillCategory {
  name: string;
  level: "expert" | "advanced" | "proficient";
  items: string[];
}

export interface SkillGroup {
  category: "Manajemen" | "Bisnis" | "Teknologi" | "Artificial Intelligence" | "Penelitian";
  description: string;
  skills: string[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  icon: string;
}

export interface VisionInfo {
  statement: string;
  milestones: {
    year: string;
    target: string;
    description: string;
  }[];
  quote: string;
  quoteAuthor: string;
}

export interface PortfolioData {
  bio: {
    fullName: string;
    aliases: string[];
    headlineTitle: string;
    subheadline: string[];
    professionalBio: string;
    extendedBio: string;
    avatarUrl?: string;
    tagline: string;
  };
  stats: StatItem[];
  education: Education;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  vision: VisionInfo;
  socials: SocialLink[];
}
