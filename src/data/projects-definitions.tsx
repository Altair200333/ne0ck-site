import { ProjectShortInfo } from "@/types/common";
import { PiVinylRecord } from "react-icons/pi";
import { IoBarChartOutline } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";
import { GrDocumentConfig } from "react-icons/gr";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FiSunset } from "react-icons/fi";
import { LuMove3D } from "react-icons/lu";
import { TbMathFunction } from "react-icons/tb";
import { GiCat } from "react-icons/gi";
import { GrCube } from "react-icons/gr";

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
    title: "Open Vibrance",
    icon: <PiVinylRecord size={20} />,
    description: "Minimalistic desktop overlay dictation app",
  },
  {
    id: ProjectId.TradingAgent,
    title: "Trading agent",
    icon: <IoBarChartOutline size={20} />,
    description: "Using LLM to decide actions on crypto market",
  },
  {
    id: ProjectId.ObisidianMdToPdfConverter,
    title: "Obisidian MD to PDF converter",
    icon: <GrDocumentPdf size={20} />,
    description: "Convert obsidian MD doc to PDF with respect to custom theme",
  },
  {
    id: ProjectId.NvidiaConfigManager,
    title: "Nvidia config manager",
    icon: <GrDocumentConfig size={20} />,
    description: "Automate presets management for Nvidia control panel",
  },

  {
    id: ProjectId.EscapeFromTarkovRadar,
    title: "Escape From Tarkov radar",
    icon: <LiaMapMarkedAltSolid size={20} />,
    description:
      "C# app that tracks in-game location of you and your and teamates",
  },
  {
    id: ProjectId.WeatherNsuApp,
    title: "Weather NSU app ",
    icon: <TiWeatherPartlySunny size={20} />,
    description:
      "Mini weather app with widget using local weather data from weather.nsu.ru",
  },
  {
    id: ProjectId.VoxelRaytracingEngine,
    title: "Voxel raytracing engine (again?)",
    icon: <GrCube size={20} />,
    description:
      "Realtime GPU/CPU voxel raytracer supporting magica voxel models",
  },
  {
    id: ProjectId.VoxelRaytracingEngineDemo,
    title: "Realtime voxel raytracer",
    icon: <FiSunset size={20} />,
    description: "Realtime GPU voxel raytracing engine",
  },
  {
    id: ProjectId.Mixer3d,
    title: "Mixer 3D",
    icon: <LuMove3D size={20} />,
    description: "3D engine with raytracing written in C++ and OpenGL",
  },
  {
    id: ProjectId.Simple3dEngine,
    title: "Simple 3D engine",
    icon: <TbMathFunction size={20} />,
    description:
      "Simple 3D engine made from scratch built only with SDL in C++",
  },
  {
    id: ProjectId.PersonalWebsite,
    title: "Personal website",
    icon: <GiCat size={20} />,
    description: "Small web app built with Next.js and Chakra UI",
  },
];
