export enum Section {
  PROJECTS = "PROJECTS",
  EXPERIENCE = "EXPERIENCE",
  ABOUT = "ABOUT",
  BLOG = "BLOG",
}

export type SectionProps = {
  section: Section;
};

export type ProjectShortInfo = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  details: string[];
};
