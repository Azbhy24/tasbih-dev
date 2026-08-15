export interface BioData {
  fullName: string;
  aliases: string[];
  kicker: string;
  headline: string;
  subheadline: string;
  positioning: string;
  educationSummary: string;
  aboutBrief: string;
  aboutPillars: {
    title: string;
    description: string;
  }[];
}

export interface EducationHighlight {
  title: string;
  year: string;
  desc: string;
}

export interface EducationData {
  institution: string;
  degree: string;
  period: string;
  highlights: EducationHighlight[];
}

export interface ExperienceData {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  whatIBuilt: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  symbol: string;
}

export interface SkillCategoryData {
  category: string;
  skills: string[];
}

export interface SocialLinkData {
  platform: string;
  url: string;
  label: string;
}

export interface PortfolioData {
  bio: BioData;
  education: EducationData;
  experience: ExperienceData[];
  projects: ProjectData[];
  skills: SkillCategoryData[];
  currently: string;
  socials: SocialLinkData[];
}
