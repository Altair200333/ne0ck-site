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
      "Implemented a novel approach to perform real-time interactive volumetric seismic 3D visualization using GPU ray-marching",
      "Developed and optimized a high-performance 3D geological modeling software suite using C# and SharpDX, reducing loading time for large data sets and enabling real-time processing of large datasets (20+GB)",
      "Implemented and optimized algorithms and data structures for creating, editing, and analyzing 3D geological models (BVHs, graphs, binary search, etc.), achieving real-time performance for numerous operations",
      "Designed the architecture of the visualization module, developing data structures and algorithms for 3D geological model analysis",
      "Migrated a large legacy C++ library into C#, improving its performance",
      "Conducted technical interviews for 3D developer candidates, assessing 3D rendering techniques, data structures, and overall fit for the development team",
      "Developed a module for reading, writing, and converting models between various data formats commonly used in geology",
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
