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

export enum ProjectId {
  OpenVibrance = "open-vibrance",
  TradingAgent = "trading-agent",
  ObisidianMdToPdfConverter = "obisidian-md-to-pdf-converter",
  NvidiaConfigManager = "nvidia-config-manager",
  PersonalWebsite = "personal-website",
  EscapeFromTarkovRadar = "escape-from-tarkov-radar",
  WeatherNsuApp = "weather-nsu-app",
  VoxelRaytracingEngine = "voxel-raytracing-engine",
  VoxelRaytracingEngineDemo = "voxel-raytracing-engine-demo",
  Mixer3d = "mixer-3d",
  Simple3dEngine = "simple-3d-engine",
}

export const PROJECTS_INFO: ProjectShortInfo[] = [
  {
    id: ProjectId.OpenVibrance,
    title: "🎙️✏️ Open Vibrance",
    description: "Minimalistic desktop overlay dictation app",
  },
  {
    id: ProjectId.TradingAgent,
    title: "📈 Trading agent",
    description: "Using LLM to decide actions on crypto market",
  },
  {
    id: ProjectId.ObisidianMdToPdfConverter,
    title: "📃 Obisidian MD to PDF converter",
    description: "Convert obsidian MD doc to PDF with respect to custom theme",
  },
  {
    id: ProjectId.NvidiaConfigManager,
    title: "🏏 Nvidia config manager",
    description: "Automate presets management for Nvidia control panel",
  },

  {
    id: ProjectId.EscapeFromTarkovRadar,
    title: "🎮 Escape From Tarkov radar",
    description:
      "C# app that tracks in-game location of you and your and teamates",
  },
  {
    id: ProjectId.WeatherNsuApp,
    title: "🌤️ Weather NSU app ",
    description:
      "Mini weather app with widget using local weather data from weather.nsu.ru",
  },
  {
    id: ProjectId.VoxelRaytracingEngine,
    title: "⚡ Voxel raytracing engine (again?)",
    description:
      "Realtime GPU/CPU voxel raytracer supporting magica voxel models",
  },
  {
    id: ProjectId.VoxelRaytracingEngineDemo,
    title: "🕹️ Realtime voxel raytracer",
    description: "Realtime GPU voxel raytracing engine",
  },
  {
    id: ProjectId.Mixer3d,
    title: "⚙️ Mixer 3D",
    description: "3D engine with raytracing written in C++ and OpenGL",
  },
  {
    id: ProjectId.Simple3dEngine,
    title: "🛠️ Simple 3D engine",
    description:
      "Simple 3D engine made from scratch built only with SDL in C++",
  },
  {
    id: ProjectId.PersonalWebsite,
    title: "🎨 Personal website",
    description: "Small web app built with Next.js and Chakra UI",
  },
];
