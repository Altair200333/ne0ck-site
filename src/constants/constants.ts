import { Section } from "@/types/common";

export const SECTION_LABEL: Record<Section, string> = {
  [Section.ABOUT]: "About",
  [Section.EXPERIENCE]: "Experience",
  [Section.PROJECTS]: "Projects",
  [Section.BLOG]: "Blog",
};

export const SECTIONS = Object.values(Section);
