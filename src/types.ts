export interface BioData {
  fullName: string;
  aliases: string[];
  roleTitle: string;
  kicker: string;
  headline: string;
  subheadline: string;
  positioning: string;
  educationSummary: string;
  location: string;
  aboutBrief: string;
  aboutHighlights: {
    label: string;
    value: string;
    iconName?: string;
  }[];
  aboutPillars: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    badge: string;
  }[];
}

export interface EducationHighlight {
  title: string;
  year: string;
  desc: string;
  type: string;
}

export interface EducationData {
  institution: string;
  degree: string;
  faculty: string;
  period: string;
  status: string;
  location: string;
  gpaSummary?: string;
  keyCourses: string[];
  highlights: EducationHighlight[];
}

export interface ExperienceData {
  id: string;
  year: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  featured?: boolean;
  problem: string;
  whatIBuilt: string;
  keyFeatures: string[];
  techStack: string[];
  liveDemo: string;
  github: string;
  symbol: string;
  accentColor: string;
}

export interface SkillCategoryData {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    note?: string;
  }[];
}

export interface CurrentlyData {
  status: string;
  careerFocus: string;
  activeBuilding: string;
  location: string;
}

export interface SocialLinkData {
  platform: string;
  url: string;
  label: string;
  username?: string;
}

export interface PortfolioData {
  bio: BioData;
  education: EducationData;
  experience: ExperienceData[];
  projects: ProjectData[];
  skills: SkillCategoryData[];
  currently: CurrentlyData;
  socials: SocialLinkData[];
}
