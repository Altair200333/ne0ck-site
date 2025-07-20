import { ExperienceItem } from "@/types/common";

export const EXPERIENCE_INFO: ExperienceItem[] = [
  {
    title: "Full-stack Developer",
    company: "Regie.ai",
    startDate: "2022-10-01",
    details: ["Keeping silence..."],
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
