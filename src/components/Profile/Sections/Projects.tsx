import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { ProjectShortInfo } from "@/types/projects";

const PROJECTS_INFO: ProjectShortInfo[] = [
  {
    title: "🌤️ Weather NSU app ",
    description: "Small weather app using data from weather.nsu.ru",
  },
  {
    title: "🎮 Voxel raytracing engine (again?)",
    description: "Realtime GPU/CPU voxel raytracer",
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
    description: "Simple 3D engine built only with SDL",
  },
];

const ProjectInfo: React.FC<{ item: ProjectShortInfo }> = ({ item }) => {
  const { title, description } = item;
  return (
    <Stack spacing={1}>
      <Text fontWeight={500}>{title}</Text>
      <Text color={"gray.100"}>{description}</Text>
    </Stack>
  );
};

const Projects: React.FC = () => {
  return (
    <Box>
      <Stack spacing={8}>
        {PROJECTS_INFO.map((item) => (
          <ProjectInfo item={item} key={item.title} />
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
