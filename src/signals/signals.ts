import { Section } from "@/types/common";
import { signal } from "@preact/signals-react";

export const currentSection = signal(Section.PROJECTS);
