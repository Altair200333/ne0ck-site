import { Section } from "@/types/common";

export const SECTION_LABEL: Record<Section, string> = {
  [Section.About]: "About",
  [Section.Experience]: "Experience",
  [Section.Projects]: "Projects",
  [Section.Blog]: "Blog",
};

export const SECTIONS = Object.values(Section);

export const MOBILE_BREAKPOINT_PX = 800;
