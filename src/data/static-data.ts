import { ExperienceItem, ProjectShortInfo } from "@/types/common";

export const EXPERIENCE_INFO: ExperienceItem[] = [
  {
    title: "Full-stack Developer",
    company: "Regie.ai",
    startDate: "2022-10-01",
    details: ["To be filled..."],
  },
  {
    title: "Software Developer",
    company: "PetroGM",
    startDate: "2020-08-01",
    endDate: "2022-10-01",
    details: [
      "Designed geological visualization software architecture",
      "Developed C# application for 3D geological models visualization",
      "Wrote hlsl shaders for certain kinds of model visualization (surfaces, isolines, well-logs)",
      "Implemented a number of algorithms for reading, writing and converting models between data formats",
      "Implemented and optimized algorithms for geometry editing and analysis",
      "10x Grid octree generation speedup (compared to straightforward approach)",
      "Implemented parallel algorithms",
      "Rewriting and optimizing C++ code (old library code)",
      "Created WinForms interface (actually more of a debug interface)",
    ],
  },
];

export const PROJECTS_INFO: ProjectShortInfo[] = [
  {
    title: "📈 Trading agent",
    description: "Using LLM to decide actions on crypto market",
  },
  {
    title: "📃 Obisidian MD to PDF converter",
    description: "Convert obsidian MD doc to PDF with respect to custom theme",
  },
  {
    title: "🏏 Nvidia config manager",
    description: "Automate presets management for Nvidia control panel",
  },
  {
    title: "🎨 Personal website",
    description: "Small web app built with Next.js and Chakra UI",
  },
  {
    title: "🎮 Escape From Tarkov radar",
    description:
      "C# app that tracks in-game location of you and your and teamates",
  },
  {
    title: "🌤️ Weather NSU app ",
    description:
      "Mini weather app with widget using local weather data from weather.nsu.ru",
  },
  {
    title: "⚡ Voxel raytracing engine (again?)",
    description:
      "Realtime GPU/CPU voxel raytracer supporting magica voxel models",
  },
  {
    title: "🕹️ Realtime voxel raytracer",
    description: "Realtime GPU voxel raytracing engine",
  },
  {
    title: "⚙️ Mixer 3D",
    description: "3D engine with raytracing written in C++ and OpenGL",
  },
  {
    title: "🛠️ Simple 3D engine",
    description:
      "Simple 3D engine made from scratch built only with SDL in C++",
  },
];
