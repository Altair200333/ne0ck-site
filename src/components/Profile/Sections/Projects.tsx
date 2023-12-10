import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { ProjectShortInfo } from "@/types/projects";

const PROJECTS_INFO: ProjectShortInfo[] = [
  {
    title: "🎨 Personal website",
    description: "Small web app built with Next.js and chakra ui",
  },
  {
    title: "🌤️ Weather NSU app ",
    description:
      "Weather app with widget using local weather data from weather.nsu.ru",
  },
  {
    title: "🎮 Voxel raytracing engine (again?)",
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
    description: "Simple 3D engine made from scratch built only with SDL",
  },
];

const ProjectInfo: React.FC<{ item: ProjectShortInfo }> = ({ item }) => {
  const { title, description } = item;
  return (
    <Stack
      spacing={1}
      _hover={{
        backgroundColor: "#424461",
      }}
      p={3}
      borderRadius={"12px"}
      transition={"0.2s ease-in-out"}
      cursor={"pointer"}
    >
      <Text fontWeight={500}>{title}</Text>
      <Text color={"gray.100"}>{description}</Text>
    </Stack>
  );
};

const Projects: React.FC = () => {
  return (
    <Box>
      {PROJECTS_INFO.map((item) => (
        <ProjectInfo item={item} key={item.title} />
      ))}
    </Box>
  );
};

export default Projects;
