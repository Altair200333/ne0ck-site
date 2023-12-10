import React from "react";
import { Box } from "@chakra-ui/react";
import { PROJECTS_INFO } from "@/data/static-data";
import ProjectInfo from "./ProjectInfo";

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
