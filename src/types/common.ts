import React from "react";

export enum Section {
  About = "about",
  Projects = "projects",
  Experience = "experience",
  Blog = "blog",
}

export type SectionProps = {
  section: Section;
};

export type ProjectShortInfo = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  details: string[];
};
